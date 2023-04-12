import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import styles from './ProjectList.module.scss';
import { useOutletContext } from 'react-router-dom';

export function ProjectList() {
  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);
  const cont = useOutletContext<(err: boolean) => void>();

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    axios
      .get<RepositorySummary[]>('/api/repos', { signal: abortController.signal })
      .then((resp) => {
        setProjects(resp.data);
        setFetchingProjects(false);
        setError(false);
        cont(false);
      })
      .catch(() => {
        setFetchingProjects(false);
        setError(true);
        cont(true);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {!error && !fetchingProjects && (
        <>
          <div className={styles['pinned-project-list']}>
            <div className={styles['project-list']}>
              {projects
                .filter((p) => p.pinned)
                .map((project) => {
                  return (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      pinned={true}
                      description={project.description}
                      githubUrl={project.githubUrl}
                    />
                  );
                })}
            </div>
          </div>
          <div className={styles['unpinned-project-list']}>
            <div className={styles['project-list']}>
              {projects
                .filter((p) => !p.pinned)
                .map((project) => {
                  return (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      pinned={false}
                      description={project.description}
                      githubUrl={project.githubUrl}
                    />
                  );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

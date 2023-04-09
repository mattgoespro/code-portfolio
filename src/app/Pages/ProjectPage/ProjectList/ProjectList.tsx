import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import styles from './ProjectList.module.scss';
import { ProjectRequestFailure } from './ProjectListRequestFailure/ProjectListRequestFailure';

export function ProjectList() {
  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    axios
      .get<RepositorySummary[]>('/api/repos', { signal: abortController.signal })
      .then((resp) => {
        setProjects(resp.data);
        setFetchingProjects(false);
        setError(false);
      })
      .catch(() => {
        setFetchingProjects(false);
        setError(true);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {error && (
        <ProjectRequestFailure
          errorMessage={
            <div>
              <span>Oops!</span> The projects failed to load
            </div>
          }
        />
      )}
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

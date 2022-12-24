import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import styles from './ProjectList.module.scss';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { ProjectListRequestFailure } from './ProjectListRequestFailure/ProjectListRequestFailure';

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
      {error && <ProjectListRequestFailure />}
      {!error && !fetchingProjects && (
        <div className={styles.wrapper}>
          <div className={styles['page-content']}>
            <div className={styles.intro}>
              <h1 className={styles['intro-title']}>Browse Projects</h1>
              <h2 className={styles['intro-subtitle']}>Source code available on GitHub</h2>
            </div>
            <div className={styles['pinned-project-list']}>
              <div className={styles['title-pinned']}>
                <div></div>
                <h1>Pinned</h1>
                <MilitaryTechIcon
                  className={styles['pinned-icon']}
                  sx={{ fontSize: 32, color: 'gold' }}
                />
                <div></div>
              </div>
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
              <div className={styles['title-unpinned']}>
                <div></div>
                <h1>Unpinned</h1>
                <LabelImportantIcon className={styles['unpinned-icon']} fontSize="large" />
                <div></div>
              </div>
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
          </div>
        </div>
      )}
    </>
  );
}

import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectListItem } from './ProjectListItem/ProjectListItem';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import { ProjectPageLoadError } from '../ProjectPageLoadError';
import styles from './ProjectListView.module.scss';
import { PulseLoader } from 'react-spinners';

export function ProjectListView() {
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

  function getProjectFetchLoader() {
    return (
      <div className={styles.loader}>
        <div className={styles['loader-text']}>fetching projects</div>
        <PulseLoader loading={fetchingProjects} color="#575757" size="10px" speedMultiplier={0.7} />
      </div>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        {error && <ProjectPageLoadError />}
        {fetchingProjects && getProjectFetchLoader()}
        {!error && !fetchingProjects && (
          <>
            <div className={styles.intro}>
              <h1 className={styles['intro-title']}>
                Here are some of my most noteworthy projects up-to-date
              </h1>
              <h2 className={styles['intro-subtitle']}>
                All are available to view on my GitHub profile
              </h2>
            </div>
            <div className={styles['intro-divider']}></div>
            <div className={styles['pinned-projects-title']}>Pinned Projects</div>
            <div className={styles['project-list']}>
              {projects
                .filter((p) => p.pinned)
                .map((project) => {
                  return (
                    <ProjectListItem
                      key={project.name}
                      name={project.name}
                      pinned={true}
                      description={project.description}
                      githubUrl={project.githubUrl}
                    />
                  );
                })}
            </div>
            <div className={styles['project-list']}>
              {projects
                .filter((p) => !p.pinned)
                .map((project) => {
                  return (
                    <ProjectListItem
                      key={project.name}
                      name={project.name}
                      pinned={false}
                      description={project.description}
                      githubUrl={project.githubUrl}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

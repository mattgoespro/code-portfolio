import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectListItem } from './ProjectListItem/ProjectListItem';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import { ProjectPageLoadError } from '../ProjectPageLoadError';
import styles from './ProjectListView.module.scss';
import colors from '@shared/styles/_colors.module.scss';
import { PulseLoader } from 'react-spinners';
import { DotDivider } from '@shared/components/DotDivider/DotDivider';

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
        <PulseLoader loading={fetchingProjects} color="black" size="20px" speedMultiplier={0.7} />
      </div>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        {error && <ProjectPageLoadError />}
        {fetchingProjects && getProjectFetchLoader()}
        {!error && !fetchingProjects && (
          <div className={styles['page-content']}>
            <div className={styles.intro}>
              <h1 className={styles['intro-title']}>
                My showcased projects automatically get listed here
              </h1>
              <h2 className={styles['intro-subtitle']}>Source code available on GitHub</h2>
            </div>
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
            <div className={styles['list-divider']}>
              <DotDivider size={10} color={colors.darkBlue} />
              <DotDivider size={10} color={colors.darkBlue} />
              <DotDivider size={10} color={colors.darkBlue} />
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
          </div>
        )}
      </div>
    </>
  );
}

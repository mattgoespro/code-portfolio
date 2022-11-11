import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectListItem } from './ProjectListItem/ProjectListItem';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import { ProjectPageLoadError } from '../ProjectPageLoadError';
import styles from './ProjectListView.module.scss';
import { useAppDispatch } from '@shared/redux/hooks/UseHook';
import {
  hideLoadingOverlay,
  showLoadingOverlay
} from '@shared/redux/reducers/loading-overlay-slice';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export function ProjectListView() {
  const dispatch = useAppDispatch();

  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(showLoadingOverlay());
    setFetchingProjects(true);

    axios
      .get<RepositorySummary[]>('/api/repos', { signal: abortController.signal })
      .then((resp) => {
        setProjects(resp.data);
        setFetchingProjects(false);
        dispatch(hideLoadingOverlay());
        setError(false);
      })
      .catch(() => {
        setFetchingProjects(false);
        dispatch(hideLoadingOverlay());
        setError(true);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {error && <ProjectPageLoadError />}
        {!error && !fetchingProjects && (
          <div className={styles['page-content']}>
            <div className={styles.intro}>
              <h1 className={styles['intro-title']}>
                My public projects are listed here automatically
              </h1>
              <h2 className={styles['intro-subtitle']}>Source code available on GitHub</h2>
            </div>
            <div className={styles['pinned-project-list']}>
              <div className={styles['title-pinned']}>
                <div></div>
                <h1>Pinned</h1>
                <LabelImportantIcon className={styles['pinned-icon']} fontSize="large" />
                <div></div>
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
          </div>
        )}
      </div>
    </>
  );
}

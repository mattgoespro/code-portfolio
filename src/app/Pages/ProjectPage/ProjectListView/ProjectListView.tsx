import { useAppDispatch, useAppSelector } from '@shared/redux/hooks/UseHook';
import {
  hideLoadingOverlay,
  showLoadingOverlay
} from '@shared/redux/reducers/loading-overlay-slice';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './ProjectListView.scss';
import { ProjectListItem } from './ProjectListItem/ProjectListItem';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import { ProjectPageLoadError } from '../ProjectPageLoadError';

export function ProjectListView() {
  const dispatch = useAppDispatch();
  const loaderVisible = useAppSelector((state) => state.loadingOverlay.visible);

  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(showLoadingOverlay());

    axios
      .get<RepositorySummary[]>('/api/repos', { signal: abortController.signal })
      .then((resp) => {
        setProjects(resp.data);
        dispatch(hideLoadingOverlay());
        setError(false);
      })
      .catch(() => {
        dispatch(hideLoadingOverlay());
        setError(true);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className="project-list">
        {error && <ProjectPageLoadError />}
        {!error && !loaderVisible && (
          <>
            <div className="project-intro">
              <h1 className="title-intro">
                Here are some of my most noteworthy projects up-to-date
              </h1>
              <h2 className="title-intro-2">All are available to view on my GitHub profile</h2>
            </div>
            <div className="project-list">
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
            <div className="project-list">
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

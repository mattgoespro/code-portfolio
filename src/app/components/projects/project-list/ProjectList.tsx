import { ApiRepositoryResponseDTO } from '@shared/services/shared.dto';
import { useAppDispatch, useAppSelector } from '@shared/redux/hooks/UseHook';
import {
  hideLoadingOverlay,
  showLoadingOverlay
} from '@shared/redux/reducers/loading-overlay-slice';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Project from './project/Project';
import './ProjectList.scss';

export function ProjectList() {
  const dispatch = useAppDispatch();
  const loaderVisible = useAppSelector((state) => state.loadingOverlay.visible);

  const [projects, setProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(showLoadingOverlay());

    axios
      .get<ApiRepositoryResponseDTO[]>('/api/repos', { signal: abortController.signal })
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

  const projectLoadError = (
    <div className="project-load-error">
      <div className="error-wrapper">
        <div className="err-msg">Oops! My projects are unable to be displayed at this time.</div>
        <div className="err-try-again">
          Please try again later, or contact me directly on my socials.
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );

  return (
    <>
      <div className="project-page">
        {error && projectLoadError}
        {!error && !loaderVisible && (
          <>
            <div className="project-intro">
              <h1 className="title-intro">
                Here are some of my most noteworthy projects up-to-date.
              </h1>
              <h2 className="title-intro-2">All are available on my GitHub profile.</h2>
            </div>
            <div className="project-list">
              {projects
                .filter((p) => p.pinned)
                .map((project) => {
                  return <Project key={project.name} project={project} />;
                })}
            </div>
            <div className="project-list">
              {projects
                .filter((p) => !p.pinned)
                .map((project) => {
                  return <Project key={project.name} project={project} />;
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

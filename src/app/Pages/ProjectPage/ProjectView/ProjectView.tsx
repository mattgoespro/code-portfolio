import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectView.scss';
import {
  hideLoadingOverlay,
  showLoadingOverlay
} from '@shared/redux/reducers/loading-overlay-slice';
import { useAppDispatch } from '@shared/redux/hooks/UseHook';
import { ProjectLanguageChart } from './ProjectLanguageChart/ProjectLanguageChart';
import { ProjectReadme } from './ProjectReadme/ProjectReadme';
import { RepositoryDetails, RepositoryLanguages } from '@mattgoespro/hoppingmode-web';
import { Buffer } from 'buffer';
import { ProjectPageLoadError } from '../ProjectPageLoadError';
import { ProjectRepositoryStats } from './ProjectRepositoryStats/ProjectRepositoryStats';

export function ProjectView() {
  const { projectName } = useParams();
  const dispatch = useAppDispatch();

  const [project, setProject] = useState<RepositoryDetails>(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [projectLanguages, setProjectLanguages] = useState<RepositoryLanguages>(null);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(showLoadingOverlay());
    setLoadingProject(true);

    Promise.all([
      axios.get<RepositoryDetails>(`/api/repos/${projectName}`, {
        signal: abortController.signal
      }),
      axios.get<RepositoryLanguages>(`/api/repos/${projectName}/languages`, {
        signal: abortController.signal
      })
    ])
      .then((resp) => {
        setError(null);
        setProject(resp[0].data);
        setProjectLanguages(resp[1].data);
        dispatch(hideLoadingOverlay());
        setLoadingProject(false);
      })
      .catch((err) => {
        setError(err);
        setProject(null);
        setProjectLanguages(null);
        dispatch(hideLoadingOverlay());
        setLoadingProject(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="project-view-page">
      {error && <ProjectPageLoadError />}
      {!error && !loadingProject && (
        <>
          <div className="project-intro">
            <h1 className="project-name">{project.portfolioSpec.name}</h1>
            <div className="project-skills">Skills</div>
          </div>
          <div className="project-content">
            <div className="project-content-details">
              <div className="project-content-details-header">
                <div className="project-content-details-title">Project Details</div>
              </div>
              <div className="project-content-sections">
                <div>
                  <ProjectRepositoryStats project={project} />
                </div>
              </div>
              <div>
                <ProjectLanguageChart languages={projectLanguages} />
              </div>
            </div>
            <div className="project-view-readme">
              <ProjectReadme readmeContent={Buffer.from(project.readmeDoc, 'base64').toString()} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './ProjectView.scss';
import {
  hideLoadingOverlay,
  showLoadingOverlay
} from '@shared/redux/reducers/loading-overlay-slice';
import { useAppDispatch } from '@shared/redux/hooks/UseHook';
import { ProjectLanguageChart } from './ProjectLanguageChart/ProjectLanguageChart';
import { ProjectReadme } from './ProjectReadme/ProjectReadme';
import { RepositoryDetails, RepositoryLanguages } from '@mattgoespro/hoppingmode-web';

export function ProjectView() {
  const { projectName } = useParams();
  const dispatch = useAppDispatch();

  const [project, setProject] = useState<RepositoryDetails>(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [projectLanguages, setProjectLanguages] = useState<RepositoryLanguages>(null);
  const [_apiError, setApiError] = useState();

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
        setApiError(null);
        setProject(resp[0].data);
        setProjectLanguages(resp[1].data);
        dispatch(hideLoadingOverlay());
        setLoadingProject(false);
      })
      .catch((err) => {
        setApiError(err);
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
    <div className="view-project">
      {!loadingProject && (
        <>
          <div className="view-project-header">
            <div className="view-navigate-back">
              <Link to="../list" className="link-view-navigate-back">
                <NavigateBeforeIcon
                  className="icon-view-navigate-back"
                  sx={{ fontSize: 50, color: 'orange' }}
                />
                <div>Return</div>
              </Link>
            </div>
            <div>
              <h1 className="view-project-title">{project.portfolioSpec.name}</h1>
            </div>
          </div>
          <div className="project-content">
            <div className="summary-wrapper">
              <div className="summary">
                <div className="summary-repo">
                  <div className="summary-repo-activity">Project Activity</div>
                  <span>Created: {new Date(project.createdTimestamp).toUTCString()}</span>
                  <span>Last Updated: {new Date(project.updatedTimestamp).toUTCString()}</span>
                </div>
              </div>
              <div className="summary-language-chart-wrapper summary">
                <div className="summary-chart">
                  <span className="summary-language-chart-title">Languages Used</span>
                  {Object.keys(projectLanguages).length > 0 &&
                    (<ProjectLanguageChart languageComposition={projectLanguages} /> || (
                      <span className="summary-languages-none-found">
                        <i>No recognized languages found.</i>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="readme">
              <ProjectReadme readmeContent={project.readmeDoc} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

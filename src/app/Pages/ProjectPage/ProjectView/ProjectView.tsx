import {
  ProjectLanguageComposition,
  ApiRepositoryReadmeResponseDTO,
  ApiRepositoryLanguagesResponseDTO,
  ApiRepositoryResponseDTO,
  ApiRepositorySkillsResponseDTO
} from '@shared/services/shared.dto';
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

export function ProjectView() {
  const { projectName } = useParams();
  const dispatch = useAppDispatch();

  const [project, setProject] = useState<ApiRepositoryResponseDTO>(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [portfolio, setPortfolio] = useState<ApiRepositorySkillsResponseDTO>(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [languageComposition, setLanguageComposition] = useState<ProjectLanguageComposition>(null);
  const [_apiError, setApiError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(showLoadingOverlay());
    setLoadingProject(true);

    Promise.all([
      axios.get<ApiRepositoryResponseDTO>(`/api/repos/${projectName}`, {
        signal: abortController.signal
      }),
      axios.get<ApiRepositorySkillsResponseDTO>(`/api/repos/${projectName}/portfolio`, {
        signal: abortController.signal
      }),
      axios.get<ApiRepositoryReadmeResponseDTO>(`/api/repos/${projectName}/readme`, {
        signal: abortController.signal
      }),
      axios.get<ApiRepositoryLanguagesResponseDTO>(`/api/repos/${projectName}/languages`, {
        signal: abortController.signal
      })
    ])
      .then((resp) => {
        setApiError(null);
        setProject(resp[0].data);
        setPortfolio(resp[1].data);
        setReadmeContent(resp[2].data.content);
        setLanguageComposition(resp[3].data.languages);
        dispatch(hideLoadingOverlay());
        setLoadingProject(false);
      })
      .catch((err) => {
        setApiError(err);
        setProject(null);
        setPortfolio(null);
        setReadmeContent(null);
        setLanguageComposition(null);
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
              <h1 className="view-project-title">{portfolio.name}</h1>
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
                  {Object.keys(languageComposition).length > 0 &&
                    (<ProjectLanguageChart languageComposition={languageComposition} /> || (
                      <span className="summary-languages-none-found">
                        <i>No recognized languages found.</i>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="readme">
              <ProjectReadme readmeContent={readmeContent} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import { IconButton } from '@mui/material';
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
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './ProjectView.scss';
import { ProjectLanguageChart } from './project-language-chart/ProjectLanguageChart';
import { ProjectReadme } from './project-readme/ProjectReadme';
import {
  hideLoadingOverlay,
  showLoadingOverlay
} from '@shared/redux/reducers/loading-overlay-slice';
import { useAppDispatch } from '@shared/redux/hooks/UseHook';

export function ProjectView() {
  const { projectName } = useParams();
  const dispatch = useAppDispatch();

  const [project, setProject] = useState<ApiRepositoryResponseDTO>(null);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [technicalSkills, setTechnicalSkills] = useState<ApiRepositorySkillsResponseDTO>(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [languageComposition, setLanguageComposition] = useState<ProjectLanguageComposition>(null);
  const [_apiError, setApiError] = useState();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(showLoadingOverlay());
    setLoadingProjects(true);

    Promise.all([
      axios.get<ApiRepositoryResponseDTO>(`/api/repos/${projectName}`, {
        signal: abortController.signal
      }),
      axios.get<ApiRepositorySkillsResponseDTO>(`/api/repos/${projectName}/skills`, {
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
        setTechnicalSkills(resp[1].data);
        setReadmeContent(resp[2].data.content);
        setLanguageComposition(resp[3].data.languages);
        dispatch(hideLoadingOverlay());
        setLoadingProjects(false);
      })
      .catch((err) => {
        setApiError(err);
        setProject(null);
        setTechnicalSkills(null);
        setReadmeContent(null);
        setLanguageComposition(null);
        dispatch(hideLoadingOverlay());
        setLoadingProjects(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  function getProjectSkillsArray(skills: string[]) {
    const skillElements: JSX.Element[] = [];

    skills.forEach((skill, index) => {
      skillElements.push(
        <span key={skill} className="skill-name">
          {skill}
        </span>
      );

      if (index != skills.length - 1) {
        skillElements.push(<div key={`${skill}${index}`} className="skill-divider"></div>);
      }
    });

    return skillElements;
  }

  return (
    <div className="view-project">
      {!loadingProjects && (
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
              <h1 className="view-project-title">
                {project.friendlyName || project.repositoryName}
              </h1>
              {technicalSkills.skills.length > 0 && (
                <div className="view-project-skills">
                  {getProjectSkillsArray(technicalSkills.skills)}
                </div>
              )}
            </div>
          </div>
          <div className="divider header-divider"></div>
          <div className="project-content">
            <ScrollMenu
              Header={
                <div className="scroll-menu-header">
                  <IconButton
                    sx={{ visibility: activeTab === 0 ? 'hidden' : 'visible' }}
                    color="primary"
                    onClick={() => setActiveTab(0)}
                  >
                    <NavigateBeforeIcon fontSize="small" />
                  </IconButton>
                  <div className="scroll-header-title">
                    {activeTab === 0 ? 'Details' : 'Readme'}
                  </div>
                  <IconButton
                    sx={{ visibility: activeTab === 1 ? 'hidden' : 'visible' }}
                    color="primary"
                    onClick={() => setActiveTab(1)}
                  >
                    <NavigateNextIcon fontSize="small" />
                  </IconButton>
                </div>
              }
            >
              {activeTab === 0 ? (
                <div className="summary-wrapper">
                  <div className="summary-repo-wrapper summary">
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
              ) : (
                <div className="readme">
                  <ProjectReadme readmeContent={readmeContent} />
                </div>
              )}
            </ScrollMenu>
          </div>
        </>
      )}
    </div>
  );
}

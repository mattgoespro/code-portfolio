import Project from './project/Project';
import axios, { AxiosError } from 'axios';
import './Projects.scss';
import { CSSProperties, useState } from 'react';
import {
  ApiRepositoryResponseDTO,
  ApiRepositoryLanguagesResponseDTO,
  ApiRepositoryReadmeResponseDTO,
  ApiError,
  ApiHttpErrorStatus
} from '@shared';
import PageBanner from '@shared/components/page-banner/PageBanner';
import { useEffect } from 'react';
import SpinnerLoadingOverlay from '@shared/components/spinner-loading-overlay/SpinnerLoadingOverlay';
import ProjectDetailsDialog from './project/details-dialog/DetailsDialog';
import { ProjectLanguageComposition } from '@shared';

interface ProjectCache {
  [key: string]: {
    readmeContent: string;
    languageComposition: ProjectLanguageComposition;
  };
}

interface ApiErrorResponseData {
  status: ApiHttpErrorStatus;
  message: string;
}

function ProjectList() {
  const [pinnedProjects, setPinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [unpinnedProjects, setUnpinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [apiErrorResponseData, setApiErrorResponseData] = useState<ApiErrorResponseData>(null);
  const [fetchingProjects, setFetchingProjects] = useState(false);
  const [activeWorkingProject, setActiveWorkingProject] = useState<ApiRepositoryResponseDTO>(null);
  const [overlayFetchProjectDetailsActive, setOverlayFetchProjectDetailsActive] = useState(false);
  const [projectDetailsDialogOpen, setProjectDetailsDialogOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState('');
  const [languageComposition, setLanguageComposition] = useState<ProjectLanguageComposition>(null);
  const [projectDetailsCache, setProjectDetailsCache] = useState<ProjectCache>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    Promise.all([
      axios.get<ApiRepositoryResponseDTO[]>('/api/repos', { signal: abortController.signal }),
      axios.get<ApiRepositoryResponseDTO[]>('/api/repos/pinned', { signal: abortController.signal })
    ])
      .then((resp) => {
        setApiErrorResponseData(null);
        setUnpinnedProjects(resp[0].data);
        setPinnedProjects(resp[1].data);

        const repos = [...resp[0].data, ...resp[1].data];
        const cache = {};
        repos.forEach((repo) => {
          cache[repo.repositoryName] = {
            readmeContent: null,
            languageComposition: null
          };
        });
        setProjectDetailsCache(cache);
        setFetchingProjects(false);
      })
      .catch((err: ApiError | AxiosError) => {
        setFetchingProjects(false);

        if (err instanceof AxiosError) {
          const e = err as AxiosError;

          if (e.code === AxiosError.ERR_CANCELED) {
            setApiErrorResponseData(null);
            return;
          }

          if (e.response.status === ApiHttpErrorStatus.BAD_GATEWAY) {
            setApiErrorResponseData({
              status: ApiHttpErrorStatus.BAD_GATEWAY,
              message: 'Service is currently not available.'
            });
          }
        } else {
          setApiErrorResponseData({
            status: ApiHttpErrorStatus.INTERNAL_SERVER_ERROR,
            message:
              'Oops, something went wrong on my side. Reporting the issue to me will be greatly appreciated!'
          });
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    if (activeWorkingProject != null) {
      setOverlayFetchProjectDetailsActive(true);

      const cachedProject = projectDetailsCache[activeWorkingProject.repositoryName];

      if (cachedProject.readmeContent != null && cachedProject.languageComposition != null) {
        setReadmeContent(cachedProject.readmeContent);
        setLanguageComposition(cachedProject.languageComposition);
        setOverlayFetchProjectDetailsActive(false);
        setProjectDetailsDialogOpen(true);

        return () => abortController.abort();
      }

      Promise.all([
        axios.get<ApiRepositoryReadmeResponseDTO>(
          `/api/repos/${activeWorkingProject.repositoryName}/readme`,
          {
            signal: abortController.signal
          }
        ),
        axios.get<ApiRepositoryLanguagesResponseDTO>(
          `/api/repos/${activeWorkingProject.repositoryName}/languages`,
          {
            signal: abortController.signal
          }
        )
      ])
        .then((resp) => {
          setReadmeContent(resp[0].data.content);
          setLanguageComposition(resp[1].data.languages);

          projectDetailsCache[activeWorkingProject.repositoryName] = {
            readmeContent: resp[0].data.content,
            languageComposition: resp[1].data.languages
          };

          setOverlayFetchProjectDetailsActive(false);
          setProjectDetailsDialogOpen(true);
        })
        .catch(() => {
          setOverlayFetchProjectDetailsActive(false);
          setActiveWorkingProject(null);
          setReadmeContent(null);
          setLanguageComposition(null);
        });

      return () => {
        abortController.abort();
      };
    }
  }, [activeWorkingProject]);

  function triggerDialogLoadingOverlay(project: ApiRepositoryResponseDTO) {
    setOverlayFetchProjectDetailsActive(true);
    setActiveWorkingProject(project);
  }

  function createProjectListElements(
    projects: ApiRepositoryResponseDTO[],
    pinnedProjects: boolean
  ) {
    return projects.map((project, index) => {
      const indexStyle = {};
      indexStyle[`--${pinnedProjects ? 'pinned' : 'unpinned'}ProjectIndex`] = index;
      return (
        <div
          key={project.repositoryName}
          className={'project' + (pinnedProjects ? ' pinned' : '')}
          style={indexStyle as CSSProperties}
        >
          <Project
            key={project.repositoryName}
            repo={project}
            pinned={pinnedProjects}
            onLoadDetails={triggerDialogLoadingOverlay}
          />
        </div>
      );
    });
  }

  return (
    <div className="projects-wrapper">
      <SpinnerLoadingOverlay
        spinnerColor="white"
        visible={fetchingProjects || overlayFetchProjectDetailsActive}
      />
      {projectDetailsDialogOpen && (
        <ProjectDetailsDialog
          dialogOpen={projectDetailsDialogOpen}
          project={activeWorkingProject}
          pinned={pinnedProjects.includes(activeWorkingProject)}
          readmeContent={readmeContent}
          languageComposition={languageComposition}
          onDialogClose={() => {
            setProjectDetailsDialogOpen(false);
            setActiveWorkingProject(null);
          }}
        />
      )}
      <div className="project-list-wrapper">
        <PageBanner
          title="Here's what I've been working on."
          subtitle="...among other things"
          backgroundImage="images/programmer-setup.jpg"
          backgroundImageAdjust={true}
        />
        {!fetchingProjects && (
          <div className="projects">
            <div className="pinned-projects-wrapper">
              <h1 className="title-pinned-projects">Projects of Interest</h1>
              <div className="divider"></div>
              <div className="project-list">{createProjectListElements(pinnedProjects, true)}</div>
            </div>
            <div className="divider list-divider"></div>
            <h1 className="title-unpinned-projects">Projects I&apos;ve Done for Fun</h1>
            <div className="divider unpinned-projects-divider"></div>
            <div className="project-list">{createProjectListElements(unpinnedProjects, false)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectList;

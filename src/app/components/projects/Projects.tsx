import GithubProject from './project/Project';
import axios from 'axios';
import './Projects.scss';
import { CSSProperties, useState } from 'react';
import {
  ApiRepositoryResponseDTO,
  ApiRepositoryLanguagesResponseDTO,
  ApiRepositoryReadmeResponseDTO
} from '@shared/services/shared.model';
import ProjectsBanner from '@images/page-banner-projects-3.png';
import PageBanner from '@shared/components/page-banner/PageBanner';
import { useEffect } from 'react';
import SpinnerLoadingOverlay from '@shared/components/spinner-loading-overlay/SpinnerLoadingOverlay';
import ProjectDetailsDialog from './project/details-dialog/DetailsDialog';
import { ProjectLanguageComposition } from '@shared/services/shared.model';

function ProjectList() {
  const [pinnedProjects, setPinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [unpinnedProjects, setUnpinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [fetchingProjects, setFetchingProjects] = useState(false);
  const [activeWorkingProject, setActiveWorkingProject] = useState<ApiRepositoryResponseDTO>(null);
  const [overlayFetchProjectDetailsActive, setOverlayFetchProjectDetailsActive] = useState(false);
  const [projectDetailsDialogOpen, setProjectDetailsDialogOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState('');
  const [languageComposition, setLanguageComposition] = useState<ProjectLanguageComposition>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    Promise.all([
      axios.get<ApiRepositoryResponseDTO[]>('/api/repos', { signal: abortController.signal }),
      axios.get<ApiRepositoryResponseDTO[]>('/api/repos/pinned', { signal: abortController.signal })
    ])
      .then((resp) => {
        setUnpinnedProjects(resp[0].data);
        setPinnedProjects(resp[1].data);
        setFetchingProjects(false);
      })
      .catch(() => {
        setFetchingProjects(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    if (activeWorkingProject != null) {
      setOverlayFetchProjectDetailsActive(true);

      Promise.all([
        axios.get<ApiRepositoryReadmeResponseDTO>(
          `/api/repos/${activeWorkingProject.name}/readme`,
          {
            signal: abortController.signal
          }
        ),
        axios.get<ApiRepositoryLanguagesResponseDTO>(
          `/api/repos/${activeWorkingProject.name}/languages`,
          {
            signal: abortController.signal
          }
        )
      ])
        .then((resp) => {
          setReadmeContent(resp[0].data.content);
          setLanguageComposition(resp[1].data.languages);
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

  function triggerLoadingOverlay(project: ApiRepositoryResponseDTO) {
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
          key={project.name}
          className={'project' + (pinnedProjects ? ' pinned' : '')}
          style={indexStyle as CSSProperties}
        >
          <GithubProject
            key={project.name}
            repo={project}
            pinned={pinnedProjects}
            triggerLoadingOverlay={triggerLoadingOverlay}
          />
        </div>
      );
    });
  }

  return (
    <div>
      <SpinnerLoadingOverlay
        spinnerColor="white"
        visible={fetchingProjects || overlayFetchProjectDetailsActive}
      />
      {projectDetailsDialogOpen && (
        <ProjectDetailsDialog
          dialogOpen={projectDetailsDialogOpen}
          name={activeWorkingProject.name}
          pinned={pinnedProjects.includes(activeWorkingProject)}
          createdTimestamp={activeWorkingProject.createdTimestamp}
          updatedTimestamp={activeWorkingProject.updatedTimestamp}
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
          backgroundImage={ProjectsBanner}
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

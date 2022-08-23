import GithubProject from './project/Project';
import axios from 'axios';
import './Projects.scss';
import { CSSProperties, useState } from 'react';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';
import ProjectsBanner from '@images/page-banner-projects.jpg';
import PageBanner from '@shared/components/page-banner/PageBanner';
import { useEffect } from 'react';
import SpinnerLoadingOverlay from '@shared/components/spinner-loading-overlay/SpinnerLoadingOverlay';
import ProjectReadmeDialog from './readme-dialog/ReadmeDialog';

function ProjectList() {
  const [pinnedProjects, setPinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [unpinnedProjects, setUnpinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [fetchingProjects, setFetchingProjects] = useState(false);
  const [activeWorkingProject, setActiveWorkingProject] = useState<ApiRepositoryResponseDTO>(null);
  const [overlayFetchReadmeActive, setOverlayFetchReadmeActive] = useState(false);
  const [readmeDialogOpen, setReadmeDialogOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState(null);

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
      setOverlayFetchReadmeActive(true);

      axios
        .get(`/api/repos/${activeWorkingProject.name}/readme`, {
          signal: abortController.signal
        })
        .then((resp) => {
          setOverlayFetchReadmeActive(false);
          setReadmeContent(resp.data);
          setReadmeDialogOpen(true);
        })
        .catch(() => {
          setOverlayFetchReadmeActive(false);
          setActiveWorkingProject(null);
        });

      return () => {
        abortController.abort();
      };
    }
  }, [activeWorkingProject]);

  function triggerLoadingOverlay(project: ApiRepositoryResponseDTO) {
    setOverlayFetchReadmeActive(true);
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
        visible={fetchingProjects || overlayFetchReadmeActive}
      />
      {readmeDialogOpen && (
        <ProjectReadmeDialog
          dialogOpen={readmeDialogOpen}
          project={activeWorkingProject}
          projectPinned={pinnedProjects.includes(activeWorkingProject)}
          readmeContent={readmeContent}
          onDialogClose={() => {
            setReadmeDialogOpen(false);
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
        <div className="projects">
          <div className="pinned-projects-wrapper">
            <h1 className="title-pinned-projects">Projects of Interest</h1>
            <div className="pinned-projects">{createProjectListElements(pinnedProjects, true)}</div>
            <div className="pinned-projects-exit"></div>
          </div>
          <div className="unpinned-projects">
            {createProjectListElements(unpinnedProjects, false)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;

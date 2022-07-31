import GithubProject from './project/Project';
import axios from 'axios';
import './Projects.scss';
import { CSSProperties, useState } from 'react';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';
import ErrorNotificationService, {
  ErrorNotification
} from '@shared/services/error-notification/ErrorNotification.service';
import ProjectsBanner from '@images/page-banner-projects.jpg';
import PageBanner from '@shared/components/page-banner/PageBanner';
import { useEffect } from 'react';
import { Alert } from '@mui/material';
import SpinnerLoadingOverlay from '@shared/components/spinner-loading-overlay/SpinnerLoadingOverlay';
import ProjectReadmeDialog from './readme-dialog/ReadmeDialog';

function ProjectList() {
  const [pinnedProjects, setPinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [unpinnedProjects, setUnpinnedProjects] = useState<ApiRepositoryResponseDTO[]>([]);
  const [fetchingProjects, setFetchingProjects] = useState(false);
  const [errorNotifications, setErrorNotifications] = useState<ErrorNotification[]>([]);
  const [activeWorkingProject, setActiveWorkingProject] = useState<ApiRepositoryResponseDTO>(null);
  const [overlayFetchReadmeActive, setOverlayFetchReadmeActive] = useState(false);
  const [readmeDialogOpen, setReadmeDialogOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState(null);

  const errorNotificationSubscription = ErrorNotificationService.notify.subscribe(
    (notifications) => {
      setErrorNotifications(notifications);
    }
  );

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
      .catch((err) => {
        setFetchingProjects(false);
        ErrorNotificationService.log(err);
      });

    return () => {
      abortController.abort();
      errorNotificationSubscription.unsubscribe();
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
        .catch((err) => {
          setOverlayFetchReadmeActive(false);
          setActiveWorkingProject(null);
          ErrorNotificationService.log(err);
        });

      return () => {
        abortController.abort();
      };
    }
  }, [activeWorkingProject]);

  function getErrorNotifications(errorNotifications: ErrorNotification[]) {
    return errorNotifications.map((notification, index) => {
      return (
        <Alert
          key={index}
          className="notification"
          severity="error"
          variant="standard"
          onClose={() => ErrorNotificationService.remove(notification)}
        >
          {notification.message}
        </Alert>
      );
    });
  }

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
      <div className="notification-stack">{getErrorNotifications(errorNotifications)}</div>
      <div className="project-list-wrapper">
        <PageBanner
          title="Here's what I've been working on."
          subtitle="...among other things"
          backgroundImage={ProjectsBanner}
        />
        <div className="projects">
          <div className="pinned-projects">{createProjectListElements(pinnedProjects, true)}</div>
          <div className="unpinned-projects">
            {createProjectListElements(unpinnedProjects, false)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;

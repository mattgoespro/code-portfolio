import GithubProject from './project/Project';
import axios from 'axios';
import './ProjectList.scss';
import React, { useState } from 'react';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';
import Spinner from '@shared/components/spinner/Spinner';
import ErrorNotificationService from '../../services/error-notification/ErrorNotification.service';
import ProjectsBanner from '@images/page-banner-projects.jpg';
import PageBanner from '@shared/components/page-banner/PageBanner';
import { useEffect } from 'react';

function ProjectList() {
  const [pinnedProjects, setPinnedProjects] = useState([]);
  const [unpinnedProjects, setUnpinnedProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      axios.get<ApiRepositoryResponseDTO[]>('/api/repos'),
      axios.get<ApiRepositoryResponseDTO[]>('/api/repos/pinned')
    ])
      .then((resp) => {
        setUnpinnedProjects(resp[0].data);
        setPinnedProjects(resp[1].data);
        setLoading(false);
      })
      .catch((err) => {
        ErrorNotificationService.log(err);
      });
  }, []);

  function projectsExist() {
    return (pinnedProjects?.length || 0) + (unpinnedProjects?.length || 0) > 0;
  }

  function getProjectListComponent(
    projects: ApiRepositoryResponseDTO[],
    cssClass: string,
    pinned?: boolean
  ) {
    return (
      <div className={cssClass}>
        {projects.map((project, index) => {
          const indexStyle = {};
          indexStyle[`--${pinned ? 'pinned' : 'unpinned'}ProjectIndex`] = index;
          return (
            <div
              key={project.name}
              className={'project' + (pinned ? ' pinned' : '')}
              style={indexStyle as React.CSSProperties}
            >
              <GithubProject key={project.name} repo={project} pinned={pinned} />
            </div>
          );
        })}
      </div>
    );
  }

  function getProjectList() {
    return (
      <div className="projects">
        <div className="pinned-projects-wrapper">
          {getProjectListComponent(pinnedProjects, 'pinned-projects', true)}
        </div>
        {getProjectListComponent(unpinnedProjects, 'unpinned-projects')}
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        title="These are what I've been working on."
        subtitle="Allow me to introduce myself."
        backgroundImage={ProjectsBanner}
      />
      <div className="project-list-wrapper">
        {loading && (
          <div className="project-list-spinner-loader">
            <Spinner />
          </div>
        )}
        {projectsExist() && getProjectList()}
      </div>
    </div>
  );
}

export default ProjectList;

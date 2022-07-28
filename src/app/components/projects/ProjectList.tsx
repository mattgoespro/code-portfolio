import GithubProject from './project/Project';
import axios from 'axios';
import './ProjectList.scss';
import React from 'react';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';
import { Spinner } from '@shared/components/spinner/Spinner';
import ErrorNotificationService from '../../services/error-notification/ErrorNotification.service';

interface ProjectListComponentState {
  pinnedProjects?: ApiRepositoryResponseDTO[];
  unpinnedProjects?: ApiRepositoryResponseDTO[];
  loading?: boolean;
}

export default class ProjectListComponent extends React.Component<
  unknown,
  ProjectListComponentState
> {
  private getProjectListTemplate(
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

  private getProjectList() {
    return (
      <div className="projects">
        <div className="pinned-projects-wrapper">
          {this.getProjectListTemplate(this.state?.pinnedProjects, 'pinned-projects', true)}
        </div>
        {this.getProjectListTemplate(this.state?.unpinnedProjects, 'unpinned-projects')}
      </div>
    );
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const unpinnedProjects = (await axios.get<ApiRepositoryResponseDTO[]>('/api/repos')).data;
      const pinnedProjects = (await axios.get<ApiRepositoryResponseDTO[]>('/api/repos/pinned'))
        .data;
      this.setState({
        pinnedProjects,
        unpinnedProjects,
        loading: false
      });
    } catch (err) {
      this.setState({
        loading: false
      });
      ErrorNotificationService.log(err);
    }
  }

  private hasProjects() {
    if (this.state?.pinnedProjects == null || this.state?.unpinnedProjects == null) {
      return false;
    }
    return this.state?.pinnedProjects.length + this.state?.unpinnedProjects.length > 0;
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className="page-header-wrapper">
          <h1 className="page-header">
            These are the <span>Projects</span> I have worked on
          </h1>
        </div>
        <div className="project-list-wrapper">
          {this.state?.loading && <Spinner loading={true} />}
          {this.hasProjects() && this.getProjectList()}
        </div>
      </div>
    );
  }
}

import { useEffect, useState } from 'react';
import { getSpinner } from '../shared/spinner/Spinner';
import GithubProject from './project/Project';
import axios from 'axios';
import './ProjectList.scss';
import { ApiRepositoryResponseDTO, GithubApiRestErrorResponse } from './Project';
import AlertNotificationService from '../../services/alert-notification/AlertNotification.service';

export default function ProjectList() {
  const [githubRepos, setGithubRepos] = useState<ApiRepositoryResponseDTO[]>([]);
  const [githubPinnedRepos, setGithubPinnedRepos] = useState<ApiRepositoryResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [projectsError, setProjectsError] = useState(false);
  const [pinnedProjectsError, setPinnedProjectsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<ApiRepositoryResponseDTO[]>('/api/repos')
      .then((resp) => {
        setGithubRepos(resp.data);
        setLoading(false);
        setProjectsError(false);
      })
      .catch((err: GithubApiRestErrorResponse) => {
        setLoading(false);
        setProjectsError(true);
        AlertNotificationService.log({
          status: err.response.status,
          statusText: err.response.statusText
        });
      });
    axios
      .get<ApiRepositoryResponseDTO[]>('/api/repos/pinned')
      .then((resp) => {
        setGithubPinnedRepos(resp.data);
        setLoading(false);
        setPinnedProjectsError(false);
      })
      .catch((err: GithubApiRestErrorResponse) => {
        setLoading(false);
        setPinnedProjectsError(true);
        AlertNotificationService.log({
          status: err.response.status,
          statusText: err.response.statusText
        });
      });
  }, []);

  function projects(githubRepos: ApiRepositoryResponseDTO[]) {
    return (
      <div className="projects">
        <div className="pinned-projects-wrapper">
          <div className="pinned-projects">
            {githubPinnedRepos.map((repo, index) => {
              return (
                <div
                  key={repo.name}
                  className="project pinned"
                  style={
                    {
                      '--unpinnedProjectIndex': index
                    } as React.CSSProperties
                  }
                >
                  <GithubProject key={repo.name} repo={repo} pinned={true} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="unpinned-projects">
          {githubRepos
            .filter((repo) => !githubPinnedRepos.includes(repo))
            .map((repo, index) => {
              return (
                <div
                  key={repo.name}
                  className="project"
                  style={
                    {
                      '--projectIndex': index
                    } as React.CSSProperties
                  }
                >
                  <GithubProject key={repo.name} repo={repo} pinned={false} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header-wrapper">
        <h1 className="page-header">
          These are the <span>Projects</span> I have worked on
        </h1>
        <h2 className="page-header-subtext">among other unicorn-level ones...</h2>
        {pinnedProjectsError && (
          <div className="no-pinned-projects-to-show">
            Well, this is embarrassing. There are no pinned projects to display.
          </div>
        )}
      </div>
      <div className="project-list-wrapper">
        {loading && getSpinner(true)}
        {projectsError && <div className="no-projects-to-show">No projects to show.</div>}
        {githubRepos.length > 0 && projects(githubRepos)}
      </div>
    </div>
  );
}

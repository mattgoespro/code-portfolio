import { useEffect, useState } from 'react';
import { getSpinner } from '../shared/spinner/Spinner';
import GithubProject from './project/Project';
import axios from 'axios';
import './ProjectList.scss';
import { ApiRepositoryResponseDTO } from './Project';

export default function ProjectList() {
  const [githubRepos, setGithubRepos] = useState<ApiRepositoryResponseDTO[]>([]);
  const [githubPinnedRepos, setGithubPinnedRepos] = useState<ApiRepositoryResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<ApiRepositoryResponseDTO[]>('/api/repos')
      .then((resp) => {
        setGithubRepos(resp.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
    axios
      .get<ApiRepositoryResponseDTO[]>('/api/repos/pinned')
      .then((resp) => {
        setGithubPinnedRepos(resp.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
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

  function spinner() {
    return loading ? getSpinner(true) : null;
  }

  return (
    <div>
      <div className="page-header-wrapper">
        <h1 className="page-header">
          These are the <span>Projects</span> I have worked on
        </h1>
        <h2 className="page-header-subtext">among other unicorn-level ones...</h2>
      </div>
      <div className="project-list-wrapper">
        {spinner()}
        {githubRepos && githubRepos.length > 0 && projects(githubRepos)}
        {error && (
          <div className="no-projects-to-display">
            Well, this is embarrassing. There are no projects to display.
          </div>
        )}
      </div>
    </div>
  );
}

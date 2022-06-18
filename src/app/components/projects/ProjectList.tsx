import { useEffect, useState } from 'react';
import { getSpinner } from '../shared/spinner/Spinner';
import GithubProject from './project/Project';
import axios from 'axios';
import './ProjectList.scss';

export interface GithubRepository {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  pinned: boolean;
}

export default function ProjectList() {
  const [githubRepos, setGithubRepos] = useState<GithubRepository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<GithubRepository[]>('/api/repos')
      .then((resp) => {
        setGithubRepos(resp.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  function projects(githubRepos: GithubRepository[]) {
    const pinnedRepos = githubRepos.filter((repo) => repo.pinned);
    const unpinnedRepos = githubRepos.filter((repo) => !repo.pinned);

    return (
      <div className="projects">
        <div className="pinned-projects">
          {pinnedRepos.map((repo) => {
            return (
              <div key={repo.name} className="project">
                <GithubProject key={repo.name} repo={repo} />
              </div>
            );
          })}
        </div>
        <div className="unpinned-projects">
          {unpinnedRepos.map((repo, index) => {
            return (
              <div
                key={repo.name}
                className="project"
                style={
                  {
                    '--index': index
                  } as React.CSSProperties
                }
              >
                <GithubProject key={repo.name} repo={repo} />
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
    <div className="project-list-wrapper">
      {spinner()}
      {githubRepos && githubRepos.length > 0 && projects(githubRepos)}
      {error && (
        <div className="no-projects-to-display">
          Well, this is embarrassing. There are no projects to display.
        </div>
      )}
    </div>
  );
}

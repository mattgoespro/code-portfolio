import { useEffect, useState } from 'react';
import * as React from 'react';
import { getSpinner } from '../shared/spinner/Spinner';
import GithubProject from './project/Project';
import './ProjectList.scss';
import axios from 'axios';
import Error from '../shared/error/Error';

export interface GithubRepository {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export interface GithubRepositories {
  repositories: GithubRepository[];
  pinnedRepositories: GithubRepository[];
}

export default function ProjectList() {
  const [githubRepos, setGithubRepos] = useState<GithubRepositories>({
    repositories: [],
    pinnedRepositories: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<GithubRepositories>('/api/repos')
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

  function projects(githubRepos: GithubRepositories) {
    return (
      (githubRepos && (
        <div className="projects">
          <div className="pinned-projects">
            {githubRepos.pinnedRepositories.map((repo) => {
              return (
                <div key={repo.name} className="project">
                  <GithubProject key={repo.name} repo={repo} />
                </div>
              );
            })}
          </div>
          <div className="unpinned-projects">
            {githubRepos.repositories.map((repo, index) => {
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
      )) || <div>Well this is embarrassing. There are no projects to display.</div>
    );
  }

  return (
    <div className="project-list">
      {loading && getSpinner(true)}
      {!loading && projects(githubRepos)}
      {error && <Error />}
    </div>
  );
}

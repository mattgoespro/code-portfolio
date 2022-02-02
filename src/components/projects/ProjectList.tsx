import { useEffect, useState } from 'react';
import * as React from 'react';
import { getSpinner } from '../shared/spinner/Spinner';
import GithubProject from './project/Project';
import './ProjectList.scss';
import axios from 'axios';
import Error from '../shared/error/Error';

export interface GithubRepository {
  name: string;
  full_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export interface GithubRepositories {
  repositories: GithubRepository[];
  pinnedRepositories?: GithubRepository[];
}

export default function ProjectList() {
  const [githubRepos, setGithubRepos] = useState<GithubRepositories>();
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

  return (
    <div className="project-list">
      {error && <Error />}
      {loading && getSpinner(true)}
      {!loading &&
        githubRepos?.repositories.map((repo, index) => {
          return (
            <div
              key={repo.full_name}
              className="project"
              style={
                {
                  '--index': index
                } as React.CSSProperties
              }
            >
              <GithubProject key={repo.full_name} repo={repo} />
            </div>
          );
        })}
    </div>
  );
}

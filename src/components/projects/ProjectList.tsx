import { useEffect, useState } from 'react';
import * as React from 'react';
import { getSpinner } from '../shared/spinner/Spinner';
import GithubProject from './project/Project';
import './ProjectList.scss';

export interface GithubProject {
  name: string;
  full_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export default function ProjectList() {
  const [githubRepos, setGithubRepos] = useState<GithubProject[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // [] as second arg only calls the function once.
  useEffect(() => {
    // TODO: Make this cleaner
    setLoading(true);
    fetch('https://api.github.com/users/mattgoespro/repos')
      .then((rsp) => rsp.json())
      .then((rsp: GithubProject[]) => {
        setGithubRepos(rsp);
        setLoading(false);
      })
      .catch(() => setError(true));
    // .finally(() => setLoading(false));

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return (
    <div className="project-list">
      {error && <div>Uh oh, an error occurred. Please try again.</div>}
      {loading && getSpinner(true)}
      {!loading &&
        githubRepos.map((repo, index) => {
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

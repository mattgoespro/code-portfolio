import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectList/ProjectCard/ProjectCard';
import { ProjectListRequestFailure } from './ProjectList/ProjectListRequestFailure/ProjectListRequestFailure';
import styles from './ProjectPage.scss';

export function ProjectPage() {
  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    axios
      .get<RepositorySummary[]>('/api/repos', { signal: abortController.signal })
      .then((resp) => {
        setProjects(resp.data);
        setFetchingProjects(false);
        setError(false);
      })
      .catch(() => {
        setFetchingProjects(false);
        setError(true);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  const unpinnedProjects = projects
    .filter((p) => !p.pinned)
    .map((project) => {
      return (
        <ProjectCard
          key={project.name}
          name={project.name}
          pinned={false}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      );
    });

  const pinnedProjects = projects
    .filter((p) => p.pinned)
    .map((project) => {
      return (
        <ProjectCard
          key={project.name}
          name={project.name}
          pinned={true}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      );
    });

  return (
    <div className={styles['project-page']}>
      <div className={styles.banner}>
        <div className={styles['banner-content']}>
          <div className={styles['banner-text']}>
            <h1>My Projects</h1>
            <h2>All projects are available on GitHub</h2>
          </div>
        </div>
      </div>
      {error && <ProjectListRequestFailure />}
      {!error && !fetchingProjects && pinnedProjects}
    </div>
  );
}

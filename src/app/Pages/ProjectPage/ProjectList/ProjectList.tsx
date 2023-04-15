import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { RepositorySummary } from '@mattgoespro/hoppingmode-web';
import styles from './ProjectList.module.scss';
import { useOutletContext } from 'react-router-dom';
import { scrollAnimateIn } from '@shared/utility/AnimateOnScroll';

export function ProjectList() {
  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);
  const cont = useOutletContext<(err: boolean) => void>();

  const LIST_ITEM_ANIMATE_DELAY = 100;
  const LIST_ITEM_ANIMATE_DURATION = 400;
  const LIST_ITEM_ANIMATE_LAG = 800;
  const LIST_ITEM_ANIMATE_SPEED = 100;

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    axios
      .get<RepositorySummary[]>('/api/repos', { signal: abortController.signal })
      .then((resp) => {
        setProjects(resp.data);
        setFetchingProjects(false);
        setError(false);
        cont(false);
      })
      .catch(() => {
        setFetchingProjects(false);
        setError(true);
        cont(true);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div id="scroll-trigger">
      {!error && !fetchingProjects && (
        <>
          <div
            id="pinned-scroll-trigger"
            className={styles['pinned-project-list']}
            {...scrollAnimateIn({
              anchor: 'pinned-scroll-trigger',
              animation: 'fade',
              animationDuration: 400,
              animationDelay: 400,
              scrollOffset: 600,
              once: true
            })}
          >
            <h1
              className={`${styles['project-list-title']} ${styles['pinned-project-list-title']}`}
            >
              Pinned GitHub Repositories
            </h1>
            <div className={styles['project-list']}>
              {projects
                .filter((p) => p.pinned)
                .map((project, index) => {
                  return (
                    <div
                      key={project.name}
                      {...scrollAnimateIn({
                        anchor: 'pinned-scroll-trigger',
                        animation: 'fade-left',
                        animationDuration: LIST_ITEM_ANIMATE_DURATION,
                        animationDelay:
                          LIST_ITEM_ANIMATE_DELAY +
                          LIST_ITEM_ANIMATE_LAG +
                          LIST_ITEM_ANIMATE_SPEED * index,
                        scrollOffset: 400,
                        once: true
                      })}
                    >
                      <ProjectCard
                        name={project.name}
                        pinned={true}
                        description={project.description}
                        githubUrl={project.githubUrl}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            id="unpinned-scroll-trigger"
            className={styles['unpinned-project-list']}
            {...scrollAnimateIn({
              anchor: 'unpinned-scroll-trigger',
              animation: 'fade',
              animationDuration: 400,
              animationDelay: 400,
              scrollOffset: 400,
              once: true
            })}
          >
            <h1 className={styles['project-list-title']}>GitHub Repositories</h1>
            <div className={styles['project-list']}>
              {projects
                .filter((p) => !p.pinned)
                .map((project, index) => {
                  return (
                    <div
                      key={project.name}
                      {...scrollAnimateIn({
                        anchor: 'unpinned-scroll-trigger',
                        animation: 'fade-left',
                        animationDuration: LIST_ITEM_ANIMATE_DURATION,
                        animationDelay:
                          LIST_ITEM_ANIMATE_DELAY +
                          LIST_ITEM_ANIMATE_LAG +
                          LIST_ITEM_ANIMATE_SPEED * index,
                        scrollOffset: 200,
                        once: true
                      })}
                    >
                      <ProjectCard
                        name={project.name}
                        pinned={false}
                        description={project.description}
                        githubUrl={project.githubUrl}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

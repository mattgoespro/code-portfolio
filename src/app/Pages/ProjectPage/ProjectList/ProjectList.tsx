import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { RepositorySummary } from "@mattgoespro/hoppingmode-web";
import styles from "./ProjectList.module.scss";
import { useOutletContext } from "react-router-dom";
import {
  createAnimateOnScrollAttribs,
  generateListFadeLeftParams
} from "@Shared/Utility/Animation";

export function ProjectList() {
  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [projects, setProjects] = useState<RepositorySummary[]>([]);
  const [error, setError] = useState(false);
  const cont = useOutletContext<(err: boolean) => void>();

  const PROJECT_ANIMATE_DELAY = 100;
  const PROJECT_ANIMATE_DURATION = 400;
  const PROJECT_ANIMATE_LAG = 800;
  const PROJECT_ANIMATE_SPEED_FACTOR = 100;

  useEffect(() => {
    const abortController = new AbortController();
    setFetchingProjects(true);

    axios
      .get<RepositorySummary[]>("/api/repos", { signal: abortController.signal })
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
    <>
      {!error && !fetchingProjects && (
        <div id="scroll-trigger">
          {!error && !fetchingProjects && (
            <>
              <div
                id="pinned-scroll-trigger"
                className={styles["pinned-project-list"]}
                {...createAnimateOnScrollAttribs({
                  anchor: "pinned-scroll-trigger",
                  animation: "fade",
                  animationDuration: 400,
                  animationDelay: 400,
                  scrollOffset: 200,
                  once: true
                })}
              >
                <h1
                  className={`${styles["project-list-title"]} ${styles["pinned-project-list-title"]}`}
                >
                  Pinned GitHub Repositories
                </h1>
                <div className={styles["project-list"]}>
                  {projects
                    .filter((p) => p.pinned)
                    .map((project, index) => {
                      return (
                        <div
                          key={project.name}
                          {...createAnimateOnScrollAttribs({
                            anchor: "pinned-scroll-trigger",
                            animation: "fade-left",
                            ...generateListFadeLeftParams(
                              PROJECT_ANIMATE_DURATION,
                              PROJECT_ANIMATE_DELAY,
                              PROJECT_ANIMATE_LAG,
                              PROJECT_ANIMATE_SPEED_FACTOR,
                              index
                            ),
                            scrollOffset: 200,
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
                className={styles["unpinned-project-list"]}
                {...createAnimateOnScrollAttribs({
                  anchor: "unpinned-scroll-trigger",
                  animation: "fade",
                  animationDuration: 400,
                  animationDelay: 400,
                  scrollOffset: 200,
                  once: true
                })}
              >
                <h1 className={styles["project-list-title"]}>GitHub Repositories</h1>
                <div className={styles["project-list"]}>
                  {projects
                    .filter((p) => !p.pinned)
                    .map((project, index) => {
                      return (
                        <div
                          key={project.name}
                          {...createAnimateOnScrollAttribs({
                            anchor: "unpinned-scroll-trigger",
                            animation: "fade-left",
                            animationDuration: PROJECT_ANIMATE_DURATION,
                            animationDelay:
                              PROJECT_ANIMATE_DELAY +
                              PROJECT_ANIMATE_LAG +
                              PROJECT_ANIMATE_SPEED_FACTOR * index,
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
      )}
    </>
  );
}

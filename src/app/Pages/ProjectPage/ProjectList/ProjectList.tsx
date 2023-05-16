import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { RepositorySummary } from "@mattgoespro/hoppingmode-web";
import styles from "./ProjectList.module.scss";
import {
  createAnimateOnScrollAttribs,
  generateListFadeLeftParams
} from "@Shared/Utility/Animation";
import { ProjectRequestFailure } from "../ProjectRequestFailure/ProjectRequestFailure";

export function ProjectList() {
  const [fetchingProjects, setFetchingProjects] = useState(true);
  const [fetchApiError, setFetchApiError] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [unpinnedProjects, setUnpinnedProjects] = useState<RepositorySummary[]>([]);
  const [pinnedProjects, setPinnedProjects] = useState<RepositorySummary[]>([]);
  const scrollTriggerRef = useRef(this);

  const PROJECT_ANIMATE_DELAY = 100;
  const PROJECT_ANIMATE_DURATION = 400;
  const PROJECT_ANIMATE_LAG = 800;
  const PROJECT_ANIMATE_SPEED_FACTOR = 100;

  useEffect(() => {
    if (showProjectList) {
      const abortController = new AbortController();
      setFetchingProjects(true);

      axios
        .get<RepositorySummary[]>("/api/repos", { signal: abortController.signal })
        .then((resp) => {
          const projects = resp.data;
          setPinnedProjects(projects.filter((p) => p.pinned));
          setUnpinnedProjects(projects.filter((p) => !p.pinned));
          setFetchingProjects(false);
          setFetchApiError(false);
        })
        .catch(() => {
          setFetchingProjects(false);
          setFetchApiError(true);
          setPinnedProjects([]);
          setUnpinnedProjects([]);
        });

      return () => {
        abortController.abort();
      };
    }
  }, [showProjectList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!showProjectList && entry.isIntersecting) {
            setShowProjectList(true);
          }
        });
      },
      {
        rootMargin: "-300px"
      }
    );

    observer.observe(scrollTriggerRef.current);
  });

  function getProjectList(list: { pinned: boolean }) {
    const projects = list.pinned ? pinnedProjects : unpinnedProjects;
    const showListPlaceholder = !fetchApiError && fetchingProjects && projects.length === 0;
    const projectList = projects.map((project, index) => {
      return (
        <ProjectCard
          key={project.name}
          className={styles["project-card"]}
          name={project.name}
          pinned={project.pinned}
          description={project.description}
          githubUrl={project.githubUrl}
          {...createAnimateOnScrollAttribs({
            anchor: `${list.pinned ? "pinned" : "unpinned"}-scroll-trigger`,
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
        />
      );
    });

    return showListPlaceholder ? (
      <div
        key={`${list.pinned ? "pinned" : "unpinned"}-placeholder`}
        className={`${styles["project-card"]} ${styles["project-card-placeholder"]}`}
      ></div>
    ) : (
      projectList
    );
  }

  return (
    <>
      <div ref={scrollTriggerRef} className={styles.wrapper} id="scroll-trigger">
        {showProjectList && fetchApiError && (
          <div className={styles["project-load-error"]}>
            <ProjectRequestFailure errorMessage="Failed to load projects" />
          </div>
        )}
        <div id="pinned-scroll-trigger" className={styles["pinned-project-list"]}></div>
        {!fetchApiError && (
          <h1 className={`${styles["project-list-title"]} ${styles.pinned}`}>
            Pinned GitHub Repositories
          </h1>
        )}
        <div className={styles["project-list"]}>
          {getProjectList({
            pinned: true
          })}
        </div>
        <div id="unpinned-scroll-trigger" className={styles["unpinned-project-list"]}></div>
        {!fetchApiError && <h1 className={styles["project-list-title"]}>GitHub Repositories</h1>}
        <div className={styles["project-list"]}>
          {getProjectList({
            pinned: false
          })}
        </div>
      </div>
    </>
  );
}

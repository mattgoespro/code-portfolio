import { ProjectListDTO } from "@mattgoespro/hw";
import { useState, useEffect, useRef } from "react";
import { useApiCall } from "@Hooks/UseApi";
import { createAnimateOnScrollAttribs, generateListFadeLeftParams } from "@Utility/Animation";
import { ProjectRequestFailure } from "../ProjectRequestFailure/ProjectRequestFailure";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

export function ProjectList() {
  // const [fetchingProjects, setFetchingProjects] = useState(true);
  // const [fetchApiError, setFetchApiError] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [unpinnedProjects, setUnpinnedProjects] = useState<ProjectListDTO[]>([]);
  const [pinnedProjects, setPinnedProjects] = useState<ProjectListDTO[]>([]);

  const [_, fetchingProjects, setFetchingProjects, projectLoadError] = useApiCall<ProjectListDTO[]>(
    "/api/projects",
    (data) => {
      if (data == null) return;

      setPinnedProjects(data.filter((p) => p.pinned));
      setUnpinnedProjects(data.filter((p) => !p.pinned));
    }
  );
  const scrollTriggerRef = useRef(this);

  const PROJECT_ANIMATE_DELAY = 100;
  const PROJECT_ANIMATE_DURATION = 400;
  const PROJECT_ANIMATE_LAG = 800;
  const PROJECT_ANIMATE_SPEED_FACTOR = 100;

  useEffect(() => {
    if (showProjectList) {
      setFetchingProjects(true);
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
    const showListPlaceholder = !projectLoadError && fetchingProjects && projects.length === 0;
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
        {showProjectList && projectLoadError && (
          <div className={styles["project-load-error"]}>
            <ProjectRequestFailure errorMessage="Failed to load projects" />
          </div>
        )}
        <div id="pinned-scroll-trigger" className={styles["pinned-project-list"]}></div>
        {!projectLoadError && (
          <h1 className={`${styles["project-list-title"]} ${styles.pinned}`}>
            Pinned GitHub Repositories
          </h1>
        )}
        <div className={styles["project-list"]}>
          {showProjectList &&
            getProjectList({
              pinned: true
            })}
        </div>
        <div id="unpinned-scroll-trigger" className={styles["unpinned-project-list"]}></div>
        {!projectLoadError && <h1 className={styles["project-list-title"]}>GitHub Repositories</h1>}
        <div className={styles["project-list"]}>
          {getProjectList({
            pinned: false
          })}
        </div>
      </div>
    </>
  );
}

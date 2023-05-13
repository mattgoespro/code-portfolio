import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectLanguageChart } from "./ProjectLanguageChart/ProjectLanguageChart";
import { ProjectReadme } from "./ProjectReadme/ProjectReadme";
import { Repository, ProgrammingLanguages } from "@mattgoespro/hoppingmode-web";
import base64 from "base-64";
import styles from "./ProjectDetails.module.scss";
import { ProjectRepositoryStats } from "./ProjectRepositoryStats/ProjectRepositoryStats";
import { ProjectRequestFailure } from "../ProjectRequestFailure/ProjectRequestFailure";

export function ProjectDetails() {
  const { projectName } = useParams();

  const [project, setProject] = useState<Repository>(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [projectLanguages, setProjectLanguages] = useState<ProgrammingLanguages>(null);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    setLoadingProject(true);

    Promise.all([
      axios.get<Repository>(`/api/repos/${projectName}`, {
        signal: abortController.signal
      }),
      axios.get<ProgrammingLanguages>(`/api/repos/${projectName}/languages`, {
        signal: abortController.signal
      })
    ])
      .then((resp) => {
        setError(null);
        setProject(resp[0].data);
        setProjectLanguages(resp[1].data);
        setLoadingProject(false);
      })
      .catch((err) => {
        setError(err);
        setProject(null);
        setProjectLanguages(null);
        setLoadingProject(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className={styles["project-details-page"]}>
      {error && <ProjectRequestFailure errorMessage="Failed to load project details" />}
      {!error && !loadingProject && (
        <div className={styles["project-details"]}>
          {(project.readme && (
            <div className={styles["project-readme"]}>
              <ProjectReadme readmeContent={base64.decode(project.readme.content)} />
            </div>
          )) || <div className={styles["readme-unavailable"]}></div>}
          <div className={styles.divider}></div>
          <div className={styles.repository}>
            <div className={styles.stats}>
              <ProjectRepositoryStats project={project} />
            </div>
            <div className={styles.languages}>
              <ProjectLanguageChart languages={projectLanguages} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

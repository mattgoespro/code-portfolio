import { useParams } from "react-router-dom";
import { ProjectLanguageChart } from "./ProjectLanguageChart/ProjectLanguageChart";
import { ProjectReadme } from "./ProjectReadme/ProjectReadme";
import base64 from "base-64";
import styles from "./ProjectDetails.module.scss";
import { ProjectRepositoryStats } from "./ProjectRepositoryStats/ProjectRepositoryStats";
import { ProjectRequestFailure } from "../ProjectRequestFailure/ProjectRequestFailure";
import { ProjectCodingLanguagesDTO, ProjectViewDTO } from "@mattgoespro/hoppingmode-web-core";
import { useApiCall } from "@Hooks/UseApi";

export function ProjectDetails() {
  const { projectName } = useParams();
  const [project, fetchingProject, setFetchingProject, projectLoadError] =
    useApiCall<ProjectViewDTO>(`/api/projects/${projectName}`, null, true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectCodeLanguages, fetchingProjectCodeLanguages, setFetchingProjectCodeLanguages] =
    useApiCall<ProjectCodingLanguagesDTO>(`/api/projects/${projectName}/code-languages`);

  return (
    <div className={styles["project-details-page"]}>
      {projectLoadError && <ProjectRequestFailure errorMessage="Failed to load project details" />}
      {!projectLoadError && !fetchingProject && project != null && (
        <div className={styles["project-details"]}>
          {(project.readme != null && (
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
              <ProjectLanguageChart codingLanguages={projectCodeLanguages} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

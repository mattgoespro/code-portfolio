import { ProjectCodingLanguagesDTO, ProjectViewDTO } from "@mattgoespro/hw";
import { decode } from "base-64";
import { useParams } from "react-router-dom";
import { useApiCall } from "@Hooks/UseApi";
import { ProjectRequestFailure } from "../ProjectRequestFailure/ProjectRequestFailure";
import styles from "./ProjectDetails.module.scss";
import { ProjectLanguageChart } from "./ProjectLanguageChart/ProjectLanguageChart";
import { ProjectReadme } from "./ProjectReadme/ProjectReadme";
import { ProjectRepositoryStats } from "./ProjectRepositoryStats/ProjectRepositoryStats";

export function ProjectDetails() {
  const { projectName } = useParams();
  const [project, fetchingProject, _setFetchingProject, projectLoadError] =
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
              <ProjectReadme readmeContent={decode(project.readme.content)} />
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

import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ProjectRequestFailure } from "./ProjectRequestFailure/ProjectRequestFailure";
import { Link as ExternalLink } from "@mui/material";

import styles from "./ProjectPage.scss";

export function ProjectPage() {
  const params = useParams();
  const [error, setError] = useState(false);

  const onError = (err) => {
    setError(err);
  };

  return (
    <div className={styles["project-page"]}>
      {error && (
        <>
          <div className={styles["project-load-error-overlay"]}></div>
          <div className={styles["project-load-error"]}>
            <ProjectRequestFailure errorMessage="The projects failed to load" />
          </div>
        </>
      )}
      <div className={styles["page-header-wave-top"]}></div>

      <div className={styles["page-header"]}>
        <h1 className={styles["header-title"]}>{params.projectName || "Projects"}</h1>
        {!params.projectName && (
          <h2 className={styles["header-subtitle"]}>
            Available on{" "}
            <span>
              <a
                href="https://github.com/mattgoespro"
                target="tab"
                className={styles["github-profile"]}
              >
                GitHub
              </a>
            </span>
          </h2>
        )}
      </div>
      <div className={styles["page-header-wave-bottom"]}></div>
      <Outlet context={onError} />
    </div>
  );
}

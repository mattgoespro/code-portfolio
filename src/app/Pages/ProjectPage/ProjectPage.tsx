import { Outlet, useParams } from "react-router-dom";

import styles from "./ProjectPage.scss";

export function ProjectPage() {
  const params = useParams();

  return (
    <div className={styles["project-page"]}>
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
      <Outlet />
    </div>
  );
}

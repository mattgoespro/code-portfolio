import styles from "./ProjectRequestFailure.module.scss";

interface ProjectRequestFailureProps {
  errorMessage: string;
}

export function ProjectRequestFailure(props: ProjectRequestFailureProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles["failure-img"]}>
        <img src={require("@Images/Network/RequestFailure.png")} alt="project-request-failure" />
      </div>
      <div className={styles.error}>
        <h1 className={styles["oops"]}>Oops!</h1>
        <h1 className={styles["msg"]}>{props.errorMessage}</h1>
        <h2 className={styles["try-later"]}>Please try again later</h2>
      </div>
    </div>
  );
}

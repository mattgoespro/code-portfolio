import styles from "./ProjectRequestFailure.module.scss";

interface ProjectRequestFailureProps {
  errorMessage: JSX.Element;
}

export function ProjectRequestFailure(props: ProjectRequestFailureProps) {
  return (
    <div className={styles.wrapper}>
      <img src="/assets/images/misc/network-request-failure.png" alt="project-request-failure" />
      <div className={styles.error}>
        <h1 className={styles["err-msg"]}>{props.errorMessage}</h1>
        <h2 className={styles["err-msg-try-later"]}>Please try again later</h2>
      </div>
    </div>
  );
}

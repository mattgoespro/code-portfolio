import { Repository } from "@mattgoespro/hoppingmode-web";
import styles from "./ProjectRepositoryStats.module.scss";

interface ProjectRepositoryStatsProps {
  project: Repository;
}

export function ProjectRepositoryStats(props: ProjectRepositoryStatsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles["activity-title"]}>Stats</div>
      <div className={styles.activity}>
        <span>Date created:</span>{" "}
        <i>{new Date(props.project.stats.createdTimestamp).toUTCString()}</i>
      </div>
      <div className={styles.activity}>
        <span>Last updated:</span>{" "}
        <i>{new Date(props.project.stats.updatedTimestamp).toUTCString()}</i>
      </div>
      <div className={styles.activity}>
        <span>Total commits:</span> <i>{props.project.stats.totalCommits}</i>
      </div>
    </div>
  );
}

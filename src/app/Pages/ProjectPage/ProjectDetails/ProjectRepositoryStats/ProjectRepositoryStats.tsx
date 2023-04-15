import { Repository } from "@mattgoespro/hoppingmode-web";
import styles from "./ProjectRepositoryStats.module.scss";

interface ProjectRepositoryStatsProps {
  project: Repository;
}

export function ProjectRepositoryStats(props: ProjectRepositoryStatsProps) {
  return (
    <div>
      <div className={styles["activity-title"]}>Stats</div>
      <div className={styles.activity}>
        Date created: <i>{new Date(props.project.stats.createdTimestamp).toUTCString()}</i>
      </div>
      <div className={styles.activity}>
        Last updated: <i>{new Date(props.project.stats.updatedTimestamp).toUTCString()}</i>
      </div>
      <div className={styles.activity}>
        Total commits: <i>{props.project.stats.totalCommits}</i>
      </div>
    </div>
  );
}

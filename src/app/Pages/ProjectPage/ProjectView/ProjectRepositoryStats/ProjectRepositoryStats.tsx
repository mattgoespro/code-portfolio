import { Repository } from '@mattgoespro/hoppingmode-web';
import styles from './ProjectRepositoryStats.module.scss';

interface ProjectRepositoryStatsProps {
  project: Repository;
}

export function ProjectRepositoryStats(props: ProjectRepositoryStatsProps) {
  return (
    <div className={styles.wrapper}>
      <div>Stats</div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          Date Created: {new Date(props.project.stats.createdTimestamp).toUTCString()}
        </div>
        <div className={styles.stat}>
          Last Updated: {new Date(props.project.stats.createdTimestamp).toUTCString()}
        </div>
      </div>
    </div>
  );
}

import { Repository } from '@mattgoespro/hoppingmode-web';
import styles from './ProjectRepositoryStats.module.scss';

interface ProjectRepositoryStatsProps {
  project: Repository;
}

export function ProjectRepositoryStats(props: ProjectRepositoryStatsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles['activity-title']}>
        <span>Stats</span>
      </div>
      <div className={styles.content}>
        <div className={styles.activity}>
          Date Created: <i>{new Date(props.project.stats.createdTimestamp).toUTCString()}</i>
        </div>
        <div className={styles.activity}>
          Last Updated: <i>{new Date(props.project.stats.updatedTimestamp).toUTCString()}</i>
        </div>
      </div>
    </div>
  );
}

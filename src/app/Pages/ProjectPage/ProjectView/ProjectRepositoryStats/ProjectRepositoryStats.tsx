import { Repository } from '@mattgoespro/hoppingmode-web';
import './ProjectRepositoryStats.scss';

interface ProjectRepositoryStatsProps {
  project: Repository;
}

export function ProjectRepositoryStats(props: ProjectRepositoryStatsProps) {
  return (
    <div className="project-activity">
      <div>Project Activity</div>
      <div className="project-activity-info">
        <div className="stat">
          Date Created: {new Date(props.project.stats.createdTimestamp).toUTCString()}
        </div>
        <div className="stat">
          Last Updated: {new Date(props.project.stats.createdTimestamp).toUTCString()}
        </div>
      </div>
    </div>
  );
}

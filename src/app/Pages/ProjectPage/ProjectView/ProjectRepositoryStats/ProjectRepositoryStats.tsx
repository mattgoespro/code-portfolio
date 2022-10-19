import { RepositoryDetails } from '@mattgoespro/hoppingmode-web';
import './ProjectRepositoryStats.scss';

interface ProjectRepositoryStatsProps {
  project: RepositoryDetails;
}

export function ProjectRepositoryStats(props: ProjectRepositoryStatsProps) {
  return (
    <div className="project-activity">
      <div>Project Activity</div>
      <div className="project-activity-info">
        <div className="stat">
          Date Created: {new Date(props.project.createdTimestamp).toUTCString()}
        </div>
        <div className="stat">
          Last Updated: {new Date(props.project.updatedTimestamp).toUTCString()}
        </div>
      </div>
    </div>
  );
}

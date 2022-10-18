import './ProjectListItem.scss';
import { Link } from 'react-router-dom';
import { Button, Link as ExternalLink } from '@mui/material';

interface ProjectListItemProps {
  name: string;
  description: string;
  githubUrl: string;
}

export function ProjectListItem(props: ProjectListItemProps) {
  return (
    <div className="project-card">
      <div className="project-card-title">
        <div className="project-name">{props.name}</div>
        <div className="project-nav-links">
          <ExternalLink href={props.githubUrl} target="tab" underline="none">
            <Button className="btn-project-nav-link">GitHub</Button>
          </ExternalLink>

          <Button className="btn-project-nav-link">
            <Link className="lnk-view-details" to={`/projects/${props.name}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="title-description">Description</div>
        <div className="description">{props.description || <i>Not available.</i>}</div>
      </div>
    </div>
  );
}

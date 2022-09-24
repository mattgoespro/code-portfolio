import { ApiRepositoryResponseDTO } from '@shared/services/shared.dto';
import './Project.scss';
import { Link } from 'react-router-dom';
import { Button, Link as ExternalLink } from '@mui/material';

interface ProjectProps {
  project: ApiRepositoryResponseDTO;
}

export default function Project(props: ProjectProps) {
  const { project } = props;

  return (
    <div className="project-card">
      <div className="project-card-title">
        <div className="project-name">{project.name}</div>
        <div className="project-nav-links">
          <ExternalLink href={project.link} target="tab" underline="none">
            <Button className="btn-project-nav-link">GitHub</Button>
          </ExternalLink>

          <Button className="btn-project-nav-link">
            <Link className="lnk-view-details" to={`/projects/${project.name}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="title-description">Description</div>
        <div className="description">{project.description || <i>Not available.</i>}</div>
      </div>
    </div>
  );
}

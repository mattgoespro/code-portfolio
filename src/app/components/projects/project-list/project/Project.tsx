import { ApiRepositoryResponseDTO } from '@shared/services/shared.dto';
import './Project.scss';
import { Link } from 'react-router-dom';
import { Button, Link as ExternalLink } from '@mui/material';

interface ProjectProps {
  repo: ApiRepositoryResponseDTO;
  pinned: boolean;
}

export default function Project(props: ProjectProps) {
  const { repo } = props;

  return (
    <div className="project-card">
      <div className="project-card-title">
        <div className="project-name">{repo.friendlyName || repo.repositoryName}</div>
        <div className="project-nav-links">
          <ExternalLink href={repo.link} target="tab" underline="none">
            <Button className="btn-project-nav-link">GitHub</Button>
          </ExternalLink>

          <Button className="btn-project-nav-link">
            <Link className="lnk-view-details" to={`/projects/${repo.repositoryName}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="title-description">Description</div>
        <div className="description">{repo.description || <i>Not available.</i>}</div>
      </div>
    </div>
  );
}

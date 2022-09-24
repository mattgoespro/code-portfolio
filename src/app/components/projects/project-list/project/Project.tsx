import { GitHub } from '@mui/icons-material';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.dto';
import './Project.scss';
import { Link } from 'react-router-dom';
import { Link as LinkButton } from '@mui/material';
import Button from '@mui/material/Button';

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
        <div className="project-actions">
          <LinkButton
            className="project-view-github"
            href={repo.link}
            target="tab"
            underline="none"
          >
            <Button>See Repo</Button>
          </LinkButton>
          <Link to={`/projects/${repo.repositoryName}`} className="link-github">
            <Button className="btn-view-details" disableRipple>
              More Details
            </Button>
          </Link>
        </div>
      </div>
      <div className="divider title-divider"></div>
      <div className="description-wrapper">
        <div className="title-description">Description</div>
        <div className="description">{repo.description || <i>Not available.</i>}</div>
      </div>
    </div>
  );
}

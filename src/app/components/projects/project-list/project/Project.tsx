import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ApiRepositoryResponseDTO } from 'src/app/shared/shared.model';
import './Project.scss';
import { Link } from 'react-router-dom';

interface ProjectProps {
  repo: ApiRepositoryResponseDTO;
  pinned: boolean;
}

export default function Project(props: ProjectProps) {
  const { repo } = props;

  const projectTitle = (
    <div className="title-wrapper">
      <div className="title-avatar">
        <a href={repo.link} target="tab">
          <GitHub className="avatar-github-icon" />
        </a>
      </div>
      <span className="title-name">{repo.friendlyName || repo.repositoryName}</span>
      <Link to={`/projects/${repo.repositoryName}`}>
        <IconButton>
          <NavigateNextIcon fontSize="large" className="view-project-nav-icon" />
        </IconButton>
      </Link>
    </div>
  );

  return (
    <Card className="project-card">
      <CardHeader
        className="project-header"
        style={{
          backgroundColor: props.pinned ? '#EC407A' : '#243890'
        }}
        title={projectTitle}
      />
      <CardContent>
        <div className="description-wrapper">
          <h3 className="title-description">Description</h3>
          <div className="description">{repo.description || <i>Not available.</i>}</div>
        </div>
      </CardContent>
    </Card>
  );
}

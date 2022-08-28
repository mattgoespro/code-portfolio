import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';
import './Project.scss';

interface ProjectProps {
  repo: ApiRepositoryResponseDTO;
  pinned: boolean;
  onLoadDetails: (project: ApiRepositoryResponseDTO) => void;
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
      <div className="title-icon-buttons">
        <span className="title-open-readme-icon">
          <div title="View Details">
            <IconButton
              size="small"
              onClick={() => {
                props.onLoadDetails(repo);
              }}
              className="title-icon-button"
            >
              <OpenInFullIcon className="card-header-icon" />
            </IconButton>
          </div>
        </span>
      </div>
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

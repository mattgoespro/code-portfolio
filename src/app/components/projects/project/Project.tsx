import { Card, CardContent, CardHeader, IconButton, Tooltip } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LinkIcon from '@mui/icons-material/Link';
import HelpIcon from '@mui/icons-material/Help';
import './Project.scss';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';

interface ProjectProps {
  repo: ApiRepositoryResponseDTO;
  pinned: boolean;
  triggerLoadingOverlay: (project: ApiRepositoryResponseDTO) => void;
}

export default function Project(props: ProjectProps) {
  const { repo, pinned } = props;

  const projectTitle = (
    <div className="title-wrapper">
      <div className="title-name-wrapper">
        <span className="title-name">{repo.name}</span>
        {pinned && (
          <Tooltip title="Pinned on Github.">
            <HelpIcon className="title-help-icon" fontSize="small" />
          </Tooltip>
        )}
      </div>
      <div className="title-icon-buttons">
        <span className="title-open-readme-icon">
          <Tooltip title="View Details">
            <IconButton
              size="small"
              onClick={() => {
                props.triggerLoadingOverlay(props.repo);
              }}
              className="title-icon-button"
            >
              <OpenInFullIcon className="card-header-icon" />
            </IconButton>
          </Tooltip>
        </span>
      </div>
    </div>
  );

  return (
    <Card className="project-card">
      <CardHeader
        className="project-header"
        style={{
          backgroundColor: pinned ? '#EC407A' : '#243890'
        }}
        avatar={<GitHub className="avatar" />}
        title={projectTitle}
        subheader={
          <Tooltip title="Visit">
            <a className="project-repo" href={repo.link} target="tab">
              <LinkIcon fontSize="medium" />
            </a>
          </Tooltip>
        }
      />
      <CardContent>
        <div className="description-wrapper">
          <h3 className="title-description">Description</h3>
          <div className="description">{repo.description || <i>Not available.</i>}</div>
        </div>
      </CardContent>
      {/* <Collapse in={cardExpanded} timeout="auto" unmountOnExit>
        {cardExpanded && (
          <CardContent>
            <div className="divider project-collapse-divider"></div>
            <div className="summary-repo">
              <div className="summary-repo-activity">Project Activity</div>
              <span>Created: {format(new Date(repo.createdTimestamp), 'dd-MM-yyyy p')}</span>
              <span>Last Updated: {format(new Date(repo.updatedTimestamp), 'dd-MM-yyyy p')}</span>
            </div>
            <div className="divider project-collapse-divider"></div>
            {<LanguageChart projectName={props.repo.name} />}
            {<div className="divider project-collapse-divider"></div>}
          </CardContent>
        )}
      </Collapse> */}
    </Card>
  );
}

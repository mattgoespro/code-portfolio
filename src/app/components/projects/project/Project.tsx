import { Card, CardContent, CardHeader, Collapse, IconButton, Tooltip } from '@mui/material';
import { GithubRepository } from '../ProjectList';
import { GitHub } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ReadmeDialog from './project-readme-dialog/ReadmeDialog';
import ProjectLanguageChart from './project-language-chart/ProjectLanguageChart';
import { useState } from 'react';
import { format } from 'date-fns';
import LinkIcon from '@mui/icons-material/Link';
import HelpIcon from '@mui/icons-material/Help';
import './Project.scss';

export default function Project(props: { repo: GithubRepository }) {
  const project = props.repo;
  const [readmeDialogOpen, setReadmeDialogOpen] = useState(false);
  const [expanded, setExpanded] = useState<boolean>();

  const handleExpandClick = () => {
    setExpanded(expanded == null ? true : !expanded);
  };

  function getCardTitle() {
    return (
      <div className="title-wrapper">
        <span className="title-name">
          {project.name}{' '}
          <span style={{ verticalAlign: 'middle' }}>
            {project.pinned && (
              <Tooltip title="Pinned on Github.">
                <HelpIcon fontSize="small" />
              </Tooltip>
            )}
          </span>
        </span>
        <div className="title-icon-buttons">
          <span
            style={{
              float: 'right',
              marginRight: '5px'
            }}
          >
            <Tooltip title={project.pinned ? 'View' : 'View Readme'}>
              <IconButton
                size="small"
                onClick={() => {
                  setReadmeDialogOpen(true);
                }}
                className="title-icon-button"
              >
                <OpenInFullIcon className="card-header-icon" />
              </IconButton>
            </Tooltip>
          </span>
          {!project.pinned && (
            <span
              style={{
                float: 'right'
              }}
            >
              <IconButton className="title-icon-button view-readme" onClick={handleExpandClick}>
                <ExpandMoreIcon className={expanded ? 'expand-icon' : 'collapse-icon'} />
              </IconButton>
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <Card className="project-card">
      {readmeDialogOpen && (
        <ReadmeDialog
          open={readmeDialogOpen}
          project={project}
          onClose={() => setReadmeDialogOpen(false)}
        />
      )}
      <CardHeader
        className="project-header"
        style={{
          backgroundColor: project.pinned ? '#EC407A' : '#243890'
        }}
        avatar={<GitHub className="avatar" />}
        title={getCardTitle()}
        subheader={
          <Tooltip title="Visit">
            <a className="project-repo" href={project.html_url} target="tab">
              <LinkIcon fontSize="medium" />
            </a>
          </Tooltip>
        }
      />
      <CardContent>
        <div className="description-wrapper">
          <h3 className="title-description">Description</h3>
          <div className="description">{project.description || <i>Not available.</i>}</div>
        </div>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {expanded && (
          <CardContent>
            <div className="summary-repo">
              <span>Created: {format(new Date(project.created_at), 'dd-MM-yyyy p')}</span>
              <span>Last Updated: {format(new Date(project.updated_at), 'dd-MM-yyyy p')}</span>
            </div>
            <div className="divider"></div>
            {<ProjectLanguageChart project={project} />}
            {<div className="divider"></div>}
          </CardContent>
        )}
      </Collapse>
    </Card>
  );
}

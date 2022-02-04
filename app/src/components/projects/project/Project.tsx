import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Tooltip
} from '@mui/material';
import * as React from 'react';
import { GithubRepository } from '../ProjectList';
import './Project.scss';
import { GitHub } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ReadmeDialog from './project-readme-dialog/ReadmeDialog';
import ProjectLanguageChart from './project-language-chart/ProjectLanguageChart';
import { useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

const ExpandMore = styled((props: { _expand: boolean; label: string } & IconButtonProps) => {
  const { _expand, label, ...other } = props;
  return (
    <div>
      <IconButton {...other} size="small" />
      <span className="expand-more-label">{label}</span>
    </div>
  );
})(({ theme, _expand }) => ({
  transform: _expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function Project(props: { repo: GithubRepository }) {
  const project = props.repo;
  const [readmeDialogOpen, setReadmeDialogOpen] = useState(false);
  const [readme, setReadme] = useState('');
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function getCardTitle() {
    return (
      <div>
        <span>{project.name}</span>
        <span
          style={{
            float: 'right'
          }}
        >
          <Tooltip title="View Readme">
            <IconButton
              className="icon-btn-readme"
              size="small"
              onClick={() => {
                axios.get(`/api/repos/${project.name}/readme`).then((rsp) => {
                  setReadme(rsp.data);
                  setReadmeDialogOpen(true);
                });
              }}
            >
              <OpenInFullIcon className="icon-readme" />
            </IconButton>
          </Tooltip>
        </span>
      </div>
    );
  }

  return (
    <Card variant="outlined">
      {readmeDialogOpen && (
        <ReadmeDialog
          open={readmeDialogOpen}
          title={project.name}
          content={readme}
          onClose={() => setReadmeDialogOpen(false)}
        />
      )}
      <CardHeader
        avatar={<GitHub className="avatar" />}
        title={getCardTitle()}
        subheader={
          <a href={project.html_url} target="tab">
            Repository
          </a>
        }
      />
      <CardContent>
        <div className="description-wrapper">
          <h3 className="title-description">Description</h3>
          <div className="description">{project.description || <i>Not available.</i>}</div>
        </div>
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {
          <ExpandMore
            label="Summary"
            _expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon fontSize="small" />
          </ExpandMore>
        }
      </CardActions>
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

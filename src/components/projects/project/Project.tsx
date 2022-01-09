import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  styled
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GithubProject } from '../ProjectList';
import './Project.scss';
import { GitHub } from '@mui/icons-material';
import { Buffer } from 'buffer';
import parse from 'html-react-parser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMoreProps, GithubReadme } from './Project.model';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ReadmeDialog from './readme/ReadmeDialog';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, label, ...other } = props;
  return (
    <div>
      <IconButton {...other} size="small" />
      <span
        style={{
          color: 'white',
          margin: 15,
          verticalAlign: 'middle'
        }}>
        {label}
      </span>
    </div>
  );
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function Project(props: { repo: GithubProject }) {
  const project = props.repo;
  const [readme, setReadme] = useState('');
  const [open, setReadmeDialogOpen] = useState(false);
  const [error, setError] = useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // TODO: Make this cleaner
    fetch(`https://api.github.com/repos/${project.full_name}/contents/README.md`)
      .then((rsp) => rsp.json())
      .then((rsp: GithubReadme) => {
        const readmePayload = Buffer.from(rsp.content, 'base64').toString();
        setReadme(readmePayload.trim());
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  function getCardTitle() {
    return (
      <div>
        <span>{project.name}</span>
        <span
          style={{
            float: 'right'
          }}>
          <IconButton size="small" onClick={() => setReadmeDialogOpen(true)}>
            <OpenInFullIcon fontSize="small" />
          </IconButton>
        </span>
      </div>
    );
  }

  return (
    <div>
      <ReadmeDialog
        open={open}
        title={project.full_name}
        content={parse(readme)}
        onClose={() => setReadmeDialogOpen(false)}
      />
      <Card sx={{ width: 400 }} variant="outlined">
        <CardHeader
          avatar={<GitHub className="avatar" />}
          title={getCardTitle()}
          subheader="Subheader"
        />
        <CardContent>
          <h3 className="title-description">Description</h3>
          <div className="description">{project.description || <i>Not available.</i>}</div>
        </CardContent>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          {
            <ExpandMore
              label="Summary"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more">
              <ExpandMoreIcon />
            </ExpandMore>
          }
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

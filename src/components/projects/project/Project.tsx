import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  styled
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GithubProject } from '../ProjectList';
import './Project.scss';
import { GitHub, Title } from '@mui/icons-material';
import { Buffer } from 'buffer';
import parse from 'html-react-parser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Readme from './readme/Readme';

interface Readme {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: Links;
}

interface Links {
  self: string;
  git: string;
  html: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
  label: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, label, ...other } = props;
  return (
    <div>
      <span
        style={{
          color: 'white',
          margin: 15,
          verticalAlign: 'middle'
        }}>
        {label}
      </span>
      <IconButton
        {...other}
        style={{
          width: 30,
          height: 30
        }}
      />
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // TODO: Make this cleaner
    fetch(`https://api.github.com/repos/${project.full_name}/contents/README.md`)
      .then((rsp) => rsp.json())
      .then((rsp: Readme) => {
        const readmePayload = Buffer.from(rsp.content, 'base64').toString();
        setReadme(readmePayload);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  console.log(readme);

  return (
    <Card sx={{ width: 400 }} variant="outlined">
      <CardHeader
        avatar={<GitHub className="avatar" />}
        title={project.name}
        subheader="Subheader"
      />
      <CardContent>
        <h3 className="title-description">Description</h3>
        <div className="description">
          {project.description || <i className="no-description">Not available.</i>}
        </div>
      </CardContent>
      <CardActions
        style={{
          justifyContent: 'end'
        }}>
        {readme.trim() !== '' && (
          <ExpandMore
            label="View Readme"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more">
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Readme content={parse(readme)} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

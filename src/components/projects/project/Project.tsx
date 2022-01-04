import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GithubProject } from '../ProjectList';
import './Project.scss';
import { GitHub } from '@mui/icons-material';
import { Buffer } from 'buffer';
import parse from 'html-react-parser';

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

export default function Project(props: { repo: GithubProject }) {
  const project = props.repo;
  const [readme, setReadme] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Make this cleaner
    fetch(`https://api.github.com/repos/${project.full_name}/contents/README.md`)
      .then((rsp) => rsp.json())
      .then((rsp: Readme) => {
        const readmePayload = Buffer.from(rsp.content, 'base64').toString();
        console.log(readmePayload);
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

  return (
    <Card sx={{ width: 345 }} variant="outlined">
      <CardHeader
        avatar={<GitHub className="project-avatar" />}
        title={project.name}
        subheader="Subheader"
      />
      {/* <CardContent>{parse(readme)}</CardContent> */}
      <CardContent>{readme}</CardContent>
      <CardActions disableSpacing />
    </Card>
  );
}

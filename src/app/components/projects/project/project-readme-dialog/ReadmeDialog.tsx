import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';
import * as MarkdownParser from 'markdown-it';
import HTMLReactParser from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getSpinner } from '../../../shared/spinner/Spinner';
import ProjectLanguageChart from '../project-language-chart/ProjectLanguageChart';
import { ApiRepositoryResponseDTO, GithubApiRestErrorResponse } from '../../Project';
import NotificationService from '../../../../services/Notification/Notification';

interface ReadmeDialogProps {
  project: ApiRepositoryResponseDTO;
  projectPinned: boolean;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const [readme, setReadme] = useState('');
  const [readmeLoading, setReadmeLoading] = useState(false);
  const [_error, setError] = useState(false);

  const { project, projectPinned, open, onClose } = props;
  const markdownParser = MarkdownParser({
    html: true,
    linkify: true,
    typographer: true
  });
  const parseHtml = HTMLReactParser;

  useEffect(() => {
    setReadmeLoading(true);

    axios
      .get(`/api/repos/${project.name}/readme`)
      .then((rsp) => {
        setReadme(rsp.data);
        setReadmeLoading(false);
        setError(false);
      })
      .catch((err: GithubApiRestErrorResponse) => {
        setReadmeLoading(false);
        setError(true);
        NotificationService.log({
          status: err.response.status,
          statusText: err.response.statusText
        });
      });
  }, []);

  function getReadmeContent() {
    return readme.length > 0 ? (
      parseHtml(markdownParser.render(readme))
    ) : (
      <div className="no-readme">
        <i>No readme found.</i>
      </div>
    );
  }

  function getContent() {
    return (
      <div className="readme-content">
        {projectPinned && <ProjectLanguageChart project={project} />}
        <div>{getReadmeContent()}</div>
      </div>
    );
  }

  return (
    <Dialog className="dialog" open={open} onClose={onClose} scroll="paper">
      <DialogTitle
        className="dialog-title"
        style={{
          backgroundColor: projectPinned ? '#EC407A' : '#243890'
        }}
      >
        {project.name}
      </DialogTitle>
      <DialogContent>{(readmeLoading && getSpinner(true)) || getContent()}</DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';
import * as MarkdownParser from 'markdown-it';
import HTMLReactParser from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getSpinner } from '../../../shared/spinner/Spinner';

interface ReadmeDialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const [readme, setReadme] = useState('');
  const [readmeLoading, setReadmeLoading] = useState(false);

  const { title, open, onClose } = props;
  const markdownParser = MarkdownParser({
    html: true,
    linkify: true,
    typographer: true
  });
  const parseHtml = HTMLReactParser;

  useEffect(() => {
    setReadmeLoading(true);
    axios.get(`/api/repos/${title}/readme`).then((rsp) => {
      setReadme(rsp.data);
      setReadmeLoading(false);
    });
  }, []);

  function getContent() {
    return readme.length > 0 ? (
      parseHtml(markdownParser.render(readme))
    ) : (
      <div className="no-readme">
        <i>No readme found.</i>
      </div>
    );
  }

  return (
    <Dialog open={open} onClose={onClose} scroll="paper" maxWidth="xl">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{(readmeLoading && getSpinner(true)) || getContent()}</DialogContent>
    </Dialog>
  );
}

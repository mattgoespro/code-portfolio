import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';
import * as MarkdownParser from 'markdown-it';
import HTMLReactParser from 'html-react-parser';

interface ReadmeDialogProps {
  title: string;
  content: string;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const { title, content, open, onClose } = props;
  const markdownParser = MarkdownParser({
    html: true,
    linkify: true,
    typographer: true
  });
  const parseHtml = HTMLReactParser;

  function getContent() {
    return content.length > 0 ? (
      parseHtml(markdownParser.render(content))
    ) : (
      <div className="no-readme">
        <i>No readme found.</i>
      </div>
    );
  }

  return (
    <Dialog open={open} onClose={onClose} scroll="paper" maxWidth="xl">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{getContent()}</DialogContent>
    </Dialog>
  );
}

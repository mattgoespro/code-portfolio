import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { React } from 'react';
import parse from 'html-react-parser';
import './ReadmeDialog.scss';

interface ReadmeDialogProps {
  title: string;
  content: string;
  open: boolean;
  onClose: () => void;
}

function createReadme(content: string) {
  const elements = parse(content, {
    replace: (domNode: any) => {
      switch (domNode.name) {
        case 'h1':
          domNode.attribs.style = 'font-size: 24px; color: white;';
          break;
        case 'h2':
          domNode.attribs.style = 'font-size: 20px; color: white;';
          break;
        case 'h3':
          domNode.attribs.style = 'font-size: 18px; color: white;';
          break;
        case 'a':
          domNode.attribs.style = 'color: #8a75ff; text-decoration: underline;';
          break;
        case 'p':
        case 'li':
          domNode.attribs.style =
            'font-size: 16px; font-weight: 100; font-family: Roboto; color: #d6d6d6;';
          break;
        case 'code':
          domNode.attribs.style = 'font-size: 16px; font-family: Roboto; color: #ff570f;';
          break;
      }

      return domNode;
    }
  });

  return elements;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const { title, content, open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" maxWidth="xl">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {(content.length > 0 && createReadme(content)) || (
          <div className="no-readme">
            <i>No readme found.</i>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

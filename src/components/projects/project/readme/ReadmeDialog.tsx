import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import './ReadmeDialog.scss';

interface ReadmeDialogProps {
  title: string;
  content: any;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const { title, content, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} scroll="paper" fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {(content.length > 0 && content) || (
          <div className="no-readme">
            <i>No readme found.</i>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

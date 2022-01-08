import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

interface ReadmeDialogProps {
  title: string;
  content: any;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const { title, content, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} scroll="paper">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

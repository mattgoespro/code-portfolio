import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

interface ReadmeDialogProps {
  title: string;
  content: any;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const { title, content, open, onClose } = props;
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      onClose={() => {
        navigate('/projects');
        onClose();
      }}
      scroll="paper">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';

interface ReadmeDialogProps {
  title: string;
  content: string;
  open: boolean;
  onClose: () => void;
}

export default function ReadmeDialog(props: ReadmeDialogProps) {
  const { title, content, open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" maxWidth="xl">
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

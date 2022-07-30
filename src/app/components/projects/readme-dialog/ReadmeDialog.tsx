import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';
import HTMLReactParser from 'html-react-parser';
import { ApiRepositoryResponseDTO } from '@shared/services/shared.model';
import MarkdownIt from 'markdown-it';

interface ProjectReadmeDialogProps {
  project: ApiRepositoryResponseDTO;
  projectPinned?: boolean;
  readmeContent: string;
  dialogOpen: boolean;
  onDialogClose: () => void;
}

function ProjectReadmeDialog(props: ProjectReadmeDialogProps) {
  const parseHtmlToJsx = HTMLReactParser;
  const parseMarkdownToString = MarkdownIt();

  return (
    <Dialog className="dialog" open={props.dialogOpen} onClose={props.onDialogClose} scroll="paper">
      <DialogTitle
        sx={{ color: 'white', backgroundColor: props.projectPinned ? '#ec407a' : '#243890' }}
      >
        {props.project.name}
      </DialogTitle>
      <DialogContent>
        <div className="readme-content">
          <div>
            {props.readmeContent.length > 0 ? (
              parseHtmlToJsx(parseMarkdownToString.render(props.readmeContent))
            ) : (
              <div className="no-readme">
                <i>No information to display.</i>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectReadmeDialog;

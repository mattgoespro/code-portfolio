import { Dialog, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';
import HTMLReactParser, { Element } from 'html-react-parser';
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
    <Dialog
      className="dialog"
      open={props.dialogOpen}
      onClose={props.onDialogClose}
      scroll="paper"
      fullWidth={true}
    >
      <DialogTitle
        sx={{ color: 'white', backgroundColor: props.projectPinned ? '#ec407a' : '#243890' }}
      >
        {props.project.name}
      </DialogTitle>
      <div className="readme-content">
        <div>
          {props.readmeContent.length > 0 ? (
            parseHtmlToJsx(parseMarkdownToString.render(props.readmeContent), {
              replace: (domNode) => {
                if (domNode instanceof Element) {
                  const tagName = domNode.name;

                  switch (tagName) {
                    case 'h1':
                      domNode.attribs['class'] = 'markdown-title roboto';
                      break;
                    case 'h2':
                      domNode.attribs['class'] = 'markdown-section-title roboto';
                      break;
                    case 'h3':
                      domNode.attribs['class'] = 'markdown-section-subtitle roboto';
                      break;
                    case 'p':
                      domNode.attribs['class'] = 'markdown-section-content';
                      break;
                    case 'ul':
                      domNode.attribs['class'] = 'markdown-list';
                      break;
                    case 'li':
                      domNode.attribs['class'] = 'markdown-section-content';
                  }

                  return domNode;
                }
              }
            })
          ) : (
            <div className="no-readme">
              <i>No information to display.</i>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default ProjectReadmeDialog;

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './ReadmeDialog.scss';
import MarkdownParser from 'markdown-it';
import { HTMLReactParserOptions } from 'html-react-parser';
import { ApiRepositoryResponseDTO } from '../../../../shared/services/shared.model';
import React from 'react';

interface ProjectReadmeDialogProps {
  project: ApiRepositoryResponseDTO;
  pinned?: boolean;
  open: boolean;
  readme: string;
  onDialogClose: () => void;
}

class ReadmeDialog extends React.Component<ProjectReadmeDialogProps, unknown> {
  constructor(
    props: ProjectReadmeDialogProps,
    private markdownParser: MarkdownParser,
    private parseToJsx: (html: string, options?: HTMLReactParserOptions) => JSX.Element
  ) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Dialog
        className="dialog"
        open={this.props.open}
        onClose={this.props.onDialogClose}
        scroll="paper"
      >
        <DialogTitle className={'dialog-title' + this.props.pinned ? ' dialog-pinned' : ''}>
          {this.props.project.name}
        </DialogTitle>
        <DialogContent>
          <div className="readme-content">
            <div>
              {this.props.readme.length > 0 ? (
                this.parseToJsx(this.markdownParser.render(this.props.readme))
              ) : (
                <div className="no-readme">
                  <i>No readme found.</i>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default ReadmeDialog;

import { Dialog, DialogTitle, IconButton } from '@mui/material';
import './DetailsDialog.scss';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
import LanguageChart from './language-chart/LanguageChart';
import Readme from './readme/Readme';
import { ProjectLanguageComposition } from '@shared/services/shared.model';
import format from 'date-fns/format';

interface ProjectDetailsDialog {
  name: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  pinned?: boolean;
  readmeContent: string;
  languageComposition: ProjectLanguageComposition;
  dialogOpen: boolean;
  onDialogClose: () => void;
}

function ProjectDetailsDialog(props: ProjectDetailsDialog) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Dialog
      className="dialog"
      open={props.dialogOpen}
      onClose={props.onDialogClose}
      scroll="body"
      fullWidth={true}
    >
      <DialogTitle className={`dialog-title` + (props.pinned ? ' dialog-title-pinned' : '')}>
        {props.name}
      </DialogTitle>
      <ScrollMenu
        Header={
          <div className="scroll-menu-header">
            <IconButton aria-label="readme" color="primary" onClick={() => setActiveTab(0)}>
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
            <div className="scroll-header-title">{activeTab === 0 ? 'Details' : 'Readme'}</div>
            <IconButton aria-label="details" color="primary" onClick={() => setActiveTab(1)}>
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </div>
        }
      >
        <div className="content">
          {activeTab === 0 ? (
            <div className="summary-wrapper">
              <div className="summary-repo">
                <div className="summary-repo-activity">Project Activity</div>
                <span>Created: {format(new Date(props.createdTimestamp), 'dd-MM-yyyy p')}</span>
                <span>
                  Last Updated: {format(new Date(props.updatedTimestamp), 'dd-MM-yyyy p')}
                </span>
              </div>
              <div className="divider project-collapse-divider"></div>
              <LanguageChart languageComposition={props.languageComposition} />
            </div>
          ) : (
            <Readme readmeContent={props.readmeContent} />
          )}
        </div>
      </ScrollMenu>
    </Dialog>
  );
}

export default ProjectDetailsDialog;

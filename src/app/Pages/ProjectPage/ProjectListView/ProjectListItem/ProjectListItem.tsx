import { Link } from 'react-router-dom';
import { Button, Link as ExternalLink } from '@mui/material';
import styles from './ProjectListItem.module.scss';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectListItemProps {
  name: string;
  description: string;
  pinned: boolean;
  githubUrl: string;
}

export function ProjectListItem(props: ProjectListItemProps) {
  return (
    <div className={`${styles.card}` + `${props.pinned ? ` ${styles.pinned}` : ''}`}>
      <div className={styles.header}>
        <ExternalLink
          className={styles['github-link']}
          href={props.githubUrl}
          target="tab"
          underline="none"
        >
          <OpenInNewIcon fontSize="medium" />
        </ExternalLink>
        <div className={styles['project-name']}>{props.name}</div>
      </div>
      <div className={styles['description-wrapper']}>
        <div className={styles.description}>{props.description || <i>Not available.</i>}</div>
      </div>
      <div className={styles['actions']}>
        <Button className={styles['btn-action']}>
          <Link className={styles['btn-action-view-details']} to={`/projects/${props.name}`}>
            Details
          </Link>
        </Button>
      </div>
    </div>
  );
}

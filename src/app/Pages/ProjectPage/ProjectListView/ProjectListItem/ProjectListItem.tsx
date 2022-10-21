import { Link } from 'react-router-dom';
import { Button, Link as ExternalLink } from '@mui/material';
import styles from './ProjectListItem.module.scss';

interface ProjectListItemProps {
  name: string;
  description: string;
  pinned: boolean;
  githubUrl: string;
}

export function ProjectListItem(props: ProjectListItemProps) {
  return (
    <div className={`${styles.card} ${props.pinned ? styles.pinned : ''}`}>
      <div className={styles.title}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles['nav-links']}>
          <ExternalLink href={props.githubUrl} target="tab" underline="none">
            <Button className={styles['btn-nav-link']}>GitHub</Button>
          </ExternalLink>

          <Button className={styles['btn-nav-link']}>
            <Link className={styles['lnk-view-details']} to={`/projects/${props.name}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles['description-wrapper']}>
        <div className={styles.description}>{props.description || <i>Not available.</i>}</div>
      </div>
    </div>
  );
}

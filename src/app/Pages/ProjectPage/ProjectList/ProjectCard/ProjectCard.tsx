import { Link } from 'react-router-dom';
import { Button, Link as ExternalLink } from '@mui/material';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  name: string;
  description: string;
  pinned: boolean;
  githubUrl: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={`${styles.card}` + `${props.pinned ? ` ${styles.pinned}` : ''}`}>
      <div className={styles.title}>
        <ExternalLink
          href={props.githubUrl}
          target="tab"
          underline="none"
          className={styles['project-name']}
        >
          {props.name}
        </ExternalLink>
      </div>
      <div className={styles.description}>{props.description || <i>Not available.</i>}</div>
      <Button className={styles['btn-action']}>
        <Link className={styles['btn-action-view-details']} to={`/projects/${props.name}`}>
          Details
        </Link>
      </Button>
    </div>
  );
}

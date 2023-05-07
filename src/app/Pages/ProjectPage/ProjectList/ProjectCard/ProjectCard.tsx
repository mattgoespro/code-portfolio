import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  name: string;
  description: string;
  pinned: boolean;
  githubUrl: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={`${styles.card}` + `${props.pinned ? ` ${styles.pinned}` : ""}`}>
      <div className={styles.title}>
        <a href={props.githubUrl} target="tab" className={styles["project-name"]}>
          {props.name}
        </a>
      </div>
      <div className={styles.description}>{props.description || <i>Not available.</i>}</div>
      <button className={styles["btn-action"]}>
        <Link className={styles["btn-action-view-details"]} to={`/projects/${props.name}`}>
          Details
        </Link>
      </button>
    </div>
  );
}

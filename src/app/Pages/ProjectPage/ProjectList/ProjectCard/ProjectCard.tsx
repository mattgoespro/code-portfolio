import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  name: string;
  description: string;
  pinned: boolean;
  githubUrl: string;
  className?: string;
}

export function ProjectCard(props: ProjectCardProps) {
  const { name, description, pinned, githubUrl, className, ...rest } = props;
  const style =
    styles.wrapper + (pinned ? ` ${styles.pinned}` : "") + (className ? ` ${className}` : "");

  return (
    <div className={`${style}`} {...rest}>
      <div className={styles.title}>
        <a href={githubUrl} title={githubUrl} target="tab" className={styles["project-name"]}>
          {name}
        </a>
      </div>
      <div className={styles.description}>
        {description || <b className={styles["not-available"]}>Description not available</b>}
      </div>
      <button className={styles["btn-action"]}>
        <Link className={styles["btn-action-view-details"]} to={`/projects/${name}`}>
          Details
        </Link>
      </button>
    </div>
  );
}

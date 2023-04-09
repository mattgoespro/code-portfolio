import { Outlet, useParams } from 'react-router-dom';
import styles from './ProjectPage.scss';

export function ProjectPage() {
  const params = useParams();

  return (
    <div className={styles['project-page']}>
      <div className={styles['page-header']}>
        <h1 className={styles['header-title']}>{params.projectName || 'My Projects'}</h1>
        {!params.projectName && (
          <h2 className={styles['header-subtitle']}>All projects are available on GitHub</h2>
        )}
      </div>

      <Outlet />
    </div>
  );
}

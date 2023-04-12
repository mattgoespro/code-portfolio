import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ProjectRequestFailure } from './ProjectList/ProjectListRequestFailure/ProjectListRequestFailure';
import styles from './ProjectPage.scss';

export function ProjectPage() {
  const params = useParams();
  const [error, setError] = useState(false);

  const onError = (err) => {
    setError(err);
  };

  return (
    <div className={styles['project-page']}>
      {error && (
        <>
          <div className={styles['project-load-error-overlay']}></div>
          <div className={styles['project-load-error']}>
            <ProjectRequestFailure
              errorMessage={
                <div>
                  <span>Oops!</span> The projects failed to load
                </div>
              }
            />
          </div>
        </>
      )}
      <div className={styles['page-header']}>
        <h1 className={styles['header-title']}>{params.projectName || 'My Projects'}</h1>
        {!params.projectName && (
          <h2 className={styles['header-subtitle']}>All projects are available on GitHub</h2>
        )}
      </div>
      <div className={styles['page-header-wave']}></div>

      <Outlet context={onError} />
    </div>
  );
}

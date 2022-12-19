import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { hideLoadingOverlay, showLoadingOverlay } from '@redux/reducers/loading-overlay-slice';
import { useAppDispatch } from '@redux/hooks/use';
import { ProjectLanguageChart } from './ProjectLanguageChart/ProjectLanguageChart';
import { ProjectReadme } from './ProjectReadme/ProjectReadme';
import { Repository, ProgrammingLanguages } from '@mattgoespro/hoppingmode-web';
import { Buffer } from 'buffer';
import styles from './ProjectDetails.module.scss';
import { ProjectRepositoryStats } from './ProjectRepositoryStats/ProjectRepositoryStats';
import { ProjectListRequestFailure } from '../ProjectList/ProjectListRequestFailure/ProjectListRequestFailure';

export function ProjectView() {
  const { projectName } = useParams();
  const dispatch = useAppDispatch();

  const [project, setProject] = useState<Repository>(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [projectLanguages, setProjectLanguages] = useState<ProgrammingLanguages>(null);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(showLoadingOverlay());
    setLoadingProject(true);

    Promise.all([
      axios.get<Repository>(`/api/repos/${projectName}`, {
        signal: abortController.signal
      }),
      axios.get<ProgrammingLanguages>(`/api/repos/${projectName}/languages`, {
        signal: abortController.signal
      })
    ])
      .then((resp) => {
        setError(null);
        setProject(resp[0].data);
        setProjectLanguages(resp[1].data);
        dispatch(hideLoadingOverlay());
        setLoadingProject(false);
      })
      .catch((err) => {
        setError(err);
        setProject(null);
        setProjectLanguages(null);
        dispatch(hideLoadingOverlay());
        setLoadingProject(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {error && <ProjectListRequestFailure />}
      {!error && !loadingProject && (
        <>
          <div className={styles.intro}>
            <h1 className={styles.name}>{project.projectSpec?.title || project.name}</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles['content-section']}>
                <ProjectRepositoryStats project={project} />
              </div>
              <div className={styles['content-section']}>
                <ProjectLanguageChart languages={projectLanguages} />
              </div>
            </div>
            {(project.readme && (
              <div className={styles.readme}>
                <ProjectReadme
                  readmeContent={Buffer.from(
                    project.readme.content,
                    project.readme.encoding
                  ).toString()}
                />
              </div>
            )) || <div className={styles['readme-unavailable']}></div>}
          </div>
        </>
      )}
    </div>
  );
}

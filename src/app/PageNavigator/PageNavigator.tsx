import { GitHub, LinkedIn } from '@mui/icons-material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SpinnerLoadingOverlay from '@shared/components/SpinnerLoadingOverlay/SpinnerLoadingOverlay';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './PageNavigator.module.scss';

interface PageNavigatorProps {
  landingPage: JSX.Element;
}

export function PageNavigator(props: PageNavigatorProps) {
  const location = useLocation();

  return (
    <div className={styles.shell}>
      <SpinnerLoadingOverlay />
      <nav>
        <ul>
          <li>
            <Link className={styles['page-link']} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles['page-link']} to="/projects/list">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles['page-link']} to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className={styles['social-icons']}>
          <a
            className={styles['social-icon-link']}
            title="Download CV"
            href="https://github.com/mattgoespro/public-resources/raw/master/docs/MattYoungCurriculumVitae.pdf"
          >
            <FileOpenIcon className={styles['social-icon']} fontSize="medium" />
          </a>
          <a
            className={styles['social-icon-link']}
            href="https://www.linkedin.com/in/matt-young-691b48189/"
            target="tab"
          >
            <LinkedIn className={styles['social-icon']} fontSize="medium" />
          </a>
          <a
            className={styles['social-icon-link']}
            href="https://github.com/mattgoespro"
            target="tab"
          >
            <GitHub className={styles['social-icon']} fontSize="medium" />
          </a>
        </div>
      </nav>
      <div className={styles['content-outlet']}>
        {location.pathname === '/' && props.landingPage}
        <Outlet />
      </div>
    </div>
  );
}

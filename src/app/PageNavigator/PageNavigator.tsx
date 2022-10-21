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
        <div className={styles['nav-left']}>
          <Link className={styles['nav-link']} to="/">
            Home
          </Link>
          <Link className={styles['nav-link']} to="/projects/list">
            Projects
          </Link>
          <Link className={styles['nav-link']} to="/about">
            About
          </Link>
        </div>
        <div className={styles['nav-social-icons']}>
          <a
            className={styles['nav-link-social']}
            title="Download CV"
            href="https://github.com/mattgoespro/public-resources/raw/master/docs/MattYoungCurriculumVitae.pdf"
          >
            <FileOpenIcon className={styles['nav-icon-cv-download']} fontSize="medium" />
          </a>
          <a
            className={styles['nav-link-social']}
            href="https://www.linkedin.com/in/matt-young-691b48189/"
            target="tab"
          >
            <LinkedIn className="nav-icon-linkedin" fontSize="medium" />
          </a>
          <a
            className={styles['nav-link-social']}
            href="https://github.com/mattgoespro"
            target="tab"
          >
            <GitHub className={styles['nav-icon-github']} fontSize="medium" />
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

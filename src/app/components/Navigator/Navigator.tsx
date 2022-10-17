import { GitHub, LinkedIn } from '@mui/icons-material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SpinnerLoadingOverlay from '@shared/components/SpinnerLoadingOverlay/SpinnerLoadingOverlay';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Navigator.scss';

interface NavigatorProps {
  landingPage: JSX.Element;
}

export function Navigator(props: NavigatorProps) {
  const location = useLocation();

  return (
    <div className="shell">
      <SpinnerLoadingOverlay />
      <nav>
        <div className="nav-left">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/projects/list">
            Projects
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
        <div className="nav-social-icons">
          <a
            className="nav-link-social"
            title="Download CV"
            href="https://github.com/mattgoespro/public-resources/raw/master/docs/MattYoungCurriculumVitae.pdf"
          >
            <FileOpenIcon className="nav-icon-cv-download" fontSize="medium" />
          </a>
          <a
            className="nav-link-social"
            href="https://www.linkedin.com/in/matt-young-691b48189/"
            target="tab"
          >
            <LinkedIn className="nav-icon-linkedin" fontSize="medium" />
          </a>
          <a className="nav-link-social" href="https://github.com/mattgoespro" target="tab">
            <GitHub className="nav-icon-github" fontSize="medium" />
          </a>
        </div>
      </nav>
      <div className="content-outlet">
        {location.pathname === '/' && props.landingPage}
        <Outlet />
      </div>
    </div>
  );
}

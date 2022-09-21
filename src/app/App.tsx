import SvgIcon from '@mui/material/SvgIcon';
import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import './App.scss';
import GithubLogo from '../assets/svg/logos/github.svg';
import LinkedInLogo from '../assets/svg/logos/linkedin.svg';
import CvDownloadIcon from '../assets/svg/cv.svg';
import SpinnerLoadingOverlay from '@shared/components/spinner-loading-overlay/SpinnerLoadingOverlay';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { ProjectList } from './components/projects/project-list/ProjectList';
import { ProjectView } from './components/projects/project-view/ProjectView';
import { Projects } from './components/projects/Projects';

function Navigator() {
  const location = useLocation();

  const navBar = (
    <nav>
      <div className="nav-left">
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
      </div>
      <div className="nav-social-icons">
        <a
          className="nav-link-social"
          title="Download CV"
          href="https://github.com/mattgoespro/public-resources/raw/master/docs/MattYoungCurriculumVitae.pdf"
        >
          <SvgIcon className="cv-icon">{<CvDownloadIcon />}</SvgIcon>
        </a>
        <a
          className="nav-link-social"
          href="https://www.linkedin.com/in/matt-young-691b48189/"
          target="tab"
        >
          <SvgIcon className="linkedin-icon">{<LinkedInLogo />}</SvgIcon>
        </a>
        <a className="nav-link-social" href="https://github.com/mattgoespro" target="tab">
          <SvgIcon className="github-icon">{<GithubLogo />}</SvgIcon>
        </a>
      </div>
    </nav>
  );

  return (
    <div className="app-shell">
      {navBar}
      <SpinnerLoadingOverlay />
      <div className="content-outlet-wrapper">
        {location.pathname === '/' && <Home />}
        <Outlet />
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator />}>
          <Route path="projects" element={<Projects />}>
            <Route path="list" element={<ProjectList />}></Route>
            <Route path=":projectName" element={<ProjectView />}></Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

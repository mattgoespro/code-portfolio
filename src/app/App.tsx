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
import ProjectListComponent from './components/projects/Projects';
import './App.scss';
import GithubLogo from '../assets/svg/logos/github.svg';
import LinkedInLogo from '../assets/svg/logos/linkedin.svg';
import CvDownloadIcon from '../assets/svg/cv.svg';
import About from './components/about/About';
import Home from './components/home/Home';

function Navigator() {
  const location = useLocation();

  const navBar = (
    <nav>
      <div className="nav-left">
        <div className="nav-left">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
      <div className="icons">
        <a
          title="Download CV"
          href="https://github.com/mattgoespro/public-resources/raw/master/docs/MattYoungCurriculumVitae.pdf"
        >
          <SvgIcon className="cv-icon">{<CvDownloadIcon />}</SvgIcon>
        </a>
        <a href="https://www.linkedin.com/in/matt-young-691b48189/" target="tab">
          <SvgIcon className="linkedin-icon">{<LinkedInLogo />}</SvgIcon>
        </a>
        <a href="https://github.com/mattgoespro" target="tab">
          <SvgIcon className="github-icon">{<GithubLogo />}</SvgIcon>
        </a>
      </div>
    </nav>
  );

  return (
    <div className="app-shell">
      {navBar}
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
          <Route path="projects" element={<ProjectListComponent />}></Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

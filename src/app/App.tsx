import SvgIcon from '@mui/material/SvgIcon';
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import './App.scss';
import GithubLogo from './assets/svg/github-logo.svg';
import LinkedInLogo from './assets/svg/linkedin-logo.svg';
import CvDownloadIcon from './assets/svg/cv.svg';
import { Tooltip } from '@mui/material';
import { StrictMode, useState } from 'react';
import About from './components/about/About';
import ProjectList from './components/projects/ProjectList';
import { useEffect } from 'react';
import Home from './components/home/Home';
import NotificationService from './services/Notification/Notification';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const navBar = (
  <nav>
    <div className="nav-left">
      <div className="nav-left">
        <Link className="nav-link" to="/home">
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
      <Tooltip title="Download CV">
        <a href="https://github.com/mattgoespro/public-resources/raw/master/docs/MattYoungCurriculumVitae.pdf">
          <SvgIcon className="cv-icon">{<CvDownloadIcon />}</SvgIcon>
        </a>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <a href="https://www.linkedin.com/in/matt-young-691b48189/" target="tab">
          <SvgIcon className="linkedin-icon">{<LinkedInLogo />}</SvgIcon>
        </a>
      </Tooltip>
      <Tooltip title="GitHub">
        <a href="https://github.com/mattgoespro" target="tab">
          <SvgIcon className="github-icon">{<GithubLogo />}</SvgIcon>
        </a>
      </Tooltip>
    </div>
  </nav>
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname]);

  return (
    <div className="app">
      {navBar}
      <div className="error-notifications-tray">
        <Stack>
          {notifications.map((notification, index) => {
            return (
              <div className="error-notification-wrapper" key={index}>
                <Alert severity="error">
                  {notification} {notification.message}
                </Alert>
              </div>
            );
          })}
        </Stack>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<ProjectList />}></Route>
            <Route path="about" element={<About />} />
            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

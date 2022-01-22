import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.scss';
import './index.scss';
import GithubLogo from './assets/media/svg/github-logo.svg';
import LinkedInLogo from './assets/media/svg/linkedin-logo.svg';
import CvDownloadIcon from './assets/media/svg/cv-download.svg';
import { Tooltip } from '@mui/material';

export function App() {
  return (
    <div className="app">
      <nav>
        <div className="page-links">
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
        <div className="icons">
          <Tooltip title="Download CV">
            <a href="https://google.com">
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
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

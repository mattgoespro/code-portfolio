import SvgIcon from '@mui/material/SvgIcon';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import GithubLogo from './assets/svg/github-logo.svg';
import LinkedInLogo from './assets/svg/linkedin-logo.svg';
import CvDownloadIcon from './assets/svg/cv.svg';
import { Stack, Tooltip } from '@mui/material';
import { StrictMode } from 'react';
import About from './components/about/About';
import ProjectList from './components/projects/ProjectList';
import Home from './components/home/Home';
import React from 'react';
import { Subscription } from 'rxjs';
import AlertNotificationService, {
  AlertNotificationDetails
} from './services/alert-notification/AlertNotification.service';
import AlertNotification from './services/alert-notification/AlertNotification';

function navBar() {
  return (
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
}

interface AppState {
  notifySubscription: Subscription;
  notifications: AlertNotificationDetails[];
}

class App extends React.Component<Record<string, unknown>, AppState> {
  constructor(props: Record<string, unknown>) {
    super(props);

    this.state = {
      notifications: [],
      notifySubscription: null
    };
  }

  componentDidMount() {
    this.setState({
      notifySubscription: AlertNotificationService.notify.subscribe((notifications) => {
        this.setState({
          notifications
        });
      })
    });
  }

  componentWillUnmount(): void {
    this.state.notifySubscription.unsubscribe();
  }

  render() {
    return (
      <div className="app">
        {navBar()}
        {this.state.notifications.length > 0 && (
          <Stack className="notification-stack">
            <div>
              {this.state.notifications.map((notification, index) => {
                return (
                  <div key={index} className="notification">
                    <AlertNotification
                      alert={notification}
                      onClose={() => {
                        AlertNotificationService.remove(notification);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </Stack>
        )}
        <div className="error-notifications-tray"></div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
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

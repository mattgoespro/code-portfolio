import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.scss';
import './index.scss';

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
          <Link className="nav-link" to="/">
            About
          </Link>
        </div>
        <div className="socials">
          <a className="nav-link" href="https://github.com/mattgoespro" target="tab">
            <img src="./assets/media/images/github-logo.png" alt="Github" />
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/matt-young-691b48189/"
            target="tab">
            <img src="./assets/media/images/linkedin-logo.png" alt="LinkedIn" />
          </a>
        </div>
      </nav>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

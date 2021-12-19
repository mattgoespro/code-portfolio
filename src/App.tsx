import React from "react";
import "./App.scss";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <nav>
          <div className="page-links">
            <a className="nav-link" href="">
              Home
            </a>
            <a className="nav-link" href="">
              Projects
            </a>
            <a className="nav-link" href="">
              About
            </a>
          </div>
          <div className="socials">
            <button id="github" className="logo"></button>
            <a
              className="nav-link"
              href="https://github.com/mattgoespro"
              target="tab"
            >
              <img src="./assets/media/images/github-logo.png" />
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/matt-young-691b48189/"
              target="tab"
            >
              <img src="./assets/media/images/linkedin-logo.png" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <div className="home-wrapper">
      <h2>I am a Full-Stack Software Engineer</h2>
      <div>
        <h2 className="technologies-header">I&apos;ve worked with all sorts of technologies</h2>
        <div className="technologies">
          <div className="technology">
            <div className="technology-name node">Node.js</div>
            <img
              className="node-logo"
              src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/node-js.png?raw=true"
            />
          </div>
          <div className="technology">
            <div className="technology-name react">React</div>
            <img
              className="react-logo"
              src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/react.png?raw=true"
            />
          </div>
          <div className="technology">
            <div className="technology-name angular">Angular</div>
            <img
              className="angular-logo"
              src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/angular.png?raw=true"
            />
          </div>
          <div className="technology">
            <div className="technology-name spring">Spring</div>
            <img
              className="spring-logo"
              src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/spring-boot.png?raw=true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

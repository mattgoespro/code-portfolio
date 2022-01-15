import React from 'react';
import './Home.scss';

const languages = (
  <div>
    <h2 className="section-header">I&apos;ve worked in all sorts of languages</h2>
    <div className="languages">
      <div className="language-card">
        <div className="language-name typescript">
          <span>Type</span>Script
        </div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/typescript.png?raw=true" />
      </div>
      <div className="language-card">
        <div className="language-name java">Java</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/java.png?raw=true" />
      </div>
      <div className="language-card">
        <div className="language-name dotnet">C#</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/dotnet.png?raw=true" />
      </div>
      {/* <div className="language-card">
        <div className="language-name cpp">C++</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/cpp.png?raw=true" />
      </div> */}
    </div>
  </div>
);

const technologies = (
  <div>
    <h2 className="section-header">...in multiple technologies</h2>
    <div className="technologies">
      <div className="technology-card">
        <div className="technology-name node">Node.js</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/node-js.png?raw=true" />
      </div>
      <div className="technology-card">
        <div className="technology-name react">React</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/react.png?raw=true" />
      </div>
      <div className="technology-card">
        <div className="technology-name angular">Angular</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/angular.png?raw=true" />
      </div>
      <div className="technology-card">
        <div className="technology-name spring">Spring</div>
        <img src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/spring.png?raw=true" />
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="home-wrapper">
      <h2 className="header">I am a Full-Stack Software Engineer</h2>
      <div className="section">{languages}</div>
      <div className="section">{technologies}</div>
    </div>
  );
}

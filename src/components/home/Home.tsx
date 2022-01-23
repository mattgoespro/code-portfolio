import Tooltip from '@mui/material/Tooltip';
import './Home.scss';

const languages = (
  <div>
    <h3 className="section-header">I&apos;ve programmed in all sorts of languages</h3>
    <div className="languages">
      <div className="language-card">
        <div className="language-name typescript">
          <span>Type</span>Script
        </div>
        <img src="images/logos/typescript.png" />
      </div>
      <div className="language-card">
        <div className="language-name java">Java</div>
        <img src="images/logos/java.png" />
      </div>
      <div className="language-card">
        <div className="language-name dotnet">C#</div>
        <img src="images/logos/dotnet.png" />
      </div>
    </div>
  </div>
);

const technologies = (
  <div>
    <h3 className="section-header">... in multiple technologies</h3>
    <div className="technologies">
      <div className="technology-card">
        <div className="technology-name react">React</div>
        <div className="card-title-divider"></div>
        <img src="images/logos/react.png" />
      </div>
      <div className="technology-card">
        <div className="technology-name angular">Angular</div>
        <img src="images/logos/angular.png" />
      </div>
      <div className="technology-card">
        <div className="technology-name node">Node.js</div>
        <img src="images/logos/node-js.png" />
      </div>
      <div className="technology-card">
        <div className="technology-name spring">Spring</div>
        <img src="images/logos/spring.png" />
      </div>
    </div>
  </div>
);

const others = (
  <div>
    <h3 className="section-header">... with some other critters thrown into the mix</h3>
    <div className="others">
      <Tooltip title="AWS">
        <img className="other" src="images/logos/aws.png" alt="AWS" />
      </Tooltip>
      <Tooltip title="Docker">
        <img className="other" src="images/logos/docker.png" alt="Docker" />
      </Tooltip>
      <Tooltip title="Kafka">
        <img className="other" src="images/logos/kafka.png" alt="Kafka" />
      </Tooltip>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="home-wrapper">
      <h2 className="header">I am a Full-Stack Software Engineer</h2>
      <div className="section">{languages}</div>
      <div className="section">{technologies}</div>
      <div className="section">{others}</div>
    </div>
  );
}

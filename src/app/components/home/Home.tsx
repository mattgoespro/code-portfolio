import { Card, IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Home.scss';

const languages = (
  <div>
    <h3 className="section-header">I&apos;ve programmed in all sorts of languages</h3>
    <div className="languages">
      <Card className="card">
        <div className="language-card">
          <div className="language-name typescript">
            <span>Type</span>Script
          </div>
          <img src="images/logos/typescript.png" />
        </div>
      </Card>
      <Card className="card">
        <div className="language-card">
          <div className="language-name java">Java</div>
          <img src="images/logos/java.png" />
        </div>
      </Card>
      <Card className="card">
        <div className="language-card">
          <div className="language-name dotnet">C#</div>
          <img src="images/logos/dotnet.png" />
        </div>
      </Card>
    </div>
  </div>
);

const technologies = (
  <div>
    <h3 className="section-header">... in multiple technologies</h3>
    <div className="technologies">
      <Card className="card">
        <div className="technology-card">
          <div className="technology-name react">React</div>
          <div className="card-title-divider"></div>
          <img src="images/logos/react.png" />
        </div>
      </Card>
      <Card className="card">
        <div className="technology-card">
          <div className="technology-name angular">Angular</div>
          <img src="images/logos/angular.png" />
        </div>
      </Card>
      <Card className="card">
        <div className="technology-card">
          <div className="technology-name node">Node.js</div>
          <img src="images/logos/node-js.png" />
        </div>
      </Card>
      <Card className="card">
        <div className="technology-card">
          <div className="technology-name spring">Spring</div>
          <img src="images/logos/spring.png" />
        </div>
      </Card>
      <Card className="card">
        <div className="technology-card">
          <div className="technology-name postgresql">PostgreSQL</div>
          <img src="images/logos/postgresql.png" />
        </div>
      </Card>
    </div>
  </div>
);

const others = (
  <div>
    <h3 className="section-header">... with some other critters thrown into the mix</h3>
    <div className="others card">
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
      <div className="headers">
        <h1 className="welcome">Hello World!</h1>
        <h3 className="welcome-intro">Allow me to introduce myself.</h3>
        <div className="header-divider"></div>
        <h2 className="header-2">I am an aspiring Full-Stack Software Engineer.</h2>
        <div className="tour-container">
          <h2 className="header-2">Let me give you a tour of what I&apos;ve been up to...</h2>
        </div>
        <IconButton color="secondary">
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
      <div className="circles"></div>
      <div className="section">{languages}</div>
      <div className="section">{technologies}</div>
      <div className="section">{others}</div>
    </div>
  );
}

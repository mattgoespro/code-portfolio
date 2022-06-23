import './Home.scss';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Tooltip } from '@mui/material';
import Timeline from './timeline/Timeline';
import { useState } from 'react';

export default function Home() {
  const [timelineVisible, setTimelineVisible] = useState(false);

  return (
    <div className="home-wrapper">
      <div className="headers">
        <div className="background-image-header">
          <img
            className="background-image"
            src="https://github.com/mattgoespro/public-resources/blob/master/images/knysna_harbour.jpg?raw=true"
          ></img>
          <div className="background-image-welcome-wrapper">
            <h1 className="welcome">
              Hello <span>World!</span>
            </h1>
            <h3 className="welcome-intro">Allow me to introduce myself.</h3>
          </div>
        </div>

        <div className="welcome-info-actions">
          <p className="welcome-info">
            I am an aspiring Full-Stack Software Engineer - a young, self-driven go-getter looking
            to make a difference in the software industry.
          </p>
          <div className="welcome-divider"></div>
          <div className="welcome-actions">
            <div className="welcome-info">What would you like to see next?</div>
            <div className="welcome-action-buttons">
              <Button
                className="btn-learn-more btn-action"
                onClick={() => setTimelineVisible(!timelineVisible)}
              >
                Timeline
              </Button>
              <Tooltip title="Disabled for now -.-">
                <Button className="btn-technical-experience .btn-action">Experience</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      {timelineVisible && <Timeline />}
    </div>
  );
}

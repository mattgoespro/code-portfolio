import './Home.scss';
import 'react-vertical-timeline-component/style.min.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import HomeBanner from '@images/page-banner-home.jpg';
import Timeline from './timeline/Timeline';
import PageBanner from '@shared/components/page-banner/PageBanner';

export default function Home() {
  const [timelineVisible, setTimelineVisible] = useState(false);

  return (
    <div className="home-wrapper">
      <PageBanner
        title={
          <div>
            Hello <span>World!</span>
          </div>
        }
        subtitle="Allow me to introduce myself."
        backgroundImage={HomeBanner}
      />
      <div className="welcome-info-actions">
        <p className="welcome-info">
          I am an aspiring Full-Stack Software Engineer - a young, self-driven go-getter looking to
          make a difference in the software industry.
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
            <Button className="btn-technical-experience .btn-action">Experience</Button>
          </div>
        </div>
      </div>
      {timelineVisible && <Timeline />}
    </div>
  );
}

import './Home.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import uctLogo from '../../assets/media/images/uct-logo.png';
import { Button } from '@mui/material';

const timelineArrowStyle: React.CSSProperties = { borderRight: '7px solid  #131946' };
const timelineContentStyle: React.CSSProperties = {
  background: '#283593',
  color: '#fff'
};

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="headers">
        <div className="welcome-wrapper">
          <h1 className="welcome">
            Hello <span>World!</span>
          </h1>
          <div className="header-divider"></div>
          <h3 className="welcome-intro">Allow me to introduce myself.</h3>
        </div>
        <div className="welcome-info-actions">
          <p className="welcome-info">
            I am an aspiring Full-Stack Software Engineer - a young, self-driven go-getter looking
            to make a difference in the software industry.
          </p>
          <div className="welcome-actions">
            <div className="welcome-info">What would you like to do next?</div>
            <div className="welcome-action-buttons">
              <Button className="btn-learn-more">Timeline</Button>
              <Button className="btn-technical-experience">Experience</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline">
        <VerticalTimeline lineColor="#ff9800">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="timeline-date"
            contentStyle={timelineContentStyle}
            contentArrowStyle={timelineArrowStyle}
            date="2015-2017"
            iconStyle={{
              display: 'flex',
              backgroundColor: '#fff'
            }}
            icon={<img src={uctLogo} style={{ display: 'flex' }}></img>}
          >
            <h3 className="vertical-timeline-element-title">Education - Undergrad</h3>
            <p>
              Enrolled at the University of Cape Town, double majoring in Computer Science and
              Computer Games Development and eventually graduating with a degree in Computer
              Science.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="timeline-date"
            contentStyle={timelineContentStyle}
            contentArrowStyle={timelineArrowStyle}
            date="2018"
            iconStyle={{
              display: 'flex',
              backgroundColor: '#fff'
            }}
            icon={<img src={uctLogo} style={{ display: 'flex' }}></img>}
          >
            <h3 className="vertical-timeline-element-title">Education - Honours</h3>
            <p>Enrolled in the Computer Science honours course at the University of Cape Town.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

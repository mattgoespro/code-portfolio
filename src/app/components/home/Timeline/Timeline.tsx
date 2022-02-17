import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import uctLogo from '../../../assets/media/images/uct-logo.png';
import './Timeline.scss';

export default function Timeline() {
  const timelineArrowStyle: React.CSSProperties = { borderRight: '7px solid  #ff9800' };
  const timelineContentStyle: React.CSSProperties = {
    background: '#283593',
    color: '#fff'
  };

  return (
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
            Computer Games Development and eventually graduating with a degree in Computer Science.
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
  );
}

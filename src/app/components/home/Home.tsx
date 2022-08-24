import './Home.scss';
import 'react-vertical-timeline-component/style.min.css';
import HomeBanner from '@images/page-banner-home.jpg';
import PageBanner from '@shared/components/page-banner/PageBanner';

export default function Home() {
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
        backgroundImageAdjust={true}
      />
      <p className="welcome-info">
        I am an aspiring Full-Stack Software Engineer - a young, self-driven go-getter looking to
        make a difference in the software industry.
      </p>
    </div>
  );
}

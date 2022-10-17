import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import './HomePage.scss';

export function HomePage() {
  return (
    <>
      <PageBanner
        title={
          <div>
            Hello <span>World!</span>
          </div>
        }
        subtitle="Allow me to introduce myself."
        backgroundImage="images/knysna-harbour-banner.jpg"
        backgroundImageAdjust={true}
      />
      <div className="welcome-page">
        <h1 className="title-intro">The Intro</h1>
        <p>
          I am an aspiring Full-Stack Software Engineer - a young, self-driven go-getter looking to
          make a difference in the software industry.
        </p>
        <p>
          This digital portfolio serves as an outlet to demonstrate my skills as a creative and a
          Software Engineering professional, as well as for anyone wanting to keep in touch with
          what I work in on my free time.
        </p>
      </div>
    </>
  );
}

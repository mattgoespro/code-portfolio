import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <PageBanner
        title={
          <div>
            Hello <span>World!</span>
          </div>
        }
        subtitle="Allow me to introduce myself"
        backgroundImage="images/knysna-harbour-banner.jpg"
        backgroundImageAdjust={true}
      />
      <div>
        <h1>The Intro</h1>
        <p>
          I am an aspiring Full-Stack Software Engineer - a young, self-driven go-getter looking to
          make a difference in the software industry.
        </p>
      </div>
    </>
  );
}

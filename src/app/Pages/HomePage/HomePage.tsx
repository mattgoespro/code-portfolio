import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import { CSSProperties, useEffect } from 'react';
import styles from './HomePage.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';

export function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  function styleSkillTitleDivider(color: string) {
    return {
      style: {
        '--skill-title-divider-color': color
      } as CSSProperties,
      className: styles['skill-title-divider']
    };
  }

  const titleFadeInDelay = 100;

  const skillTitleFadeIn = {
    'data-aos': 'fade-up',
    'data-aos-offset': 400,
    'data-aos-duration': 400,
    'data-aos-delay': titleFadeInDelay
  };

  function skillScrollIn(index: number) {
    return {
      'data-aos': 'fade-left',
      'data-aos-offset': '400',
      'data-aos-duration': '400',
      'data-aos-delay': titleFadeInDelay + 300 + 100 * index
    };
  }

  function createSkillSection(...sections: { id: string; skill: string }[]) {
    return (
      <div className={styles['skill-section']}>
        {sections.map((section, index) => {
          return (
            <div key={section.skill} className={styles['skill-card']} {...skillScrollIn(index + 1)}>
              <div className={`${styles['skill-name']} ${styles[`title-${section.id}`]}`}>
                {section.skill}
              </div>
              <div {...styleSkillTitleDivider(styles[`color-${section.id}`])}></div>
              <img src={`images/logos/${section.id}.png`} alt={section.id} />
            </div>
          );
        })}
      </div>
    );
  }

  const others = (
    <div className={styles.others}>
      <div>
        <img
          className={styles.other}
          src="images/logos/docker.png"
          alt="Docker"
          {...skillScrollIn(1)}
        />
      </div>
      <div>
        <img className={styles.other} src="images/logos/aws.png" alt="AWS" {...skillScrollIn(2)} />
      </div>
      <div>
        <img
          className={styles.other}
          src="images/logos/kafka.png"
          alt="Kafka"
          {...skillScrollIn(3)}
        />
      </div>
    </div>
  );

  return (
    <>
      <PageBanner
        title={
          <div>
            Hello <span>World!</span>
          </div>
        }
        subtitle="Allow me to introduce myself"
        backgroundImage="images/page-banners/knysna-harbour-banner.jpg"
        backgroundImageAdjust={true}
      />
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h1>My name is Matt</h1>
          <h2>I am an aspiring Full-Stack Software Engineer</h2>
          <h3>
            A young, self-driven go-getter looking to make a difference in the software industry.
          </h3>
        </div>
        <div className={styles['skill-sets']}>
          <div className={styles['skill-set-wrapper']}>
            <h3 className={styles['skill-title']} {...skillTitleFadeIn}>
              I have experience programming in a variety of different languages
            </h3>
            {createSkillSection(
              { id: 'typescript', skill: 'TypeScript' },
              { id: 'java', skill: 'Java' },
              { id: 'c-sharp', skill: '.NET' }
            )}
          </div>
          <div className={styles['skill-set-wrapper']}>
            <h3 className={styles['skill-title']} {...skillTitleFadeIn}>
              across multiple software development technologies
            </h3>
            {createSkillSection(
              { id: 'react', skill: 'React' },
              { id: 'angular', skill: 'Angular' },
              { id: 'node', skill: 'Node' },
              { id: 'spring', skill: 'Spring' },
              { id: 'postgresql', skill: 'PostgreSQL' }
            )}
          </div>
          <div className={styles['skill-set-wrapper']} data-aos="fade-zoom-in">
            <h3 className={styles['skill-title']} {...skillTitleFadeIn}>
              and touched upon a few other useful tools and technologies
            </h3>
            {others}
          </div>
        </div>
      </div>
    </>
  );
}

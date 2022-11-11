import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import { CSSProperties, useEffect } from 'react';
import styles from './HomePage.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tooltip from '@mui/material/Tooltip';

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

  function createSkillSection(...sections: { id: string; name: string }[]) {
    return (
      <div className={styles['skill-section']}>
        {sections.map((section, index) => {
          return (
            <div key={section.name} className={styles['skill-card']} {...skillScrollIn(index + 1)}>
              <div className={`${styles['skill-name']} ${styles[`title-${section.id}`]}`}>
                {section.name}
              </div>
              <div {...styleSkillTitleDivider(styles[`color-${section.id}`])}></div>
              <img src={`/images/logos/${section.id}.png`} alt={section.id} />
            </div>
          );
        })}
      </div>
    );
  }

  function createOthersSection(...others: { id: string; name: string }[]) {
    return (
      <div className={styles.others}>
        {others.map((other) => {
          return (
            <div key={other.id}>
              <Tooltip title={other.name}>
                <img
                  className={styles.other}
                  src={`/images/logos/${other.id}.png`}
                  alt="Git"
                  {...skillScrollIn(1)}
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={
          <div>
            Hello <span>World!</span>
          </div>
        }
        subtitle="Allow me to introduce myself"
        backgroundImage="/images/page-banners/knysna-harbour-banner.jpg"
        backgroundImageAdjust={true}
      />
      <div className={styles.wrapper}>
        <div className={styles['page-content']}>
          <div className={styles.intro}>
            <h1>My name is Matt</h1>
            <h2>
              I am a self-taught full-stack Software Engineer, specializing in Progressive Web
              Applications and scalable microservice architectures.
            </h2>
            <h3>
              A young, self-driven go-getter looking to make a difference in the software industry.
            </h3>
          </div>
          <div className={styles['skill-sets']}>
            <div className={styles['skill-set-wrapper']}>
              <h3 className={styles['skill-title']} {...skillTitleFadeIn}>
                I have experience developing software in a variety of different languages...
              </h3>
              {createSkillSection(
                { id: 'typescript', name: 'TypeScript' },
                { id: 'java', name: 'Java' },
                { id: 'c-sharp', name: '.NET' },
                { id: 'dart', name: 'Dart' }
              )}
            </div>
            <div className={styles['skill-set-wrapper']}>
              <h3 className={styles['skill-title']} {...skillTitleFadeIn}>
                across multiple software development technologies...
              </h3>
              {createSkillSection(
                { id: 'node', name: 'Node' },
                { id: 'react', name: 'React' },
                { id: 'angular', name: 'Angular' },
                { id: 'docker', name: 'Docker' },
                { id: 'spring', name: 'Spring' },
                { id: 'postgresql', name: 'PostgreSQL' },
                { id: 'flutter', name: 'Flutter' }
              )}
            </div>
            <div className={styles['skill-set-wrapper']} data-aos="fade-zoom-in">
              <h3 className={styles['skill-title']} {...skillTitleFadeIn}>
                and other essential developer tools
              </h3>
              {createOthersSection(
                {
                  id: 'git',
                  name: 'Git'
                },
                {
                  id: 'aws',
                  name: 'Amazon Web Services'
                },
                {
                  id: 'kafka',
                  name: 'Kafka'
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

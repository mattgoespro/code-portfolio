import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import { CSSProperties, useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tooltip from '@mui/material/Tooltip';

export function HomePage() {
  const [viewSkills, setViewSkills] = useState(false);

  useEffect(() => {
    // Initialize animate-on-scroll engine.
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
            <h1>Hey, my name is Matt</h1>
            <h2>Thank you for visiting my online portfolio showcase</h2>
          </div>
          {viewSkills && (
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
                  in a variety of ecosystems...
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
                  working with a selection of industry standard tooling
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
                    id: 'webpack',
                    name: 'webpack'
                  },
                  {
                    id: 'docker-compose',
                    name: 'docker-compose'
                  },
                  {
                    id: 'nginx',
                    name: 'nginx'
                  },
                  {
                    id: 'kafka',
                    name: 'Kafka'
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

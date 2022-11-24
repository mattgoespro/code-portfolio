import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import { useEffect } from 'react';
import styles from './HomePage.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tooltip from '@mui/material/Tooltip';
import { setStyleVariableColor } from 'src/app/Shared/utility';
import { Button } from '@mui/material';
// import ResumeIcon from 'src/assets/icons/resume.svg';

/**
 * @param resourceIdentifier The identifier for a stylesheet variable or image
 * asset name.
 */
interface SoftwareSkills {
  resourceIdentifier: string;
  label: string | JSX.Element;
}

function ScrollTrigger(props: { triggerName: string }) {
  return <div id={props.triggerName}></div>;
}

export function HomePage() {
  const devLanguages: SoftwareSkills[] = [
    {
      resourceIdentifier: 'javascript',
      label: (
        <>
          Java<strong>Script</strong>
        </>
      )
    },
    {
      resourceIdentifier: 'typescript',
      label: (
        <>
          Type<strong>Script</strong>
        </>
      )
    },
    {
      resourceIdentifier: 'sass',
      label: 'SASS'
    },
    { resourceIdentifier: 'java', label: 'Java' },
    {
      resourceIdentifier: 'c-sharp',
      label: (
        <>
          .<strong>NET</strong>
        </>
      )
    },
    { resourceIdentifier: 'dart', label: 'Dart' }
  ];
  const devFrameworks: SoftwareSkills[] = [
    { resourceIdentifier: 'node', label: 'Node' },
    { resourceIdentifier: 'react', label: 'React' },
    { resourceIdentifier: 'angular', label: 'Angular' },
    { resourceIdentifier: 'postgresql', label: 'PostgreSQL' },
    { resourceIdentifier: 'docker', label: 'Docker' },
    { resourceIdentifier: 'spring', label: 'Spring' },
    {
      resourceIdentifier: 'express',
      label: (
        <>
          express<strong>js</strong>
        </>
      )
    },
    { resourceIdentifier: 'flutter', label: 'Flutter' }
  ];
  const devTools: SoftwareSkills[] = [
    {
      resourceIdentifier: 'html',
      label: 'HTML'
    },
    {
      resourceIdentifier: 'CSS',
      label: 'CSS'
    },
    {
      resourceIdentifier: 'git',
      label: 'Git'
    },
    {
      resourceIdentifier: 'aws',
      label: 'Amazon Web Services'
    },
    {
      resourceIdentifier: 'webpack',
      label: 'webpack'
    },
    {
      resourceIdentifier: 'docker-compose',
      label: 'docker-compose'
    },
    {
      resourceIdentifier: 'nginx',
      label: 'nginx'
    },
    {
      resourceIdentifier: 'kafka',
      label: 'Kafka'
    }
  ];

  useEffect(() => {
    // Initialize animate-on-scroll engine.
    AOS.init();
  }, []);

  const titleFadeInDelay = 100;

  function skillTitleFadeIn(triggerName: string) {
    return {
      'data-aos': 'fade-left',
      'data-aos-anchor': `#${triggerName}`,
      'data-aos-anchor-placement': 'center',
      'data-aos-offset': 400,
      'data-aos-duration': 400,
      'data-aos-delay': titleFadeInDelay
    };
  }

  function skillScrollIn(index: number, triggerName: string) {
    return {
      'data-aos': 'fade-left',
      'data-aos-anchor': `#${triggerName}`,
      'data-aos-anchor-placement': 'center',
      'data-aos-offset': 400,
      'data-aos-duration': 400,
      'data-aos-delay': titleFadeInDelay + 300 + 100 * index
    };
  }

  function getSoftwareSkillList(list: SoftwareSkills[], scrollTrigger: string) {
    return list.map((item, index) => {
      return (
        <div
          key={item.resourceIdentifier}
          className={styles['software-skill-wrapper']}
          {...skillScrollIn(index + 1, scrollTrigger)}
        >
          <img
            className={styles['skill-img']}
            src={`/assets/images/logos/${item.resourceIdentifier}.png`}
            alt={item.resourceIdentifier}
          />
          <div className={`${styles['label']} ${styles[`title-${item.resourceIdentifier}`]}`}>
            <div className={styles['label-text']}>{item.label}</div>
            <div
              className={styles['label-underline']}
              style={setStyleVariableColor(
                'color-label-underline',
                styles[`color-${item.resourceIdentifier}`]
              )}
            ></div>
          </div>
        </div>
      );
    });
  }

  function getSoftwareToolsList(list: SoftwareSkills[], anchorId: string) {
    return list.map((item) => {
      return (
        <div key={item.resourceIdentifier}>
          <Tooltip title={item.label}>
            <img
              className={styles['skill-tool-img']}
              src={`/assets/images/logos/${item.resourceIdentifier}.png`}
              alt="Git"
              {...skillScrollIn(1, anchorId)}
            />
          </Tooltip>
        </div>
      );
    });
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
        backgroundImage="/assets/images/page-banners/knysna-harbour-banner.jpg"
        backgroundImageAdjust={true}
      />
      <div className={styles.wrapper}>
        <div className={styles['page-content']}>
          <div className={styles.intro}>
            <h1>I'm Matt - a full-stack Software Engineer</h1>
            <h2>Thanks for taking an interest in my work</h2>
            <div className={styles['intro-hire']}>
              <h3>Hiring?</h3>
              <Button
                className={styles['download-resume']}
                disableRipple
                href="/assets/docs/resume.pdf"
                download={true}
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className={styles['titled-content-list']}>
            <h3 className={styles['title']} {...skillTitleFadeIn('languages')}>
              I've developed software in a variety of programming languages
            </h3>
            <ScrollTrigger triggerName="languages" />
            <div className={styles['list']}>{getSoftwareSkillList(devLanguages, 'languages')}</div>
          </div>
          <div className={styles['titled-content-list']}>
            <h3 className={styles['title']} {...skillTitleFadeIn('frameworks')}>
              Across multiple frameworks
            </h3>
            <ScrollTrigger triggerName="frameworks" />
            <div className={styles['list']}>
              {getSoftwareSkillList(devFrameworks, 'frameworks')}
            </div>
          </div>
          <div className={styles['titled-content-list']}>
            <h3 className={styles['title']} {...skillTitleFadeIn('others')}>
              Alongside a selection of popular industry standard tools
            </h3>
            <ScrollTrigger triggerName="others" />
            <div className={styles['list']}>{getSoftwareToolsList(devTools, 'others')}</div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect } from 'react';
import styles from './HomePage.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tooltip from '@mui/material/Tooltip';
import { setStyleVariableColor } from 'src/app/Shared/utility';
import { display } from '@mui/system';

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
    <div className={styles.wrapper}>
      {/* <div className={styles.intro}>
        <h1>I'm Matt - a full-stack Software Engineer</h1>
        <h2>Thanks for taking an interest in my work</h2>
      </div>
      <div className={styles['titled-content-list']}>
        <h3 className={styles['title']} {...skillTitleFadeIn('languages')}>
          I've developed software in a variety of different programming languages
        </h3>
        <ScrollTrigger triggerName="languages" />
        <div className={styles['list']}>{getSoftwareSkillList(devLanguages, 'languages')}</div>
      </div>
      <div className={styles['titled-content-list']}>
        <h3 className={styles['title']} {...skillTitleFadeIn('frameworks')}>
          Across multiple frameworks
        </h3>
        <ScrollTrigger triggerName="frameworks" />
        <div className={styles['list']}>{getSoftwareSkillList(devFrameworks, 'frameworks')}</div>
      </div>
      <div className={styles['titled-content-list']}>
        <h3 className={styles['title']} {...skillTitleFadeIn('others')}>
          Alongside a selection of popular industry standard tools
        </h3>
        <ScrollTrigger triggerName="others" />
        <div className={styles['list']}>{getSoftwareToolsList(devTools, 'others')}</div>
      </div> */}
      <div>
        {/* <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="600" fill="#253d74"></rect>
          <path
            d="M0 215L37.5 236.7C75 258.3 150 301.7 225 323.3C300 345 375 345 450 320.3C525 295.7 600 246.3 675 252.5C750 258.7 825 320.3 862.5 351.2L900 382L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z"
            fill="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg> */}
      </div>
    </div>
  );
}

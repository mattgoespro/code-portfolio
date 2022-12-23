import { useEffect } from 'react';
import styles from './HomePage.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tooltip from '@mui/material/Tooltip';
import { setStyleVariableColor } from 'src/app/Shared/utility';
import {
  devFrameworks,
  devLanguages,
  devTools,
  skillScrollIn,
  skillTitleFadeIn,
  SoftwareSkills
} from './Skills';

function ScrollTrigger(props: { triggerName: string }) {
  return <div id={props.triggerName}></div>;
}

export function HomePage() {
  useEffect(() => {
    // Initialize animate-on-scroll engine.
    AOS.init();
  }, []);

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
          <div
            className={styles.label}
            style={{ color: styles[`color-${item.resourceIdentifier}`] }}
          >
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
    <div className={styles['home-page']}>
      <div className={styles.banner}>
        <div className={styles['banner-content']}>
          <div className={styles['banner-text']}>
            <h1>Hey</h1>
            <h2>I'm Matt, and this is my little corner of the web.</h2>
            <div className={styles['banner-logo-alias']}>
              Online, I go by the alias <span>hoppingmode</span>.
            </div>
          </div>
          <div className={styles['banner-logo']}>
            <img src="/assets/images/hoppingmode-logo.png" />
          </div>
        </div>
      </div>
      <div className={styles['content-wave-divider']}></div>
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
      </div>
    </div>
  );
}

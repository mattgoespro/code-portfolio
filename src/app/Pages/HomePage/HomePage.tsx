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

  function getLanguageList(list: SoftwareSkills[], scrollTrigger: string) {
    return list.map((item, index) => {
      return (
        <div
          key={item.resourceIdentifier}
          className={styles['language-list-item']}
          {...skillScrollIn(index + 1, scrollTrigger)}
        >
          <div className={styles['language-icon']}>
            <img
              src={`/assets/images/logos/${item.resourceIdentifier}.png`}
              alt={item.resourceIdentifier}
            />
          </div>
          <div
            className={styles.language}
            style={{ color: styles[`color-${item.resourceIdentifier}`] }}
          >
            <div className={styles['language-name']}>{item.label}</div>
            <div
              className={styles['language-name-underline']}
              style={setStyleVariableColor(
                'language-name-underline-color',
                styles[`color-${item.resourceIdentifier}`]
              )}
            ></div>
          </div>
        </div>
      );
    });
  }

  function getToolsList(list: SoftwareSkills[], anchorId: string) {
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

  const banner = (
    <div className={styles.banner}>
      <div className={styles['banner-content']}>
        <div className={styles['banner-text']}>
          <h1>Hey</h1>
          <h2>I'm Matt, and this is my little corner of the web.</h2>
        </div>
        <div className={styles['banner-logo']}>
          <img src="/assets/images/hoppingmode-logo.png" />
        </div>
      </div>
      <div className={styles['banner-logo-alias']}>
        Online, I go by the alias <span>hoppingmode</span>.
      </div>
    </div>
  );

  const languageSkills = (
    <div className={styles['language-skills']}>
      <h3 {...skillTitleFadeIn('languages')}>
        I've developed software in a variety of different programming languages
      </h3>
      <ScrollTrigger triggerName="languages" />
      <div className={styles['language-list']}>{getLanguageList(devLanguages, 'languages')}</div>
    </div>
  );

  const frameworkSkills = (
    <div className={styles['framework-skills']}>
      <h3 {...skillTitleFadeIn('frameworks')}>
        I've worked with a variety of development frameworks
      </h3>
      <ScrollTrigger triggerName="frameworks" />
      <div className={styles['framework-list']}>{getLanguageList(devFrameworks, 'frameworks')}</div>
    </div>
  );

  const otherSkills = (
    <div className={styles['other-skills']}>
      <h3 {...skillTitleFadeIn('others')}>
        Alongside a selection of popular industry standard tools
      </h3>
      <ScrollTrigger triggerName="others" />
      <div className={styles['other-list']}>{getToolsList(devTools, 'others')}</div>
    </div>
  );

  return (
    <div className={styles['home-page']}>
      {banner}
      <div className={styles['content-wave-divider']}></div>
      {languageSkills}
      <div className={styles['content-wave-divider-end']}></div>
      {frameworkSkills}
      <div></div>
      {otherSkills}
    </div>
  );
}

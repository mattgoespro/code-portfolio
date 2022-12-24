import styles from './HomePage.module.scss';
import Tooltip from '@mui/material/Tooltip';
import { devFrameworks, devLanguages, devTools, SoftwareEngineeringSkills } from './Skills';
import { scrollAnimateIn } from '@shared/utility/AnimateOnScroll';
import { setStyleVariableColor } from '@shared/utility/Utility';

type TechnicalSkillType = 'languages' | 'frameworks' | 'other';

export function HomePage() {
  const SKILL_TITLE_ANIMATE_DELAY = 100;
  const SKILL_TITLE_ANIMATE_DURATION = 400;
  const SKILL_CONTENT_ANIMATE_LAG = 400;
  const SKILL_CONTENT_ANIMATE_SPEED = 100;

  function ScrollAnimationTrigger(props: { anchor: string }) {
    return <div id={props.anchor}></div>;
  }

  function skillTitleScrollFade(anchor: string, scrollOffset?: number) {
    return scrollAnimateIn({
      anchor,
      anchorPlacement: 'center-center',
      animation: 'fade-left',
      animationDuration: SKILL_TITLE_ANIMATE_DURATION,
      animationDelay: SKILL_TITLE_ANIMATE_DELAY,
      scrollOffset: scrollOffset || 400
    });
  }

  function skillListItemScrollFade(itemIndex: number, anchor: string) {
    return scrollAnimateIn({
      anchor,
      animation: 'fade-left',
      animationDuration: SKILL_TITLE_ANIMATE_DURATION,
      easing: 'ease',
      animationDelay:
        SKILL_TITLE_ANIMATE_DELAY +
        SKILL_CONTENT_ANIMATE_LAG +
        SKILL_CONTENT_ANIMATE_SPEED * itemIndex
    });
  }

  function skillList(list: SoftwareEngineeringSkills[], scrollTrigger: TechnicalSkillType) {
    return list.map((item, index) => {
      return (
        <div
          key={item.resourceIdentifier}
          className={styles['skill-list-item']}
          {...skillListItemScrollFade(index + 1, scrollTrigger)}
        >
          <div className={styles['skill-brand-icon']}>
            <img
              src={`/assets/images/logos/${item.resourceIdentifier}.png`}
              alt={item.resourceIdentifier}
            />
          </div>
          <div
            className={styles.skill}
            style={{ color: styles[`color-${item.resourceIdentifier}`] }}
          >
            <div className={styles['skill-name']}>{item.label}</div>
            <div
              className={styles['skill-name-underline']}
              style={setStyleVariableColor(
                'skill-name-underline-color',
                styles[`color-${item.resourceIdentifier}`]
              )}
            ></div>
          </div>
        </div>
      );
    });
  }

  function createToolsList(list: SoftwareEngineeringSkills[], anchorId: string) {
    return list.map((item) => {
      return (
        <div key={item.resourceIdentifier}>
          <Tooltip title={item.label}>
            <img
              className={styles['skill-tool-img']}
              src={`/assets/images/logos/${item.resourceIdentifier}.png`}
              alt="Git"
              {...skillListItemScrollFade(1, anchorId)}
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
        Online, I go by the alias <span className={styles.alias}>hoppingmode</span>.
      </div>
    </div>
  );

  function skillSection(
    skillType: TechnicalSkillType,
    text: string,
    skills: SoftwareEngineeringSkills[],
    addStyleClass?: boolean
  ) {
    return (
      <div
        className={
          `${styles['skills-section']}` +
          (addStyleClass ? ` ${styles[`skills-section-${skillType}`]}` : '')
        }
      >
        <h3 {...skillTitleScrollFade(skillType)}>{text}</h3>
        <ScrollAnimationTrigger anchor={skillType} />
        <div className={styles['skill-list']}>{skillList(skills, skillType)}</div>
      </div>
    );
  }

  const otherSkills = (
    <div className={styles['other-skills']}>
      <h3 {...skillTitleScrollFade('others', 400)}>
        Alongside a selection of popular industry standard tools
      </h3>
      <ScrollAnimationTrigger anchor="others" />
      <div className={styles['other-list']}>{createToolsList(devTools, 'others')}</div>
    </div>
  );

  return (
    <div className={styles['home-page']}>
      {banner}
      <div className={styles['content-wave-divider']}></div>
      {skillSection(
        'languages',
        `I've developed software in a variety of different programming languages`,
        devLanguages,
        true
      )}
      <div className={styles['content-wave-divider-end']}></div>
      {skillSection(
        'frameworks',
        `I've worked with a variety of development frameworks`,
        devFrameworks
      )}
      <div></div>
      {otherSkills}
    </div>
  );
}

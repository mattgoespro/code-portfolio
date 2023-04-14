import styles from './HomePage.module.scss';
import Tooltip from '@mui/material/Tooltip';
import { devFrameworks, devLanguages, devTools, SoftwareEngineeringSkills } from './HomePage.model';
import { scrollAnimateIn } from '@shared/utility/AnimateOnScroll';
import { setStylesheetVariables } from '@shared/utility/Utility';

type TechnicalSkillType = 'languages' | 'frameworks' | 'other';

export function HomePage() {
  const SKILL_TITLE_ANIMATE_DELAY = 100;
  const SKILL_TITLE_ANIMATE_DURATION = 400;
  const SKILL_CONTENT_ANIMATE_LAG = 400;
  const SKILL_CONTENT_ANIMATE_SPEED = 100;

  function skillTitleScrollFade(anchor: string, scrollOffset?: number) {
    return scrollAnimateIn({
      anchor,
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
    return list.map((skill, index) => {
      const attrs = {};

      if (skill.experienced) {
        attrs['experienced'] = `${skill.yearsExperience} yrs`;
        attrs['style'] = setStylesheetVariables({
          name: 'skill-box-border-color',
          value: styles['border-color-experienced']
        });
      }

      return (
        <div
          key={skill.resourceIdentifier}
          className={styles['skill-list-item']}
          {...attrs}
          {...skillListItemScrollFade(index + 1, scrollTrigger)}
        >
          <div className={styles['skill-brand-icon']}>
            <img
              src={`/assets/images/logos/${skill.resourceIdentifier}.png`}
              alt={skill.resourceIdentifier}
            />
          </div>
          <div
            className={styles.skill}
            style={{ color: styles[`color-${skill.resourceIdentifier}`] }}
          >
            <div className={styles['skill-name']}>{skill.name}</div>
            <div
              className={styles['skill-name-underline']}
              style={setStylesheetVariables({
                name: 'skill-name-underline-color',
                value: styles[`color-${skill.resourceIdentifier}`]
              })}
            ></div>
          </div>
        </div>
      );
    });
  }

  function othersList(list: SoftwareEngineeringSkills[], anchorId: string) {
    return list.map((item, index) => {
      return (
        <div key={item.resourceIdentifier}>
          <Tooltip title={item.name}>
            <img
              className={styles['skill-tool-img']}
              src={`/assets/images/logos/${item.resourceIdentifier}.png`}
              alt="Git"
              {...skillListItemScrollFade(index, anchorId)}
            />
          </Tooltip>
        </div>
      );
    });
  }

  const introduction = (
    <div className={styles.introduction}>
      <div className={styles['introduction-text']}>
        <h1>Hey</h1>
        <h2>I'm Matt, and this is my little corner of the web.</h2>
        <h3>
          Online, I go by the alias <span className={styles.alias}>hoppingmode</span>.
        </h3>
      </div>
      <img className={styles.logo} src="/assets/images/hoppingmode-logo.png" />
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
        id={skillType}
        className={
          `${styles['skill-section']}` + (addStyleClass ? ` ${styles[`${skillType}`]}` : '')
        }
      >
        <h3 className={styles['section-text']} {...skillTitleScrollFade(skillType)}>
          {text}
        </h3>
        <div className={styles['skill-list']}>{skillList(skills, skillType)}</div>
      </div>
    );
  }

  return (
    <div className={styles['home-page']}>
      <div className={styles['page-wave-top']}></div>
      {introduction}
      <div className={styles['languages-wave-top']}></div>
      {skillSection(
        'languages',
        `I have professional and personal experience working with a variety of programming languages`,
        devLanguages,
        true
      )}
      <div className={styles['languages-wave-bottom']}></div>
      {skillSection(
        'frameworks',
        `Across a multitude of software development frameworks`,
        devFrameworks,
        true
      )}
      <div className={styles['others-section']}>
        <div className={styles['others-text']}>
          <h3 id="others" {...skillTitleScrollFade('others', 0)}>
            Alongside a selection of industry standard tools
          </h3>
        </div>
        <div className={styles['others-list']}>{othersList(devTools, 'others')}</div>
      </div>
    </div>
  );
}

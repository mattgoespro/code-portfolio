import { createAnimateOnScrollAttribs } from "@Shared/Utility/Animation";
import { Skill } from "./Skill/Skill";
import { SoftwareSkill, SoftwareSkillCategory } from "./Skill/Skill.model";
import styles from "./SkillSection.module.scss";
import { Tooltip } from "@Shared/Components/Tooltip/Tooltip";

const HEADER_ANIMATE_DELAY = 100;
const HEADER_ANIMATE_DURATION = 250;
const HEADER_ANIMATE_SCROLL_OFFSET = 350;

const SKILL_ANIMATE_DELAY = 250;
const SKILL_ANIMATE_DURATION = 150;
const SKILL_ANIMATE_SCROLL_OFFSET = 350;

export function createHeaderAnimateAttrs(anchor: string, scrollOffset: number) {
  return createAnimateOnScrollAttribs({
    animation: "fade-left",
    easing: "ease-out-quad",
    animationDuration: HEADER_ANIMATE_DURATION,
    animationDelay: HEADER_ANIMATE_DELAY,
    anchor,
    scrollOffset,
    once: false
  });
}

export function createSkillAnimateAttrs(itemIndex: number, anchor: string, scrollOffset: number) {
  return createAnimateOnScrollAttribs({
    animation: "fade-left",
    easing: "ease-out-quad",
    animationDuration: SKILL_ANIMATE_DURATION,
    animationDelay: SKILL_ANIMATE_DELAY + SKILL_ANIMATE_DELAY + SKILL_ANIMATE_DURATION * itemIndex,
    anchor,
    scrollOffset,
    once: false
  });
}

interface SkillSectionProps {
  header: string;
  skillType: SoftwareSkillCategory;
  softwareSkills: SoftwareSkill[];
  style?: {
    backgroundColor?: string;
    headerColor?: string;
  };
}

export function SkillSection(props: SkillSectionProps) {
  function createSkillComponent(skill: SoftwareSkill, index: number) {
    return (
      <Skill
        key={skill.name}
        softwareSkill={skill}
        animationProps={createSkillAnimateAttrs(
          index,
          props.skillType,
          SKILL_ANIMATE_SCROLL_OFFSET
        )}
      ></Skill>
    );
  }

  return (
    <div
      id={props.skillType}
      className={styles.wrapper}
      style={{ backgroundColor: props.style.backgroundColor }}
    >
      <h3
        className={styles.header}
        style={{ color: props.style.headerColor }}
        {...createHeaderAnimateAttrs(props.skillType, HEADER_ANIMATE_SCROLL_OFFSET)}
      >
        {props.header}
      </h3>
      <div className={styles.list}>
        {props.softwareSkills.map((skill, index) => {
          const skillComponent = createSkillComponent(skill, index);
          return skill.experienced ? (
            <Tooltip key={index} textHint={`${skill.yearsExperience} years experience`}>
              {skillComponent}
            </Tooltip>
          ) : (
            skillComponent
          );
        })}
      </div>
    </div>
  );
}

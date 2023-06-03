import { createAnimateOnScrollAttribs, generateListFadeLeftParams } from "@Utility/Animation";
import { Skill } from "./Skill/Skill";
import { SoftwareSkill, SoftwareSkillType } from "./Skill/Skill.model";
import styles from "./SkillSection.module.scss";
import { Tooltip } from "@Components/Tooltip/Tooltip";

const HEADER_ANIMATE_DELAY = 100;
const HEADER_ANIMATE_DURATION = 250;
const HEADER_ANIMATE_SCROLL_OFFSET = 350;

const SKILL_ANIMATE_DELAY = 250;
const SKILL_ANIMATE_DURATION = 150;
const SKILL_ANIMATE_LAG = 300;
const SKILL_ANIMATE_SPEED_FACTOR = 100;
const SKILL_ANIMATE_SCROLL_OFFSET = 350;

export function createHeaderAnimateAttrs(anchor: string, scrollOffset: number) {
  return createAnimateOnScrollAttribs({
    animation: "fade-left",
    animationDuration: HEADER_ANIMATE_DURATION,
    animationDelay: HEADER_ANIMATE_DELAY,
    anchor,
    scrollOffset,
    once: false
  });
}

export function createSkillAnimateAttrs(index: number, anchor: string, scrollOffset: number) {
  return createAnimateOnScrollAttribs({
    animation: "fade-left",
    ...generateListFadeLeftParams(
      SKILL_ANIMATE_DURATION,
      SKILL_ANIMATE_DELAY,
      SKILL_ANIMATE_LAG,
      SKILL_ANIMATE_SPEED_FACTOR,
      index
    ),
    anchor,
    scrollOffset,
    once: false
  });
}

interface SkillSectionProps {
  header: string;
  skillsType: SoftwareSkillType;
  softwareSkills: SoftwareSkill[];
  style?: {
    backgroundColor?: string;
    headerColor?: string;
  };
}

export function SkillSection(props: SkillSectionProps) {
  function createSkillComponent(skill: SoftwareSkill, type: SoftwareSkillType, index: number) {
    return (
      <Skill
        key={skill.name}
        softwareSkill={skill}
        titled={type != "others"}
        animationProps={createSkillAnimateAttrs(
          index,
          props.skillsType,
          SKILL_ANIMATE_SCROLL_OFFSET
        )}
      ></Skill>
    );
  }

  return (
    <div
      id={props.skillsType}
      className={styles.wrapper}
      style={{ backgroundColor: props.style.backgroundColor }}
    >
      <h3
        className={styles.header}
        style={{ color: props.style.headerColor }}
        {...createHeaderAnimateAttrs(props.skillsType, HEADER_ANIMATE_SCROLL_OFFSET)}
      >
        {props.header}
      </h3>
      <div className={styles.list}>
        {props.softwareSkills.map((skill, index) => {
          const skillComponent = createSkillComponent(skill, props.skillsType, index);
          if (props.skillsType === "others") {
            return (
              <Tooltip key={index} textHint={skill.name} style={{ flexShrink: "1" }}>
                {skillComponent}
              </Tooltip>
            );
          }

          return skill.experienced ? (
            <Tooltip
              key={index}
              textHint={`${skill.yearsExperience} years experience`}
              style={{ display: "flex", flexBasis: "5rem" }}
            >
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

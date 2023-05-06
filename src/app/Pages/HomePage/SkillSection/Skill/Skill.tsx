import { setStylesheetVariables } from "@Shared/Utility/Utility";
import { SoftwareSkill } from "./Skill.model";
import styles from "./Skill.module.scss";

interface SkillProps {
  softwareSkill: SoftwareSkill;
}

export function Skill(props: SkillProps) {
  const expTooltipAttr = {};

  if (props.softwareSkill.experienced) {
    expTooltipAttr["experience"] = `${props.softwareSkill.yearsExperience} yrs`;
  }

  return (
    <div
      key={props.softwareSkill.resourceIdentifier}
      className={styles.wrapper}
      style={{
        borderColor: props.softwareSkill.experienced ? styles["experience-border-color"] : null
      }}
      {...expTooltipAttr}
    >
      <div className={styles["brand-icon"]}>
        <img
          src={`/assets/images/logos/${props.softwareSkill.resourceIdentifier}.png`}
          alt={props.softwareSkill.resourceIdentifier}
        />
      </div>
      <div
        className={styles.skill}
        style={{ color: styles[`color-${props.softwareSkill.resourceIdentifier}`] }}
      >
        <div className={styles.name} style={{ color: props.softwareSkill.styles.nameColor }}>
          {props.softwareSkill.name}
        </div>
        <div
          className={styles["name-underline"]}
          style={setStylesheetVariables({
            name: "name-underline-color",
            value: props.softwareSkill.styles.nameColor
          })}
        ></div>
      </div>
    </div>
  );
}

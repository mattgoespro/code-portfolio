import { SoftwareSkill } from "./Skill.model";
import styles from "./Skill.module.scss";

interface SkillProps {
  softwareSkill: SoftwareSkill;
  animationProps: { [key: string]: unknown };
}

export function Skill(props: SkillProps) {
  return (
    <div
      key={props.softwareSkill.resourceIdentifier}
      className={styles.wrapper}
      style={{
        borderColor: props.softwareSkill.experienced
          ? styles["experience-border-color"]
          : styles["regular-border-color"]
      }}
      {...props.animationProps}
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
          style={
            {
              "--name-underline-color": props.softwareSkill.styles.nameColor
            } as unknown
          }
        ></div>
      </div>
    </div>
  );
}

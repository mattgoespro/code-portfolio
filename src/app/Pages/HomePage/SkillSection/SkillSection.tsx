import { Skill } from "./Skill/Skill";
import { SoftwareSkill, SoftwareSkillCategory } from "./Skill/Skill.model";
import styles from "./SkillSection.module.scss";

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
  return (
    <div
      id={props.skillType}
      className={styles.wrapper}
      style={{ backgroundColor: props.style.backgroundColor }}
    >
      <h3 className={styles.header} style={{ color: props.style.headerColor }}>
        {props.header}
      </h3>
      <div className={styles.list}>
        {props.softwareSkills.map((skill) => {
          return <Skill key={skill.name} softwareSkill={skill}></Skill>;
        })}
      </div>
    </div>
  );
}

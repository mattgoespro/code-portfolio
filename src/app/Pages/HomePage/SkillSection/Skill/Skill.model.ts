export type SoftwareSkillType = "languages" | "frameworks" | "others";

/**
 * @param resourceIdentifier The identifier for a stylesheet variable
 * or asset name.
 */
export interface SoftwareSkill {
  resourceIdentifier: string;
  name: string;
  styles?: {
    nameColor: string;
  };
  experienced?: boolean;
  yearsExperience?: number;
}

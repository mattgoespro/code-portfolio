/**
 * @param resourceIdentifier The identifier for a stylesheet variable or image
 * asset name.
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

export type SoftwareSkillCategory = "languages" | "frameworks" | "other";

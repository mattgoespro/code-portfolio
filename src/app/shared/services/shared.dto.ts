export interface ApiRepositoryResponseDTO {
  repositoryName: string;
  friendlyName: string;
  description: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  link: string;
}

export interface ApiRepositoryReadmeResponseDTO {
  content: string;
}

export interface ApiRepositorySkillsResponseDTO {
  skills: string[];
}

export type ProjectLanguageComposition = { [key: string]: number };

export interface ApiRepositoryLanguagesResponseDTO {
  languages: ProjectLanguageComposition;
}

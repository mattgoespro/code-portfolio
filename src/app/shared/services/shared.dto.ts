export interface ApiRepositoryResponseDTO {
  name: string;
  pinned: boolean;
  description?: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  link: string;
}

export interface ApiRepositoryReadmeResponseDTO {
  content: string;
}

export interface ApiRepositorySkillsResponseDTO {
  name: string;
  skills: string[];
}

export type ProjectLanguageComposition = { [key: string]: number };

export interface ApiRepositoryLanguagesResponseDTO {
  languages: ProjectLanguageComposition;
}

export interface ApiRepositoryResponseDTO {
  repositoryName: string;
  friendlyName: string;
  description: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  link: string;
}

export enum ApiHttpErrorStatus {
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 504
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

type HttpClientAction = 'REQUESTED' | 'RECEIVED' | 'FAILED';

export interface HttpRequestState<T> {
  loading: boolean;
  data: T;
  error?: boolean;
}

export interface HttpClientEvent<T> {
  action: HttpClientAction;
  data?: T;
}

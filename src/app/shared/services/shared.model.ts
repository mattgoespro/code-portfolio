export interface AxiosError {
  response: {
    status: number;
  };
}

export interface ApiErrorResponse {
  status: number;
  message: string;
}

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

export type ProjectLanguageComposition = { [key: string]: number };

export interface ApiRepositoryLanguagesResponseDTO {
  languages: ProjectLanguageComposition;
}

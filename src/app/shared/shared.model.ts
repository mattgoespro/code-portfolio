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

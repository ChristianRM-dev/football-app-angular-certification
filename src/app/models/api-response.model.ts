export interface ApiResponseWrapper<T> {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: T;
}

export interface Parameters {
  [key: string]: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface ApiResponseWrapper<T> {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: T;
}

 interface Parameters {
  [key: string]: string;
}

 interface Paging {
  current: number;
  total: number;
}

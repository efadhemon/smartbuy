export interface IBaseFilter {
  searchTerm?: string;
  name?: string;
  page?: number;
  take?: number;
}

export interface IBaseResponse {
  message?: string;
  payload?: any;
  success?: boolean;
}
export interface IBaseFilterPayload {
  message?: string;
  payload?: any;
  success?: boolean;
  page?: number;
  take?: number;
  total?: number;
}

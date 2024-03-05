import { ID } from '../types/id.type';

export interface Page<T> {
  entities: T[];
  pageIndex: number;
  total: number;
  pageSize: number;
  searchValue?: string;
  isLoading: boolean;
}

export interface Hero {
  id: ID;
  name: string;
}

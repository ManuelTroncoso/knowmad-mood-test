import { EntityState } from '@ngrx/entity';
import { Hero } from '../heroes/models/hero.model';

export interface HeroesState extends EntityState<Hero> {
  pageIndex: number;
  total: number;
  pageSize: number;
  searchValue?: string;
  isLoading: boolean;
}

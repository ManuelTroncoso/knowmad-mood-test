import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Hero } from '../heroes/models/hero.model';
import {
  HeroesIsLoading,
  HeroesSearched,
  heroesDeleted,
  heroesLoaded,
  heroesUpserted,
  pageChanged,
  resetHeroes,
} from './heroes.actions';
import { HeroesState } from './heroes.state';

export const HEROES_FEATURE_KEY = 'Heroes';
export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();
export const initialState: HeroesState = adapter.getInitialState({
  pageIndex: 0,
  total: 0,
  pageSize: 0,
  isLoading: true,
});
export const HeroesReducer = createReducer(
  initialState,

  on(resetHeroes, () => ({ ...initialState })),

  on(heroesLoaded, (state, { heroes }) => {
    return {
      ...state,
      ...adapter.setAll(heroes.entities, state),
      pageIndex: heroes.pageIndex,
      pageSize: heroes.pageSize,
      total: heroes.total,
      searchValue: state.searchValue,
      isLoading: false,
    };
  }),

  on(heroesDeleted, (state, { heroes }) => ({
    ...state,
    ...adapter.setAll(heroes.entities, state),
    pageIndex: heroes.pageIndex,
    pageSize: heroes.pageSize,
    total: heroes.total,
    isLoading: false,
  })),

  on(pageChanged, (state, { heroes }) => ({
    ...state,
    ...adapter.setAll(heroes.entities, state),
    pageIndex: heroes.pageIndex,
    pageSize: heroes.pageSize,
    total: heroes.total,
    isLoading: false,
  })),

  on(heroesUpserted, (state, { heroes }) => ({
    ...state,
    ...adapter.setAll(heroes.entities, state),
    pageIndex: heroes.pageIndex,
    pageSize: heroes.pageSize,
    total: heroes.total,
    isLoading: false,
  })),

  on(HeroesSearched, (state, { heroes }) => {
    return {
      ...state,
      ...adapter.setAll(heroes.entities, state),
      pageIndex: heroes.pageIndex,
      pageSize: heroes.pageSize,
      total: heroes.total,
      searchValue: heroes.searchValue,
      isLoading: false,
    };
  }),

  on(HeroesIsLoading, (state) => ({
    ...state,
    isLoading: true,
  }))
);

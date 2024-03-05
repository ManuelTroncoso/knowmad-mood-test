import { PageEvent } from '@angular/material/paginator';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HEROES_FEATURE_KEY, adapter } from './heroes.reducer';
import { HeroesState } from './heroes.state';

export const heroesStateSelector =
  createFeatureSelector<HeroesState>(HEROES_FEATURE_KEY);

const heroesSelectors = adapter.getSelectors();

export const heroesSelector = createSelector(
  heroesStateSelector,
  (heroesState) => heroesSelectors.selectAll(heroesState)
);

export const isLoadingSelector = createSelector(
  heroesStateSelector,
  (heroesState) => heroesState.isLoading
);

export const pageSelectos = createSelector(
  heroesStateSelector,
  (heroeState) => {
    return {
      pageIndex: heroeState.pageIndex,
      pageSize: heroeState.pageSize,
      length: heroeState.total,
    } as PageEvent;
  }
);

export const selectHeroById = (heroId: number) =>
  createSelector(heroesSelector, (heroes) =>
    heroes.find((hero) => hero.id === heroId)
  );

import { PageEvent } from '@angular/material/paginator';
import { createAction, props } from '@ngrx/store';
import { Hero, Page } from '../heroes/models/hero.model';
import { ID } from '../heroes/types/id.type';

export const resetHeroes = createAction('[Heroes] Reset list heroes');

export const initialLoadHeroes = createAction(
  '[Heroes] Initializacion list Heroes'
);

export const loadHeroes = createAction('[Heroes] Load list Heroes');

export const heroesLoaded = createAction(
  '[Heroes] List Heroes loaded',
  props<{ heroes: Page<Hero> }>()
);

export const deleteHeroes = createAction(
  '[Heroes] Delete list Heroes',
  props<{ id: ID }>()
);

export const heroesDeleted = createAction(
  '[Heroes] List Heroes deleted',
  props<{ heroes: Page<Hero> }>()
);

export const updateHeroes = createAction(
  '[Heroes] update list Heroes',
  props<{ hero: Hero }>()
);

export const createHero = createAction(
  '[Heroes] crate new Hero',
  props<{ name: string }>()
);

export const heroesUpserted = createAction(
  '[Heroes] List Heroes Upserted',
  props<{ heroes: Page<Hero> }>()
);

export const changePage = createAction(
  '[Heroes] List Heroes change page',
  props<{ pageEvent: PageEvent }>()
);

export const pageChanged = createAction(
  '[Heroes] List Heroes page changed',
  props<{ heroes: Page<Hero> }>()
);

export const searchHeroes = createAction(
  '[Heroes] Search Heroes by name',
  props<{ name: string }>()
);

export const HeroesSearched = createAction(
  '[Heroes] Heroes was search by name',
  props<{ heroes: Page<Hero> }>()
);

export const HeroesIsLoading = createAction('[Heroes] Heroes is loading');

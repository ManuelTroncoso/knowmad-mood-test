import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { Hero, Page } from '../heroes/models/hero.model';
import { HeroesService } from '../heroes/services/heroes.service';
import {
  HeroesSearched,
  changePage,
  createHero,
  deleteHeroes,
  heroesDeleted,
  heroesLoaded,
  heroesUpserted,
  loadHeroes,
  pageChanged,
  searchHeroes,
  updateHeroes,
} from './heroes.actions';
import { heroesStateSelector } from './heroes.selectors';

@Injectable()
export class HeroesEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroesService,
    private store: Store,
    private router: Router
  ) {}

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHeroes),
      withLatestFrom(this.store.select(heroesStateSelector)),
      switchMap(([_, state]) =>
        this.heroService.getHeroes('', state.pageIndex, state.pageSize).pipe(
          switchMap((heroes: Page<Hero>) => of(heroesLoaded({ heroes }))),
          catchError((err) => {
            console.log(err);
            return EMPTY;
          })
        )
      )
    )
  );

  updateHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateHeroes),
      withLatestFrom(this.store.select(heroesStateSelector)),
      switchMap(([action, state]) =>
        this.heroService
          .updateHero(
            action.hero,
            state.searchValue ?? '',
            state.pageIndex,
            state.pageSize
          )
          .pipe(
            switchMap((heroes: Page<Hero>) => of(heroesUpserted({ heroes }))),
            catchError((err) => {
              console.log(err);
              return EMPTY;
            })
          )
      )
    )
  );

  createHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createHero),
      withLatestFrom(this.store.select(heroesStateSelector)),
      switchMap(([action, state]) =>
        this.heroService
          .createHero(
            action.name,
            state.searchValue ?? '',
            state.pageIndex,
            state.pageSize
          )
          .pipe(
            switchMap((heroes: Page<Hero>) => of(heroesUpserted({ heroes }))),
            catchError((err) => {
              console.log(err);
              return EMPTY;
            })
          )
      )
    )
  );

  searchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchHeroes),
      withLatestFrom(this.store.select(heroesStateSelector)),
      filter(([action, state]) => {
        console.log(action.name, state.searchValue);
        return action.name !== state.searchValue;
      }),
      switchMap(([action, state]) =>
        this.heroService
          .getHeroes(action.name, state.pageIndex, state.pageSize)
          .pipe(
            switchMap((heroes: Page<Hero>) => {
              this.router.navigate(['/heroes'], {
                queryParams: { search: action.name },
              });
              return of(HeroesSearched({ heroes }));
            }),
            catchError((err) => {
              console.log(err);
              return EMPTY;
            })
          )
      )
    )
  );

  deleteHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHeroes),
      withLatestFrom(this.store.select(heroesStateSelector)),
      switchMap(([action, state]) =>
        this.heroService
          .deleteHero(
            action.id,
            state.searchValue ?? '',
            state.pageIndex,
            state.pageSize
          )
          .pipe(
            switchMap((heroes: Page<Hero>) => of(heroesDeleted({ heroes }))),
            catchError((err) => {
              console.log(err);
              return EMPTY;
            })
          )
      )
    )
  );

  changePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changePage),
      withLatestFrom(this.store.select(heroesStateSelector)),
      switchMap(([action, state]) =>
        this.heroService
          .getHeroes(
            state.searchValue ?? '',
            action.pageEvent.pageIndex,
            action.pageEvent.pageSize
          )
          .pipe(
            switchMap((heroes: Page<Hero>) => of(pageChanged({ heroes }))),
            catchError((err) => {
              console.log(err);
              return EMPTY;
            })
          )
      )
    )
  );
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PaginatorSmartModule } from 'src/app/components/paginator/paginator-smart/paginator-smart.module';
import { SearchbarSmartModule } from 'src/app/components/searchbar/searchbar-smart/searchbar-smart.module';
import { HeroesEffects } from 'src/app/components/store/heroes.effects';
import {
  HEROES_FEATURE_KEY,
  HeroesReducer,
} from 'src/app/components/store/heroes.reducer';
import { HeroesListDumbModule } from '../heroes-list-dumb/heroes-list-dumb.module';
import { HeroesListSmartComponent } from './heroes-list-smart.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesListSmartComponent,
  },
];

@NgModule({
  declarations: [HeroesListSmartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(HEROES_FEATURE_KEY, HeroesReducer),
    EffectsModule.forFeature([HeroesEffects]),
    HeroesListDumbModule,
    PaginatorSmartModule,
    SearchbarSmartModule,
  ],
  exports: [HeroesListSmartComponent],
})
export class HeroesListSmartModule {}

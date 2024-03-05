import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { HeroesCreateUpdDumbModule } from '../heroes-create-upd-dumb/heroes-create-upd-dumb.module';
import { HeroesCreateUpdSmartComponent } from './heroes-create-upd-smart.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesCreateUpdSmartComponent,
  },
];

@NgModule({
  declarations: [HeroesCreateUpdSmartComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeroesCreateUpdDumbModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  exports: [HeroesCreateUpdSmartComponent],
})
export class HeroesCreateUpdSmartModule {}

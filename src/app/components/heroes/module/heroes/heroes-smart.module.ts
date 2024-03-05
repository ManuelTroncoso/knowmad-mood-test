import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesCreateUpdSmartModule } from '../heroes-create-upd/heroes-create-upd-smart/heroes-create-upd-smart.module';
import { HeroesListSmartModule } from '../heroes-list/heroes-list-smart/heroes-list-smart.module';
import { HeroesSmartComponent } from './heroes-smart.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesSmartComponent,
  },
];

@NgModule({
  declarations: [HeroesSmartComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    HeroesCreateUpdSmartModule,
    HeroesListSmartModule,
  ],
  exports: [HeroesSmartComponent],
})
export class HeroesSmartModule {}

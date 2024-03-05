import { Routes } from '@angular/router';

export const HEROES_ROUTING: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../heroes-list/heroes-list-smart/heroes-list-smart.module').then(
        (m) => m.HeroesListSmartModule
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import(
        '../heroes-create-upd/heroes-create-upd-smart/heroes-create-upd-smart.module'
      ).then((m) => m.HeroesCreateUpdSmartModule),
    data: { mode: 'edit' },
  },
  {
    path: 'new',
    loadChildren: () =>
      import(
        '../heroes-create-upd/heroes-create-upd-smart/heroes-create-upd-smart.module'
      ).then((m) => m.HeroesCreateUpdSmartModule),
    data: { mode: 'create' },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

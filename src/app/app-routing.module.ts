import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HEROES_ROUTING } from './components/heroes/module/heroes/heroes-routing.module';
import { HeroesSmartComponent } from './components/heroes/module/heroes/heroes-smart.component';

const routes: Routes = [
  {
    path: 'explain',
    loadComponent: () =>
      import('./components/explain-project/explain-project.component').then(
        (m) => m.ExplainProjectComponent
      ),
  },
  {
    path: 'heroes',
    component: HeroesSmartComponent,
    children: [...HEROES_ROUTING],
  },
  { path: '**', redirectTo: '/explain', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

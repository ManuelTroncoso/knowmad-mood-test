import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteHeroes } from 'src/app/components/store/heroes.actions';
import {
  heroesSelector,
  isLoadingSelector,
} from 'src/app/components/store/heroes.selectors';
import { ID } from '../../../types/id.type';

@Component({
  selector: 'app-heroes-smart',
  templateUrl: './heroes-list-smart.component.html',
  styleUrls: ['./heroes-list-smart.component.scss'],
})
export class HeroesListSmartComponent {
  heroes$ = this.store.select(heroesSelector);
  isLoading$ = this.store.select(isLoadingSelector);

  constructor(private store: Store, private router: Router) {}

  deleteHero(id: ID) {
    this.store.dispatch(deleteHeroes({ id }));
  }

  editHero(id: ID) {
    this.router.navigate(['/heroes/edit', id]);
  }

  createHero() {
    this.router.navigate(['/heroes/new']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadHeroes } from './components/store/heroes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'heroes';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadHeroes());
  }
}

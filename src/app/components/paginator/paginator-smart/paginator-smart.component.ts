import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { changePage } from '../../store/heroes.actions';
import { pageSelectos } from '../../store/heroes.selectors';

@Component({
  selector: 'app-paginator-smart.',
  templateUrl: './paginator-smart.component.html',
  styleUrls: ['./paginator-smart.component.scss'],
})
export class PaginatorSmartComponent {
  page$ = this.store.select(pageSelectos);

  constructor(private store: Store) {}

  change(pageEvent: PageEvent) {
    this.store.dispatch(changePage({ pageEvent }));
  }
}

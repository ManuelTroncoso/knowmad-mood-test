import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchHeroes } from '../../store/heroes.actions';

@Component({
  selector: 'app-searchbar-smart',
  templateUrl: './searchbar-smart.component.html',
  styleUrls: ['./searchbar-smart.component.scss'],
})
export class SearchbarSmartComponent implements OnInit {
  valueUrl: string = '';

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const searchTerm = params['search'];
      if (searchTerm) {
        this.valueUrl = searchTerm;
      }
    });
  }

  changeValue(name: string) {
    this.store.dispatch(searchHeroes({ name }));
  }
}

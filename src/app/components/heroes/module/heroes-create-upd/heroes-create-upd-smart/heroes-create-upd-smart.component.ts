import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  createHero,
  updateHeroes,
} from 'src/app/components/store/heroes.actions';
import { selectHeroById } from 'src/app/components/store/heroes.selectors';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-heroes-create-upd-smart',
  templateUrl: './heroes-create-upd-smart.component.html',
  styleUrls: ['./heroes-create-upd-smart.component.scss'],
})
export class HeroesCreateUpdSmartComponent implements OnInit {
  hero$?: Observable<Hero | undefined>;
  id!: number;
  mode: 'create' | 'edit' = 'edit';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public store: Store,
    public _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      switchMap((id) => {
        this.id = Number(id) ?? undefined;
        return this.store.select(selectHeroById(Number(id)));
      })
    );

    this.route.data.subscribe((data: any) => {
      this.mode = data.mode;
    });
  }

  onSubmitForm(name: string): void {
    this.store.dispatch(
      this.mode == 'create'
        ? createHero({ name })
        : updateHeroes({ hero: { id: this.id, name: name } })
    );
    this._snackBar.open(
      (this.mode == 'create'
        ? 'Se ha creado el heroe "'
        : 'Se ha editado el heroe ') +
        name +
        '"',
      'OK'
    );
    this.router.navigate(['/heroes']);
  }
}

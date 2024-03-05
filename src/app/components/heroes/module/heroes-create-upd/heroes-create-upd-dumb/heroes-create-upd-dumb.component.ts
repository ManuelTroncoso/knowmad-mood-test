import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-heroes-create-upd-dumb',
  templateUrl: './heroes-create-upd-dumb.component.html',
  styleUrls: ['./heroes-create-upd-dumb.component.scss'],
})
export class HeroesCreateUpdDumbComponent implements OnChanges {
  @Input() hero?: Hero;
  @Output() submitForm = new EventEmitter<string>();

  heroForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });

  ngOnChanges({ hero }: SimpleChanges): void {
    if (hero && hero.currentValue) {
      this.heroForm.patchValue({
        name: this.hero?.name,
      });
    }
  }

  onSubmit(): void {
    const name = this.heroForm.get('name')?.value;
    this.submitForm.emit(name ?? '');
  }
}

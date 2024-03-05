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

  get nameControl() {
    return this.heroForm.get('name');
  }

  ngOnChanges({ heroe }: SimpleChanges): void {
    if (heroe && heroe.currentValue) {
      this.heroForm.patchValue({
        name: this.hero?.name ?? '',
      });
    }
  }

  onSubmit(): void {
    const name = this.nameControl?.value ?? '';
    this.submitForm.emit(name);
  }
}

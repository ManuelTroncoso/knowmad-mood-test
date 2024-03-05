import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpperCaseDirectiveModule } from 'src/app/directives/upperCase.directive.module';
import { HeroesCreateUpdDumbComponent } from './heroes-create-upd-dumb.component';

@NgModule({
  declarations: [HeroesCreateUpdDumbComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    UpperCaseDirectiveModule,
  ],
  exports: [HeroesCreateUpdDumbComponent],
})
export class HeroesCreateUpdDumbModule {}

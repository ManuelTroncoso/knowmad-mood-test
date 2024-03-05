import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchbarDumbComponent } from './searchbar-dumb.component';

@NgModule({
  declarations: [SearchbarDumbComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [SearchbarDumbComponent],
})
export class SearchbarDumbModule {}

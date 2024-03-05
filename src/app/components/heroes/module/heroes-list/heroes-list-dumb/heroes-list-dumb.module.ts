import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner';
import { CapitalizerFirstLetterModule } from 'src/app/pipes/capitalizerFirstLetter.module';
import { HeroesListDumbComponent } from './heroes-list-dumb.component';

@NgModule({
  declarations: [HeroesListDumbComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    CapitalizerFirstLetterModule,
    LoadingSpinnerComponent,
  ],
  exports: [HeroesListDumbComponent],
})
export class HeroesListDumbModule {}

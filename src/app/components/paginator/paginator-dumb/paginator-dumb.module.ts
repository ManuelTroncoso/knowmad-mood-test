import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorDumbComponent } from './paginator-dumb.component';

@NgModule({
  declarations: [PaginatorDumbComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [PaginatorDumbComponent],
})
export class PaginatorDumbModule {}

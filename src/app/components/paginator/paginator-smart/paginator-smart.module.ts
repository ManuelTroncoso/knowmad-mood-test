import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorDumbModule } from '../paginator-dumb/paginator-dumb.module';
import { PaginatorSmartComponent } from './paginator-smart.component';

@NgModule({
  declarations: [PaginatorSmartComponent],
  imports: [CommonModule, MatPaginatorModule, PaginatorDumbModule],
  exports: [PaginatorSmartComponent],
})
export class PaginatorSmartModule {}

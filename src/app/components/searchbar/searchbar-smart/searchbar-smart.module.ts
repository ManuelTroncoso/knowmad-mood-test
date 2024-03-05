import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchbarDumbModule } from '../searchbar-dumb/searchbar-dumb.module';
import { SearchbarSmartComponent } from './searchbar-smart.component';

@NgModule({
  declarations: [SearchbarSmartComponent],
  imports: [CommonModule, MatPaginatorModule, SearchbarDumbModule],
  exports: [SearchbarSmartComponent],
})
export class SearchbarSmartModule {}

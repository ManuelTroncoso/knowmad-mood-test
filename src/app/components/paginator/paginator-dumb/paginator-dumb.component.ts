import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator-dumb.',
  templateUrl: './paginator-dumb.component.html',
  styleUrls: ['./paginator-dumb.component.scss'],
})
export class PaginatorDumbComponent {
  @Input() page!: PageEvent | null;

  @Output() onChange = new EventEmitter<PageEvent>();

  handlePageEvent($event: PageEvent) {
    this.onChange.emit($event);
  }
}

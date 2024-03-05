import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbar-dumb.',
  templateUrl: './searchbar-dumb.component.html',
  styleUrls: ['./searchbar-dumb.component.scss'],
})
export class SearchbarDumbComponent implements OnInit {
  @Output() onChange = new EventEmitter<string>();
  @Input() value = '';

  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value) => {
        this.onChange.emit(value);
      });
  }

  ngOnInit(): void {
    this.searchControl.setValue(this.value);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DialogConfirmDumbComponent } from 'src/app/components/dialog-confirm/dialog-confirm-dumb/dialog-confirm-dumb.component';
import { Hero } from '../../../models/hero.model';
import { ID } from '../../../types/id.type';

@Component({
  selector: 'app-heroes-dumb',
  templateUrl: './heroes-list-dumb.component.html',
  styleUrls: ['./heroes-list-dumb.component.scss'],
})
export class HeroesListDumbComponent {
  @Input() heroes!: Hero[];
  @Input() isLoading!: boolean;

  @Output() onDelete = new EventEmitter<ID>();
  @Output() onEdit = new EventEmitter<ID>();
  @Output() onCreate = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  deleteHero(id: ID) {
    const dialogRef = this.dialog.open(DialogConfirmDumbComponent, {
      width: '400px',
      data: { message: 'Are you sure?', title: 'ATTENTION' },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) this.onDelete.emit(id);
      });
  }

  editHero(id: ID) {
    this.onEdit.emit(id);
  }

  cancelEdit(id: ID) {
    this.onEdit.emit(id);
  }

  createHero() {
    this.onCreate.emit();
  }
}

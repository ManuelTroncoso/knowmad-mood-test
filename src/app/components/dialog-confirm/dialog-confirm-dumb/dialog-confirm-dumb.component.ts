import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm-dumb.component.html',
  styleUrls: ['./dialog-confirm-dumb.component.scss'],
})
export class DialogConfirmDumbComponent {
  @Output() onAccept = new EventEmitter<boolean>();
  @Output() onDecline = new EventEmitter<boolean>();

  nameControl = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmDumbComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; title: string; isCreate: boolean }
  ) {}

  accept() {
    this.dialogRef.close(true);
  }

  decline() {
    this.dialogRef.close(false);
  }
}

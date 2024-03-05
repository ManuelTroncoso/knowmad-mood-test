import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <mat-progress-spinner
      mode="indeterminate"
      diameter="48"
      strokeWidth="4"
    ></mat-progress-spinner>
  `,
  styles: [``],
})
export class LoadingSpinnerComponent {}

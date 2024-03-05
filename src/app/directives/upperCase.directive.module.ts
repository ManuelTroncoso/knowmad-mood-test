import { NgModule } from '@angular/core';
import { UpperCaseDirective } from './upperCase.directive';

@NgModule({
  declarations: [UpperCaseDirective],
  exports: [UpperCaseDirective],
})
export class UpperCaseDirectiveModule {}

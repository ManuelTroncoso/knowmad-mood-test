import { NgModule } from '@angular/core';
import { CapitalizeFirstLetterPipe } from './capitalizerFirstLetter.pipe';

@NgModule({
  declarations: [CapitalizeFirstLetterPipe],
  exports: [CapitalizeFirstLetterPipe],
})
export class CapitalizerFirstLetterModule {}

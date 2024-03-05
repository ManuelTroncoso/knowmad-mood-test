import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUpperCase]',
})
export class UpperCaseDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.ngControl.control?.setValue(inputValue, { emitEvent: false });
  }
}

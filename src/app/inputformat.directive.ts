import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {
  @Input('appInputformat') appInputformat;
  constructor(private el:ElementRef) { }
  @HostListener('blur') onBlur(){
    let value : string  = this.el.nativeElement.value;
    if (this.appInputformat=='uppercase')
       this.el.nativeElement.value = value.toUpperCase();
    else
    this.el.nativeElement.value = value.toLowerCase();

  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
 
  constructor(private e:ElementRef) { 
  }

  @HostListener('mouseover')
  onMouseOver() {
     this.e.nativeElement.style.backgroundColor= 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.e.nativeElement.style.backgroundColor= 'white';
  }

}

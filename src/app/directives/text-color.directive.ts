import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[hoverColor]'
})
export class TextColorDirective {

  @Input('hoverColor') textColor: string = null;
  originalColor: string;
  constructor(private element: ElementRef) { 
    this.originalColor = this.element.nativeElement.style.backgroundColor;
    //this.setColor(this.textColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.originalColor);
  }

  setColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}

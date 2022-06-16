import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.backgroundColor') backgroundColor:string = "black";
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight("red");
    this.backgroundColor = 'grey';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight("yellow");
    this.backgroundColor = 'black';
  }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}

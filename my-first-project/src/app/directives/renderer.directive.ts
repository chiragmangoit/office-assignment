import { style } from '@angular/animations';
import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {

  constructor( private renderer:Renderer2, private elf:ElementRef ) { }

  ngOnInit() {

    const para = this.renderer.createElement('p');
    const text = this.renderer.createText('Hello');

    this.renderer.appendChild(para, text);
    this.renderer.appendChild(this.elf.nativeElement, para);
    this.renderer.setStyle(para, 'fontWeight' , 'bold');
    this.renderer.setStyle(para, 'margin' , '0px');
    this.renderer.addClass(para, 'text-center')
  }  
}

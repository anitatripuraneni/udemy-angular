import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: String = 'transparent';
  //@Input() highlightColor: String = 'blue';
  @Input('appBetterHighlight') highlightColor: String = 'blue';
//@HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';
  //@HostBinding('style.backgroundColor') backgroundColor: String = this.defaultColor;
  @HostBinding('style.backgroundColor') backgroundColor: String;

constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

ngOnInit(){
  this.backgroundColor = this.defaultColor;
//this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
}

  @HostListener('mouseenter') mouserover(eventData: Event){
//this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}

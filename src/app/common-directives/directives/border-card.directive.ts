import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[commonBorderCard]'
})
export class BorderCardDirective {

  constructor(
    private el: ElementRef,
  ) { 
    this.setBorderLeave()
  }

  // setHeight(height: number) {
  //   this.el.nativeElement.style.height = 'none';
  // }

  @Input('commonBorderCard') borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderEnter(this.borderColor || 'var(--color-1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderLeave();
  }

  setBorderEnter(color: string) {
    this.el.nativeElement.style.border = `solid 3px ${color}`;
    this.el.nativeElement.style.transform = 'scale(1.1)';
  }
  
  setBorderLeave() {
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.transform = 'none';
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click') onClick() {
    this.gotoTop();
  }

  gotoTop() {
    // this.el.nativeElement.window.scroll({ 
    //   top: 0, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenDoor]'
})
export class OpenDoorDirective {

  isOpen : boolean = false;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click') onClick() {
    this.isOpen ? this.setCloseDoor() : this.setOpenDoor();
  }

  setOpenDoor() {
    this.isOpen = true;
    this.el.nativeElement.style.boxShadow = 'none';
    this.el.nativeElement.style.transform ='perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg)';
  }

  setCloseDoor() {
    this.isOpen = false;
    this.el.nativeElement.style.boxShadow = '0.5rem 0.5rem 0.5rem  var(--black)';
    this.el.nativeElement.style.transform ='none';
  }

}

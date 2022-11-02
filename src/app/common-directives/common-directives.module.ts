import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenDoorDirective } from './directives/open-door.directive';
import { BorderCardDirective } from './directives/border-card.directive';



@NgModule({
  declarations: [
    OpenDoorDirective,
    BorderCardDirective,
  ],
  exports:[
    OpenDoorDirective,
    BorderCardDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class CommonDirectivesModule { }

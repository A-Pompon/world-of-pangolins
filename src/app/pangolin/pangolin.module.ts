import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailPangolinComponent } from './detail-pangolin/detail-pangolin.component';
import { ListPangolinComponent } from './list-pangolin/list-pangolin.component';
import { ClassementComponent } from './classement/classement.component';
import { PangolinService } from './pangolin.service';
import { CommonDirectivesModule } from '../common-directives/common-directives.module';

const pangolinRoutes: Routes = [
  { path: 'classement', component: ClassementComponent},
  { path: 'pangolin/:id', component: DetailPangolinComponent},
];

@NgModule({
  declarations: [
    ClassementComponent,
    DetailPangolinComponent,
    ListPangolinComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pangolinRoutes),
    CommonDirectivesModule,
  ],
  providers: [PangolinService]
})
export class PangolinModule { }

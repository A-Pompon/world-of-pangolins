import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailPangolinComponent } from './detail-pangolin/detail-pangolin.component';
import { ListPangolinComponent } from './list-pangolin/list-pangolin.component';
import { ClassementComponent } from './classement/classement.component';
import { PangolinService } from './pangolin.service';
import { CommonDirectivesModule } from '../common-directives/common-directives.module';
import { AuthGuard } from '../core/guards/auth-guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

const pangolinRoutes: Routes = [
  { path: 'classement', component: ClassementComponent, canActivate: [AuthGuard]},
  { path: 'pangolin/:id', component: DetailPangolinComponent, canActivate: [AuthGuard]},
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
    HttpClientModule,
  ],
  providers: [PangolinService,AuthService]
})
export class PangolinModule { }

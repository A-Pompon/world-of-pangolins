import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommonDirectivesModule } from '../common-directives/common-directives.module';

import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthGuard } from './guards/auth-guard';

const coreRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent , canActivate: [AuthGuard]},
  
];

@NgModule({
  declarations: [
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  exports:[
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),
    CommonDirectivesModule,
    NzIconModule,
  ]
})
export class CoreModule { }

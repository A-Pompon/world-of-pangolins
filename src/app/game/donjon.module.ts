import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DonjonComponent } from './donjon/donjon.component';
import { LevelDonjonComponent } from './level-donjon/level-donjon.component';
import { EndDonjonComponent } from './end-donjon/end-donjon.component';
import { DonjonService } from './donjon.service';

import { CommonDirectivesModule } from '../common-directives/common-directives.module';
import { AuthGuard } from '../core/guards/auth-guard';

const gameRoutes: Routes = [
  { path: 'donjon', component: DonjonComponent, canActivate: [AuthGuard]},
  { path: 'level-donjon', component: LevelDonjonComponent, canActivate: [AuthGuard]},
  { path: 'end-donjon', component: EndDonjonComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    DonjonComponent,
    LevelDonjonComponent,
    EndDonjonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes),
    CommonDirectivesModule,
  ],
  providers: [DonjonService]
})
export class DonjonModule { }

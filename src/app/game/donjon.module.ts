import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DonjonComponent } from './donjon/donjon.component';
import { LevelDonjonComponent } from './level-donjon/level-donjon.component';
import { EndDonjonComponent } from './end-donjon/end-donjon.component';
import { DonjonService } from './donjon.service';

import { CommonDirectivesModule } from '../common-directives/common-directives.module';

const gameRoutes: Routes = [
  { path: 'donjon', component: DonjonComponent},
  { path: 'level-donjon', component: LevelDonjonComponent},
  { path: 'end-donjon', component: EndDonjonComponent},
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

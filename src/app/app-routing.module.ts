import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './core/accueil/accueil.component';
import { DonjonComponent } from './game/donjon/donjon.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'profil', component: ProfilComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', 
  component: NotFoundComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}
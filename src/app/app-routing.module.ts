import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', 
  component: NotFoundComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}
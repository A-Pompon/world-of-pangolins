import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PangolinModule } from './pangolin/pangolin.module';
import { CoreModule } from './core/core.module';
import { DonjonModule } from './game/donjon.module';

import {MatIconModule} from '@angular/material/icon';


import { ProfilComponent } from './profil/profil.component';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    PangolinModule,
    CoreModule,
    DonjonModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PangolinModule } from './pangolin/pangolin.module';
import { CoreModule } from './core/core.module';
import { DonjonModule } from './game/donjon.module';
import { AuthModule } from './auth/auth.module';

import {MatIconModule} from '@angular/material/icon';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    PangolinModule,
    CoreModule,
    DonjonModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

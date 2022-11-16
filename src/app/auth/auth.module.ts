import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProfilComponent } from './profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../core/guards/auth-guard';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsComponent } from './friends/friends/friends.component';
import { PangolinService } from '../pangolin/pangolin.service';

const authRoutes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  { path: 'update-profil', component: UpdateProfilComponent, canActivate: [AuthGuard]},
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfilComponent,
    UpdateProfilComponent,
    FriendsListComponent,
    FriendsComponent,
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    ProfilComponent,
    UpdateProfilComponent,
    FriendsListComponent,
    FriendsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzIconModule,
  ],
  providers: [AuthService, PangolinService]
})
export class AuthModule { }

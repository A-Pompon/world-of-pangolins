import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { getHeaderToken, getHeader } from '../auth/utils/localStorageGestion'

const AUTH_API = 'http://localhost:3000/api/auth/';

@Injectable(
)
export class AuthService {

  constructor(
    private http: HttpClient,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  // Auth
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, getHeader());
  }

  register(name: string, email: string, password: string, role: string): Observable<any> {
    console.log('==================REGISTER==================');
    console.log(name);
    console.log('====================================');
    return this.http.post(AUTH_API + 'register', {
      name,
      email,
      password,
      role
    }, getHeader());
  }

  logout() {
    this.removeToken('Token');
    this.removeToken('ProfilId');
    this.router.navigateByUrl('/login');
  }

  getProfil(): Observable<any> {
    return this.http.get('http://localhost:3000/api/pangolin/me', getHeaderToken());
  }

  getProfilRegister(): Observable<any> {
    return this.http.get('http://localhost:3000/api/pangolin/me', getHeaderToken());
  }

  // Profil
  updateProfil(name: string, role:string):Observable<any> {
    return this.http.patch('http://localhost:3000/api/pangolin/update', {
      name,
      role
    }, getHeaderToken());
  }

  // Token storage
  setToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  removeToken(key: string) {
    localStorage.removeItem(key);
  }
}

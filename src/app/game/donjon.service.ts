import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getHeaderToken, getHeader } from '../auth/utils/localStorageGestion'

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class DonjonService {

  // Service pour level-shufumi-game
  level:boolean=true;

  // Service pour end-shufumi-game
  show:boolean=false;

  constructor(
    private http: HttpClient,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  winGame() {
    return this.http.get("http://localhost:3000/api/score/victories", getHeaderToken());
  }

  looseGame() {
    return this.http.get("http://localhost:3000/api/score/defeates", getHeaderToken());
  }

  donjonLevelOneW(){
    return this.http.get("http://localhost:3000/api/score/win1", getHeaderToken()); 
  }

  donjonLevelTwoW(){
    return this.http.get("http://localhost:3000/api/score/win2", getHeaderToken()); 
  }

  donjonLevelThreeW(){
    return this.http.get("http://localhost:3000/api/score/win3", getHeaderToken()); 
  }

  donjonLevelOneL(){
    return this.http.get("http://localhost:3000/api/score/loose1", getHeaderToken()); 
  }

  donjonLevelTwoL(){
    return this.http.get("http://localhost:3000/api/score/loose2", getHeaderToken()); 
  }

  donjonLevelThreeL(){
    return this.http.get("http://localhost:3000/api/score/loose3", getHeaderToken()); 
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': localStorage.getItem("Token")! }),
};

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
    return this.http.get("http://localhost:3000/api/score/victories", httpOptions);
  }

  looseGame() {
    return this.http.get("http://localhost:3000/api/score/defeates", httpOptions);
  }

  donjonLevelOneW(){
    return this.http.get("http://localhost:3000/api/score/win1", httpOptions); 
  }

  donjonLevelTwoW(){
    return this.http.get("http://localhost:3000/api/score/win2", httpOptions); 
  }

  donjonLevelThreeW(){
    return this.http.get("http://localhost:3000/api/score/win3", httpOptions); 
  }

  donjonLevelOneL(){
    return this.http.get("http://localhost:3000/api/score/loose1", httpOptions); 
  }

  donjonLevelTwoL(){
    return this.http.get("http://localhost:3000/api/score/loose2", httpOptions); 
  }

  donjonLevelThreeL(){
    return this.http.get("http://localhost:3000/api/score/loose3", httpOptions); 
  }

}

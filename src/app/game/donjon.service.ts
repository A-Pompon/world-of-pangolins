import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class DonjonService {

  httpOptions = {
    headers:new HttpHeaders ({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' })
  }

  // Service pour level-shufumi-game
  level:boolean=true;

  // Service pour end-shufumi-game
  show:boolean=false;

  constructor(
    private http: HttpClient,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  donjonLevelOneW(){
    return this.http.get("http://localhost:8000/api/wins1", {withCredentials: true} ); 
  }

  donjonLevelTwoW(){
    return this.http.get("http://localhost:8000/api/wins2", {withCredentials: true} ); 
  }

  donjonLevelThreeW(){
    return this.http.get("http://localhost:8000/api/wins3", {withCredentials: true} ); 
  }

  donjonLevelOneL(){
    return this.http.get("http://localhost:8000/api/loses1", {withCredentials: true} ); 
  }

  donjonLevelTwoL(){
    return this.http.get("http://localhost:8000/api/loses2", {withCredentials: true} ); 
  }

  donjonLevelThreeL(){
    return this.http.get("http://localhost:8000/api/loses3", {withCredentials: true} ); 
  }

}

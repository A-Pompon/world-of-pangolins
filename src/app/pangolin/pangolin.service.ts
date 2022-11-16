import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';
// import { PANGOLINS } from './mock-pangolin-list';
import { Pangolin } from './pangolin';
import { Score } from './score';
import { AuthService } from '../auth/auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("Token")! }),
};

@Injectable(
  {
  providedIn: 'root'
}
)
export class PangolinService {

  constructor(
    private http: HttpClient,
  ) {}

  getFriends(): Observable<Pangolin> {
    return this.http.get<Pangolin>('http://localhost:3000/api/friend', httpOptions);
  }

  getProfil(): Observable<Score> {
    return this.http.get<Score>('http://localhost:3000/api/score/profil', httpOptions);
  }

  rankingGame(): Observable<Score[]> {
    return this.http.get<Score[]>('http://localhost:3000/api/score', httpOptions)
  }

  getPangolinById(pangolinId: string): Observable<Score> {
    return this.http.get<Score>(`http://localhost:3000/api/score/${pangolinId}`, httpOptions);
  }

  addToFriend(pangolinId: string): Observable<Score> {
    return this.http.get<Score>(`http://localhost:3000/api/friend/add/${pangolinId}`, httpOptions);
  }

  deleteToFriend(pangolinId: string): Observable<Score> {
    return this.http.get<Score>(`http://localhost:3000/api/friend/delete/${pangolinId}`, httpOptions);
  }
}

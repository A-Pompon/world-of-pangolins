import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pangolin } from './pangolin';
import { Score } from './score';
import { getHeaderToken, getHeader } from '../auth/utils/localStorageGestion'


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
    return this.http.get<Pangolin>('http://localhost:3000/api/friend', getHeaderToken());
  }

  getProfil(): Observable<Score> {
    return this.http.get<Score>('http://localhost:3000/api/score/profil', getHeaderToken());
  }

  rankingGame(): Observable<Score[]> {
    return this.http.get<Score[]>('http://localhost:3000/api/score', getHeaderToken())
  }

  getPangolinById(pangolinId: string): Observable<Score> {
    return this.http.get<Score>(`http://localhost:3000/api/score/${pangolinId}`, getHeaderToken());
  }

  addToFriend(pangolinId: string): Observable<Score> {
    return this.http.get<Score>(`http://localhost:3000/api/friend/add/${pangolinId}`, getHeaderToken());
  }

  deleteToFriend(pangolinId: string): Observable<Score> {
    return this.http.get<Score>(`http://localhost:3000/api/friend/delete/${pangolinId}`, getHeaderToken());
  }
}

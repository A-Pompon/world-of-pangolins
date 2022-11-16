import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PangolinService } from '../pangolin.service';

import { Pangolin } from '../pangolin';
import { Score } from '../score';
import { map, find } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pangolin',
  templateUrl: './list-pangolin.component.html',
  styleUrls: ['./list-pangolin.component.scss']
})
export class ListPangolinComponent implements OnInit {

  pangolinImage!:string;

  pangolinClassement$!:Observable<any>;

  constructor(
    private router: Router,
    private pangolinService: PangolinService,
  ) { }

  
  ngOnInit(): void {
    this.pangolinClassement$ = this.pangolinService.rankingGame();
  }

  getImage(score: Score): string {
    let path:string =  score.pangolin_id == null ? "sorcier.png" : score.pangolin_id.role.toLowerCase()+".png"
    return "../../../assets/roles/"+ path;
  }

  goToPangolin(score: Score) {
    this.router.navigate(['/pangolin', score._id]);
  } 
}

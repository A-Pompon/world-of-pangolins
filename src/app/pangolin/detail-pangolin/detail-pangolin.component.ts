import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PangolinService } from '../pangolin.service';
import { Score } from '../score';

@Component({
  selector: 'app-detail-pangolin',
  templateUrl: './detail-pangolin.component.html',
  styleUrls: ['./detail-pangolin.component.scss']
})
export class DetailPangolinComponent implements OnInit {

  scoreById$!:Observable<Score>;
  pangolin!: Score;

  isFriend = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pangolinService: PangolinService,
  ) { }

  ngOnInit(): void {
    this.scoreById$ = this.pangolinService.getPangolinById(this.route.snapshot.params['id']);
    this.scoreById$.subscribe(data => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        this.pangolin = data;
        this.isMyFriend();
    })
  }

  addToFriend() {
    this.pangolinService.addToFriend(this.pangolin.pangolin_id._id).subscribe(
      data => {
        console.log(data);
        this.isFriend = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteToFriend() {
    this.pangolinService.deleteToFriend(this.pangolin.pangolin_id._id).subscribe(
      data => {
        console.log(data);
        this.isFriend = false;
      },
      error => {
        console.log(error);
      }
    );
  }
  
  isMyFriend():void {
    this.isFriend = this.pangolin.friends.find(el => el._id == this.pangolin.pangolin_id._id) == undefined ? false : true;
    console.log(this.isFriend);
  }

  getImage(score: Score): string {
    let path:string =  score.pangolin_id == null || score == undefined ? "sorcier.png" : score.pangolin_id.role.toLowerCase()+".png"
    return "../../../assets/roles/"+ path;
  }

  goToPangolinList() {
    this.router.navigate(['/classement']);
  }

}

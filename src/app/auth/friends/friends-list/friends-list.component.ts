import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PangolinService } from '../../../pangolin/pangolin.service';

import { Pangolin } from '../../../pangolin/pangolin';
import { Score } from '../../../pangolin/score';
import { map, find } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  friendsList!:Pangolin[];

  isFriend = false;

  constructor(
    private router: Router,
    private pangolinService: PangolinService,
  ) { }

  ngOnInit(): void {
    this.pangolinService.getFriends().subscribe(data => {
      this.friendsList = data.friends_id;
      console.log(data);
  });
  }

  deleteToFriend(friendId:string) {
    this.pangolinService.deleteToFriend(friendId).subscribe(
      data => {
        console.log(data);
        this.friendsList = this.friendsList.filter(el => el._id !== friendId)
      },
      error => {
        console.log(error);
      }
    );
  }

  getImage(pangolin: Pangolin): string {
    let path:string =  pangolin == null ? "sorcier.png" : pangolin.role.toLowerCase()+".png"
    return "../../../assets/roles/"+ path;
  }
}

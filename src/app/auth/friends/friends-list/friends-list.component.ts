import { Component, OnInit } from '@angular/core';
import { PangolinService } from '../../../pangolin/pangolin.service';

import { Pangolin } from '../../../pangolin/pangolin';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  friendsList!:Pangolin[];

  isFriend = false;

  constructor(
    private pangolinService: PangolinService,
  ) { }

  ngOnInit(): void {
    this.pangolinService.getFriends().subscribe(data => {
      this.friendsList = data.friends_id;
  });
  }

  deleteToFriend(friendId:string) {
    this.pangolinService.deleteToFriend(friendId).subscribe(
      data => {
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

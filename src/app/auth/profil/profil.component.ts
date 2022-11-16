import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Score } from 'src/app/pangolin/score';
import { Pangolin } from '../../pangolin/pangolin';
import { PangolinService } from '../../pangolin/pangolin.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  // pangolin$:Observable<Score>;
  profil!:Score;


  constructor(
    private router: Router,
    private pangolinService: PangolinService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // this.pangolin = this.pangolinService.login();
    // this.pangolin$ = this.pangolinService.getProfil()
    this.pangolinService.getProfil().subscribe(data => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.profil = data;
  });
  }

  getImage(profil: Score): string {
    let path:string =  profil.pangolin_id == null ? "sorcier.png" : profil.pangolin_id.role.toLowerCase()+".png"
    return "../../../assets/roles/"+ path;
  }

  goGame(): void {
    this.router.navigateByUrl('/donjon');
  }

  goUpdate(): void {
    this.router.navigateByUrl('/update-profil');
  }

  logout() {
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pangolin } from '../pangolin/pangolin';
import { PangolinService } from '../pangolin/pangolin.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  pangolin: Pangolin | undefined;

  constructor(
    private router: Router,
    private pangolinService: PangolinService,
  ) { }

  ngOnInit(): void {
    this.pangolin = this.pangolinService.login();
  }

  // VOIR SERVICE AUTH AU LIEU DE PANGOLINSERVICE

  goGame(): void {
    this.router.navigateByUrl('donjon');
  }

  logout() {
    // REDIRECTION VERS LOGIN
    console.log('Déconnexion')
  }

}

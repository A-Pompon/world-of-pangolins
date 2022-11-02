import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PangolinService } from '../pangolin.service';

import { Pangolin } from '../pangolin';

@Component({
  selector: 'app-list-pangolin',
  templateUrl: './list-pangolin.component.html',
  styleUrls: ['./list-pangolin.component.scss']
})
export class ListPangolinComponent implements OnInit {

  pangolinList!: Pangolin[];
  pangolinImage!:string;

  constructor(
    private router: Router,
    private pangolinService: PangolinService,
  ) { }

  
  ngOnInit(): void {
    this.pangolinList = this.pangolinService.getPangolinList();
    this.pangolinList.sort((a, b):number => {
      return b.score - a.score;
    })

    }

  goToPangolin(pangolin: Pangolin) {
    this.router.navigate(['/pangolin', pangolin.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pangolin } from '../pangolin';
import { PangolinService } from '../pangolin.service';

@Component({
  selector: 'app-detail-pangolin',
  templateUrl: './detail-pangolin.component.html',
  styleUrls: ['./detail-pangolin.component.scss']
})
export class DetailPangolinComponent implements OnInit {

  pangolinList!: Pangolin[];
  pangolin: Pangolin | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pangolinService: PangolinService,
  ) { }

  ngOnInit(): void {
    const pangolinId: string | null = this.route.snapshot.paramMap.get('id');
    if(pangolinId) {
      this.pangolin = this.pangolinService.getPangolinById(+pangolinId)
    }
  }

  goToPangolinList() {
    this.router.navigate(['/classement']);
  }

}

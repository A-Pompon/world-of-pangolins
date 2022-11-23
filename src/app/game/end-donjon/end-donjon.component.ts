import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DonjonService } from '../donjon.service';

@Component({
  selector: 'app-end-donjon',
  templateUrl: './end-donjon.component.html',
  styleUrls: ['./end-donjon.component.scss']
})
export class EndDonjonComponent implements OnInit, OnDestroy {

  @Output() sendResetToData = new EventEmitter();

  @Input() winOrLoos='';
  @Input() scorePlayerFinal=0;
  @Input() scoreIaFinal=0;

  constructor(
    public dataDonjon:DonjonService,
  ) { }

  level:boolean=false;

  show:boolean=false;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.resetAll()
  }

  resetAll(){
    this.resetGame();
    this.displayLevel();
  }

  resetGame() {
    this.sendResetToData.emit();
  }

  displayLevel() {
    this.dataDonjon.level=true;
    this.dataDonjon.show=false;
  }

}

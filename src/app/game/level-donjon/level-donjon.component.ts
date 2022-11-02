import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DonjonService } from '../donjon.service';

@Component({
  selector: 'app-level-donjon',
  templateUrl: './level-donjon.component.html',
  styleUrls: ['./level-donjon.component.scss']
})
export class LevelDonjonComponent implements OnInit {

  @Output() sendLevelOneToData = new EventEmitter();
  @Output() sendLevelTwoToData = new EventEmitter();
  @Output() sendLevelThreeToData = new EventEmitter();
  @Output() sendDisplayToData = new EventEmitter();

  constructor(
    public dataDonjon:DonjonService,
  ) { }

  level: boolean =true;

  ngOnInit(): void {
  }

  displayGameBoardChild() {
    this.sendDisplayToData.emit();
  }
  
  sendEvent1() {
    this.dataDonjon.level=false;
    this.sendLevelOneToData.emit();
  }

  sendEvent2() {
    this.dataDonjon.level=false;
    this.sendLevelTwoToData.emit();
  }

  sendEvent3() {
    this.dataDonjon.level=false;
    this.sendLevelThreeToData.emit();
  }

  resetGame(){
    this.dataDonjon.level=true;
  }

}

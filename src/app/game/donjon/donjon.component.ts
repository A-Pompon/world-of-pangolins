import { Component, OnInit } from '@angular/core';
import { PangolinService } from 'src/app/pangolin/pangolin.service';
import { Score } from 'src/app/pangolin/score';
import { DonjonService } from '../donjon.service';

@Component({
  selector: 'app-donjon',
  templateUrl: './donjon.component.html',
  styleUrls: ['./donjon.component.scss']
})
export class DonjonComponent implements OnInit {

  // Initialisation des données
  activeGame:boolean=true; //VOIR SI UTILE OU SI ON ENELEVE ?

  scorePlayer:number=0;
  scoreIa:number=0;
  result:string="";
  resultat:string = "";
  player:string="";
  iaPlayer:string="";
  iaChoice=["Lance", "Arc", "Bouclier"];
  iaPossibility:number=0;

  pvPlayer1!:number; //SCORE PLAYER LVL 1 QU'ON PEUT MODIFIER
  pvPlayer2!:number; //SCORE PLAYER LVL 2 QU'ON PEUT MODIFIER
  pvPlayer3!:number; //SCORE PLAYER LVL 3 QU'ON PEUT MODIFIER

  imgOpponent:string='';
  imgPlayer:string='';

  bug:boolean = false;

  // Variable pour communiquer entre composants
  scoreToReach:number=0;
  sentPoints:boolean=false;

  opponent:string='';
  opponentImg:string='';

  gameBoard:boolean=false;

  winOrLoos:string="";
  winLoos:string="";
 
  scorePlayerFinal:number=this.scoreIa;
  scoreIaFinal:number=this.scorePlayer;
  
  show:boolean=true;

  profil!:Score;

  constructor(
    private donjonService:DonjonService,
    private dataDonjon:DonjonService,
    private pangolinService: PangolinService,
  ) { }

  ngOnInit(): void {
    this.bug = false;
    this.pangolinService.getProfil().subscribe(data => {
      this.profil = data;
  });
  }

  ngDoCheck():void {
    if(!this.gameBoard && !this.dataDonjon.level && !this.dataDonjon.show) {
      this.bug = true;
      
    }
    if (this.dataDonjon.show) {
      this.imgPlayer ="";
    }
  }

  getImage(profil: Score): string {
    let path:string =  profil.pangolin_id == null ? "sorcier.png" : profil.pangolin_id.role.toLowerCase()+".png"
    return "../../../assets/roles/"+ path;
  }

  displayEndGame(){
    this.dataDonjon.show=true;
    this.bug = false;
  }

  displayGameBoard(){
    this.gameBoard = true;
  }

  scoreToEnd1() {
    this.scoreToReach = 3;
    this.pvPlayer1 = 5;
    this.opponent = 'Soldat Fourmi';
    this.opponentImg = 'soldat-fourmi';
  }

  scoreToEnd2() {
    this.scoreToReach = 5;
    this.pvPlayer2 = 5;
    this.opponent = 'Colonel Fourmi';
    this.opponentImg = 'colonel-fourmi';
  }

  scoreToEnd3() {
    this.scoreToReach = 7;
    this.pvPlayer3 = 5;
    this.opponent = 'Roi Fourmi';
    this.opponentImg = 'roi-fourmi';
  }

  resetStats(){
    this.scoreToReach=0;
    this.scorePlayer=0;
    this.scoreIa=0;
    this.activeGame=true;
  }


  // On crée la fonction définissant les conditions de victoire,
  // de défaite et d'égalité
  playingCondition ():void {
    let ia = this.iaPlayer;
    let p = this.player;
    this.imgOpponent = this.iaPlayer.toLowerCase();
    this.imgPlayer = this.player.toLowerCase();
    this.activeGame=true;

  if (p === "Lance" && ia === "Bouclier" ||
      p === "Arc" && ia === "Lance" ||
      p === "Bouclier" && ia === "Arc"
  ) {
      this.result = "Gagné !";
      this.scorePlayer=this.scorePlayer +1;
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  }
  else if (p === "Lance" && ia === "Arc" ||
          p === "Arc" && ia === "Bouclier" ||
          p === "Bouclier" && ia === "Lance"
  ) {
      this.result = "Perdu !";
      this.scoreIa=this.scoreIa +1;
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  } else {
      this.result = "Egalité !";
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  }
  // Verification des scores
  console.log('Score Player = '+this.scorePlayer);
  console.log('Score IA = '+this.scoreIa);
  }

  // 
  // PAS MIS A VERIFIER SI BESOIN !???
  // 
  endGame() {
    if(this.sentPoints == true) {
      this.activeGame == false;
    }
  }

  // Connection API en fonction du level choisit
  sendPoints() {
    // Score à atteindre
    console.log('La manche est en '+this.scoreToReach+' points gagnant !');
    
    // Level 1
    if(this.scorePlayer === this.scoreToReach && this.scoreToReach == 3) {
      this.sentPoints = true;
      this.donjonService.donjonLevelOneW().subscribe();
      this.donjonService.winGame().subscribe();
      // Verification envoie des points
      console.log('Envoie de 3 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos=`GAGNE !! Félicitation vous avez vaincu le ${this.opponent} ! Vous avez gagné ${this.scoreToReach} points`
      this.winOrLoos=this.winLoos;
    }

    // Level 2
    if(this.scorePlayer === this.scoreToReach && this.scoreToReach == 5) {
      this.sentPoints = true;
      this.donjonService.donjonLevelTwoW().subscribe();
      this.donjonService.winGame().subscribe();
      // Verification envoie des points
      console.log('Envoie de 5 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos=`GAGNE !! Félicitation vous avez vaincu le ${this.opponent} ! Vous avez gagné ${this.scoreToReach} points`
      this.winOrLoos=this.winLoos;
    }

    // Level 3
    if(this.scorePlayer === this.scoreToReach && this.scoreToReach == 7) {
      this.sentPoints = true;
      this.donjonService.donjonLevelThreeW().subscribe();
      this.donjonService.winGame().subscribe();
      // Verification envoie des points
      console.log('Envoie de 7 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos=`GAGNE !! Félicitation vous avez vaincu le ${this.opponent} ! Vous avez gagné ${this.scoreToReach} points`
      this.winOrLoos=this.winLoos;
    }
    
    // Level 1
    if(this.pvPlayer1 === this.scoreIa && this.pvPlayer1 === 5) {
      this.sentPoints = true;
      this.donjonService.donjonLevelOneL().subscribe();
      this.donjonService.looseGame().subscribe();
      // Verification envoie des points
      console.log('Soustraction de 3 points');
      this.gameBoard = false;
      // this.show=false; MARCHE AUSSI
      this.displayEndGame();
      this.winLoos=`PERDU... Vous ferez mieux la prochaine fois... Vous avez perdu ${this.scoreToReach} points.`
      this.winOrLoos=this.winLoos;
    }

    // Level 2
    if(this.pvPlayer2 === this.scoreIa && this.pvPlayer2 === 5) {
      this.sentPoints = true;
      this.donjonService.donjonLevelTwoL().subscribe();
      this.donjonService.looseGame().subscribe();
      // Verification envoie des points
      console.log('Soustraction de 5 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos=`PERDU... Vous manquez d'exercice.. ? Vous avez perdu ${this.scoreToReach} points.`
      this.winOrLoos=this.winLoos;
    }

    // Level 3
    if(this.pvPlayer3 === this.scoreIa && this.pvPlayer3 === 5) {
      this.sentPoints = true;
      this.donjonService.donjonLevelThreeL().subscribe();
      this.donjonService.looseGame().subscribe();
      // Verification envoie des points
      console.log('Soustraction de 7 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos=`PERDU... Il est trop fort... Vous avez perdu ${this.scoreToReach} points.`
      this.winOrLoos=this.winLoos;
    }
  }


// On crée les fonctions liées au clic sur Lance
 stoneCase() {
  this.player = "Lance";
  setTimeout(() => {
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  this.sendPoints();
  },500)
  console.log('Lance');
}

// On crée les fonctions liées au clic sur Arc
paperCase() {
  this.player = "Arc";
  setTimeout(() => {
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  this.sendPoints();
  },500)
  console.log('Arc');
}

// On crée les fonctions liées au clic sur Bouclier
 scissorsCase() {
  this.player = "Bouclier";
  setTimeout(() => {
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  this.sendPoints();
  },500)
  console.log('Bouclier');
}

}

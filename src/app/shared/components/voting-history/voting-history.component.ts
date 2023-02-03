import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  laure:Colleague = {
    pseudo: "lolo",
    score: 200,
    photo: "women/64"
  }
  lucas:Colleague = {
    pseudo: "lukreator",
    score: -940,
    photo: "men/32"
  }
  eli:Colleague = {
    pseudo: "strifey",
    score: 900,
    photo: "men/2"
  }
  joris:Colleague = {
    pseudo: "Jojo",
    score: 2,
    photo: "men/18"
  }
  antoine:Colleague = {
    pseudo: "TavTav",
    score: 651,
    photo: "men/29"
  }


  vote1:Vote ={
    collegue: this.joris,
    vote : LikeHate.HATE
  }
  vote2:Vote ={
    collegue: this.laure,
    vote : LikeHate.LIKE
  }
  vote3:Vote ={
    collegue: this.lucas,
    vote : LikeHate.LIKE
  }
  vote4:Vote ={
    collegue: this.joris,
    vote : LikeHate.HATE
  }

  tabVotes: Vote[] = [this.vote1,this.vote2,this.vote3,this.vote4]

  suppr(id:number){
    this.tabVotes.splice(id,1);


  }



}

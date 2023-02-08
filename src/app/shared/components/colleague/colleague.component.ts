import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";


@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})



export class ColleagueComponent implements OnInit {
  @Input() collegue:Colleague ={
    pseudo: "Jean",
    score: -999,
    photo:"https://randomuser.me/api/portraits/men/22.jpg"
  }

    likeButtonDisabled = false;
    hateButtonDisabled = false;


    constructor(private voteSrv:VoteService) {
    }

  updateScore(likeHate: LikeHate){
    switch (likeHate){
      case LikeHate.LIKE:
        this.collegue.score+=100;
        this.voteSrv.postVoteLike(this.collegue.pseudo);
        break;
      case LikeHate.HATE:
        this.collegue.score-=100;
        this.voteSrv.postVoteHate(this.collegue.pseudo);
    }
    this.likeHateDisableling();
  }

  likeHateDisableling() {
    this.likeButtonDisabled = this.collegue.score >= 1000;
    this.hateButtonDisabled = this.collegue.score <= -1000;
  }

  ngOnInit(): void {
  }
}

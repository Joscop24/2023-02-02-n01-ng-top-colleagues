import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private voteService: VoteService) {
  }

  votes: Vote[] = this.voteService.list();

}

import { Component } from '@angular/core';
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private voteService: VoteService) {
  }

  votes: Observable<Vote[]> = this.voteService.list();

}

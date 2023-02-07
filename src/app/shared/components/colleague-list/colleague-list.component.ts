import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit{

  constructor(private colleguesSrv:ColleagueService) {
  }

  collegues: Colleague[] = this.colleguesSrv.list();





  ngOnInit(): void {
  }


}


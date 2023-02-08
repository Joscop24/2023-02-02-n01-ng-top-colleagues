import {Component, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit{

  collegues: Colleague[] = [];


  constructor(private colleguesSrv:ColleagueService) {
    this.colleguesSrv.changeColleagues().subscribe(tabcoll => this.collegues = tabcoll);
  }


  ngOnInit(): void {
  }


}


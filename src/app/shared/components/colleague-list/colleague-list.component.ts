import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit{
  listeCollegue:Colleague[] =[{
    pseudo:"Alexis",
    score: 0,
    photo: "https://randomuser.me/api/portraits/men/27.jpg"
  },
  {
    pseudo:"Marc",
    score: 0,
    photo: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    pseudo:"Bruno",
    score: 15,
    photo: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    pseudo:"Nicolas",
    score: 0,
    photo: "https://randomuser.me/api/portraits/men/21.jpg"
  },
    {
      pseudo:"Jeannette",
      score: 15,
      photo: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
      pseudo:"Pierre",
      score: 0,
      photo: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      pseudo:"Vanessa",
      score: 0,
      photo: "https://randomuser.me/api/portraits/women/1.jpg"
    }


  ];



  ngOnInit(): void {
  }


}


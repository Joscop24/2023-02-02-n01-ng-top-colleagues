import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
/*import {pseudo, score, photo} from '../../../models/colleague'*/

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

/*
  @Input() pseudo = "Thierry";
  @Input() score = "100";
  @Input() photo = "https://randomuser.me/api/portraits/men/24.jpg";
*/

  @Input() collegue: Colleague = {
    pseudo: "Jean marc",
    score: 100,
    photo:"https://randomuser.me/api/portraits/men/22.jpg"
  }
}

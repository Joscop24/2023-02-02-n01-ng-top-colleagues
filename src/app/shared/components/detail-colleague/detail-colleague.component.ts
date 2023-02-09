import { Component } from '@angular/core';
import {Detail} from "../../../models/detail";
import {ActivatedRoute} from "@angular/router";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-detail-colleague-card',
  templateUrl: './detail-colleague.component.html',
  styleUrls: ['./detail-colleague.component.scss']
})
export class DetailColleagueComponent {

  pseudo?: string;
  colleague!: Detail;

  constructor(private route: ActivatedRoute, collegueSrv: ColleagueService) {
    const pseudoTemp = route.snapshot.paramMap.get("pseudo");
    if (pseudoTemp) this.pseudo = pseudoTemp;

    if (this.pseudo) collegueSrv.getColleagueByPseudo(this.pseudo)
      .subscribe(coll => this.colleague = coll);

  }
}

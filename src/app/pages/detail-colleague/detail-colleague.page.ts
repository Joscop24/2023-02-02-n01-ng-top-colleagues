import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tc-detail-colleague',
  templateUrl: './detail-colleague.page.html',
  styleUrls: ['./detail-colleague.page.scss']
})
export class DetailColleaguePage {

  pseudo!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    ) {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        const pse = paramMap.get("pseudo")
        if(pse) {
          this.pseudo = pse
        }
      })
  }


}

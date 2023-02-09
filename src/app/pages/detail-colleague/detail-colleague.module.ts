import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailColleaguePage } from './detail-colleague.page';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    DetailColleaguePage
  ],
  exports: [
    DetailColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DetailColleagueModule { }

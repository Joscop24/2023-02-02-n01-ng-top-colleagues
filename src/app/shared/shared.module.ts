import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { CounterComponent } from './components/counter/counter.component';
import { HttpClientModule} from "@angular/common/http";
import { CreateColleagueComponent } from './components/create-colleague/create-colleague.component';
import { DetailColleagueComponent } from './components/detail-colleague/detail-colleague.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueComponent,
    DetailColleagueComponent,
    MenuComponent
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    DetailColleagueComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }

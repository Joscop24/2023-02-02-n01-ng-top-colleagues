import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { WelcomeModule } from "./pages/welcome/welcome.module";
import { CreateColleagueModule } from "./pages/create-colleague/create-colleague.module";
import { AppRoutingModule } from './app-routing.module';
import { DetailColleagueModule } from "./pages/detail-colleague/detail-colleague.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WelcomeModule,
    DetailColleagueModule,
    SharedModule,
    CreateColleagueModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

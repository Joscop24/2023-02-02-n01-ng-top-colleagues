import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomePage} from "./pages/welcome/welcome.page";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {DetailColleaguePage} from "./pages/detail-colleague/detail-colleague.page";

const routes: Routes = [
  { path: '', component: WelcomePage},
  { path: 'forms', component: CreateColleaguePage},
  { path: 'detail/:pseudo', component: DetailColleaguePage },
  { path: '**', redirectTo: ""}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

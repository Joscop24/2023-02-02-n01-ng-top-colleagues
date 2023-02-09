import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Detail} from "../models/detail";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http:HttpClient) {
   this.callApi()
  }

  private subjectVote = new Subject<Colleague[]>;

  changeColleagues(){
    return this.subjectVote.asObservable();
  }



  callApi() {
    this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues').subscribe(
      (data:Colleague[]) => {
        this.subjectVote.next(data)
      })
  }

  getColleagueByPseudo(pseudo: string) {
    return this.http.get<Detail>(`https://dev.cleverapps.io/api/v2/colleagues/${pseudo}` )
  }


}


import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ColleagueService} from "./colleague.service";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient, private collSrv:ColleagueService) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  postVoteLike(pseudo:string){
    this.http.post('https://dev.cleverapps.io/api/v2/votes',{
      like_hate : "LIKE",
      pseudo: pseudo
    }, this.httpOptions).subscribe(() => {
      this.collSrv.callApi();

    })

  }

  postVoteHate(pseudo:string){
    this.http.post('https://dev.cleverapps.io/api/v2/votes',{
      like_hate : "HATE",
      pseudo: pseudo
    }, this.httpOptions).subscribe(() =>{
      this.collSrv.callApi();

    })

  }



  list(): Observable<Vote[]> {
    return this.http.get<Vote[]>('https://dev.cleverapps.io/api/v2/votes')
  }
/*
  list(): Vote[] {
    return this.listVotes;
  }
*/
  private subjectNbLike = new Subject<LikeHate>;
  private subjectNbHate = new Subject<LikeHate>;

  countLike(){
    return this.subjectNbLike.asObservable();
  }
  countHate(){
    return this.subjectNbHate.asObservable();
  }

  clickLike(data:LikeHate){
    this.subjectNbLike.next(data)
  }

  clickHate(data:LikeHate){
    this.subjectNbHate.next(data)
  }

}

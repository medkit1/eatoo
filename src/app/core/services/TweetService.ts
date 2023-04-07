import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TweetSimpleDTO} from '../domain/TweetSimpleDTO';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
    providedIn: 'root'
  })
export class TweetService {

    constructor(private http: HttpClient) { }

    createTweet(lesson: number, tweetSimpleDTO : TweetSimpleDTO){
      return this.http.post(
        endpoints.baseURL + '/api/tweet/add/' + lesson, tweetSimpleDTO
      ).subscribe(
      );
    }
}



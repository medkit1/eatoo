import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LessonTweetSimpleDTO } from 'src/app/core/domain/LessonTweetSimpleDTO';
import { TweetSimpleDTO } from 'src/app/core/domain/TweetSimpleDTO';
import { User } from 'src/app/core/domain/User';
import {LessonService } from 'src/app/core/services/LessonService';
import {TweetService } from 'src/app/core/services/TweetService';
import { UserService } from 'src/app/core/services/UserService';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent  implements OnInit , OnChanges  {

  @Input() element: {lessonId: number, title: string }
  lessonTweetSimpleDTO: LessonTweetSimpleDTO = null;
  tweets: TweetSimpleDTO[]  = null;
  myControl: FormControl = new FormControl();
  user: User= null;
  nick: string = null;

  constructor(private lessonService: LessonService, private tweetService: TweetService, private userService: UserService, private http : HttpClient) { }

  ngOnInit(): void {
    console.log("tweey component on init " + this.element?.lessonId + " " +this.element?.title + " konec")
    this.lessonService.getLessonById(this.element.lessonId).subscribe(
    e => {
      this.lessonTweetSimpleDTO = e
      this.tweets = e.tweets.sort((a, b) => a.tweetId - b.tweetId);
    }
    )

   

   


  }

  

 
 

  ngOnChanges(): void {
    console.log("tweet component on changes " + this.element?.lessonId + " " +this.element?.title + " konec")
    console.log('xxxxxxxxxxxxxxxxxxxxx');  
    this.userService.user.subscribe(e => console.log('iiiiiiiii ' +  e?.nick  ));   
    this.userService.user.subscribe(e => this.user = e);
    console.log('yyyyyyyyyyyyyyyyyyyyy');   
    this.myControl.reset(); 
    this.lessonService.getLessonById(this.element.lessonId).subscribe(
      e => this.lessonTweetSimpleDTO = e
      )

  } 

  save(event) {
    console.log("You entered: ", event.target.value);
    this.lessonTweetSimpleDTO.tweets.push(new TweetSimpleDTO(null, event.target.value , null, this.user.nick))
    console.log("Moje hodnoty: lessonId: ", this.lessonTweetSimpleDTO.lessonId + ". usernick: " + this.nick);
    this.tweetService.createTweet(this.lessonTweetSimpleDTO.lessonId, new TweetSimpleDTO(null, event.target.value , this.user.id, this.user.nick) );
    }

    


}

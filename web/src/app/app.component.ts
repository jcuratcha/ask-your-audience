import { Component, OnInit } from '@angular/core';
import { Poll } from './poll';

import { PollListService } from './services/poll-list.service'

// const MOCKDB: Poll[] = [
//   { question: "this is a mockDB", 
//     options: ["option 1", "option 2", "option 3", "option 4"],
//     votes: [0, 1, 2, 3],
//     voted: false
//   },
//   { question: "this is the second poll", 
//     options: ["hello", "world"],
//     votes: [0, 1],
//     voted: false
//   },
//   { question: "User cannot vote in this poll as theyve already voted", 
//     options: ["cannot", "vote"],
//     votes: [0, 1],
//     voted: true
//   }
// ];

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [PollListService]
})

export class AppComponent implements OnInit { 
  polls: Array<Poll> = [];
  name = 'test'; 

  constructor (private pollListService: PollListService) {}

  ngOnInit() {
    this.pollListService.getAllPolls()
      .subscribe(loadedPolls => {
          loadedPolls.forEach((poll: Poll) => {
          this.polls.unshift(poll);
        });
    });
  }
  constructor (private pollListService: PollListService) {}

  ngOnInit() {
    this.pollListService.getAllPolls()
      .subscribe(loadedPolls => {
          loadedPolls.forEach((poll: Poll) => {
          this.polls.unshift(poll);
        });
    });
  }
}

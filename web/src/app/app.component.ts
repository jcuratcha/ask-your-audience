import { Component, OnInit } from '@angular/core';
import { Poll } from './shared/poll';

import { PollListService } from './services/poll-list.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [PollListService]
})

export class AppComponent implements OnInit {
  polls: Array<Poll> = [];
  name = 'test';

  onNotify($event: Poll){
    let newPoll: Poll = Object.assign({}, $event);
    if ($event != null)
      this.polls.unshift(newPoll);
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

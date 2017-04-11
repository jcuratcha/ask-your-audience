import { Component, OnInit, DoCheck } from '@angular/core';
import { Poll } from './shared/poll';

import { PollListService } from './services/poll-list.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [PollListService]
})

export class AppComponent implements OnInit, DoCheck {
  polls: Array<Poll> = [];
  name = 'test';
  refresh_list = false;

  constructor(private pollListService: PollListService) { }

  ngOnInit() {
    this.pollListService.getAllPolls()
      .subscribe(loadedPolls => {
        loadedPolls.forEach((poll: Poll) => {
          this.polls.unshift(poll);
        });
      });
  }

  ngDoCheck() {
    if (this.refresh_list) {
      this.pollListService.getAllPolls()
        .subscribe(loadedPolls => {
            loadedPolls.reverse().forEach((poll: Poll, index: number) => {
            this.polls[index] = poll;
          });
        }
      );
      
      this.refresh_list = false;
    }
  }

  onNotify($event: Poll) {
    let newPoll: Poll = Object.assign({}, $event);
    if ($event != null)
      this.polls.unshift(newPoll);
  }

  private handle_refresh($event: any) {
    this.refresh_list = true;
    console.log("refresh changed");
  }

  private updatePollList(p_id: number) {

  }
}

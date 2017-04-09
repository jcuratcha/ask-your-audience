import { Component, Input, Output, EventEmitter} from '@angular/core';

import { PollService } from '../services/poll.service'

import { Poll } from './../poll';

@Component({
  selector: 'pop-up',
  templateUrl: 'app/pop-up/pop-up.component.html',
  styleUrls: ['app/pop-up/pop-up.component.css'],
  providers: [PollService]
})
export class PopupComponent{
  @Input() poll: Poll;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  showPoll: boolean = true;

  poll_num: number;

  constructor(private pollService : PollService) {
  }

  vote(index: number){
    this.pollService.addPollVote(this.poll.pollID, index)
      .subscribe(
        (poll) => this.poll = poll,
        );  
  }

  closeDialog(){
    this.close.emit(this.showPoll);
  }



}
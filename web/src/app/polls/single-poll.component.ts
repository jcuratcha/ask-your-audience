import { Component, Input } from '@angular/core';

import{ Poll } from './../poll';

@Component({
  selector: 'single-poll',
  templateUrl: 'app/polls/single-poll.component.html',
  styleUrls:['app/polls/single-poll.component.css']
})
export class SinglePollComponent {
    @Input() poll: Poll;
    active: boolean = false;
    shownText: string;

    ngOnInit(){
      ///TODO: fix character length issue
      this.shownText = this.poll.question;
    }

    toggle(){
      this.active = !this.active;
    }


    closePoll($event: boolean){
      this.active = false;
    }
}
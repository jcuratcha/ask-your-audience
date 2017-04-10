import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import{ Poll } from './../shared/poll';

@Component({
  selector: 'single-poll',
  templateUrl: 'app/polls/single-poll.component.html',
  styleUrls: ['app/polls/single-poll.component.css']
})
export class SinglePollComponent implements OnChanges {
  @Input() poll: Poll;
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  active: boolean = false;
  shownText: string;
  poll_list_refresh: boolean = true;

  ngOnInit() {
    this.shownText = this.poll.question;
  }

  toggle() {
    this.active = !this.active;
  }

  closePoll($event: boolean) {
    this.active = false;
    this.refresh.emit(this.poll_list_refresh);
  }

  update_list($event: any) {
    this.poll_list_refresh = true;
  }
  
  ngOnChanges() {}
}

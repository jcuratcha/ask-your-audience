import { Component, Input, Output, EventEmitter } from '@angular/core';

import{ Poll } from './../poll';

@Component({
  selector: 'pop-up',
  templateUrl: 'app/pop-up/pop-up.component.html',
  styleUrls: ['app/pop-up/pop-up.component.css']
})
export class PopupComponent {
  @Input() poll: Poll;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  showPoll: boolean = true;

  vote(index: number){
    this.poll.votes[index]++;
  }

  closeDialog(){
    this.close.emit(this.showPoll);
  }
}
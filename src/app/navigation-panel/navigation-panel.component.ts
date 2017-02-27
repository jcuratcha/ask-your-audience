import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from './../poll';

@Component({
  selector: 'side-nav',
  templateUrl: 'app/navigation-panel/navigation-panel.component.html',
  styleUrls: ['app/navigation-panel/navigation-panel.component.css']
})
export class SideNavigationComponent {
  @Output() poll: EventEmitter<Poll> = new EventEmitter<Poll>();
  addDialog: boolean = false;
  options: string[] = null; //an array for ng to help display options
  tempArray: string[] = [""];
  question: string;

  addPoll() {
    this.addDialog = true;
  }

  verifyPoll() {
    let newPoll: Poll = new Poll;

    if (this.question.length === 0) {
      alert("Please enter a question!");
      return;
    }

    let empty = true;
    this.tempArray.forEach(element => {
      if (element != "") {
        empty = false;
      }
    });

    if (empty) {
      alert("Please enter at least one option");
      return;
    }
    //has question + at least 1 option
    newPoll.question = this.question;
    newPoll.options = this.tempArray;
    newPoll.voted = false;
    let n = this.tempArray.length;
    //add votes of 0
    newPoll.votes = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);

    this.poll.emit(newPoll);
    this.tempArray = [""];
    this.options = null;
    this.question = null;
    this.addDialog = false;
  }

  addOption() {
    this.options.push("");
    this.tempArray.push("");
  }

  addOptionValue(option: string, index: number) {
    this.tempArray[index] = option;
  }

  initOptions(){
    this.options = [""];
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from './../poll';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'side-nav',
  templateUrl: 'app/navigation-panel/navigation-panel.component.html',
  styleUrls: ['app/navigation-panel/navigation-panel.component.css'],
  providers: [ PollService ]
})

export class SideNavigationComponent {
  @Output() poll: EventEmitter<Poll> = new EventEmitter<Poll>();
  addDialog: boolean = false;
  options: string[] = null; //an array for ng to help display options
  tempArray: string[] = [""];
  question: string;

  constructor(private pollService: PollService) {}

  addPoll() {
    this.addDialog = true;
  }

  close() {
    this.addDialog = false;
  }

  verifyPoll() {
    let newPoll: Poll = new Poll();

    if (this.question === null || this.question === undefined || this.question.trim() == "") {
      alert("Please enter a question!");
      return -2;
    }

    let choices = 0;
    this.tempArray.forEach(element => {
      if (element !== null && element !== undefined && element.trim() != "") {
        choices++;
      }
    });

    if (choices < 2) {
      alert("Please enter at least two options");
      return -1;     // for debugging purposes
    }
    //has question + at least 1 option
    newPoll.question = this.question;
    newPoll.options = this.tempArray;
    newPoll.voted = false;
    let n = this.tempArray.length;
    //add votes of 0
    newPoll.votes = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);

    let id = "";
    this.pollService.createNewPoll(newPoll).subscribe((id: number) => {
        newPoll.pollID = id;
        console.log("Voting in poll with id = " + id);

        this.poll.emit(newPoll);
        this.tempArray = [""];
        this.options = null;
        this.question = null;
        this.addDialog = false;
    });

    return 0;
  }

  addOption() {
    this.options.push("");
    this.tempArray.push("");
  }

  addOptionValue(option: string, index: number) {
    this.tempArray[index] = option;
  }

  initOptions() {
    this.options = [""];
  }
}

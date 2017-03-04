import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import { Router, NavigationExtras } from "@angular/router";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { CheckBox } from 'nativescript-checkbox';
import { topmost } from 'ui/frame';

@Component({
	selector: "list",
	templateUrl: "pages/askQuestion/askQuestion.html",
	styleUrls: ["pages/askQuestion/askQuestion-common.css", "pages/askQuestion/askQuestion.css"],
	providers: [PollListService]
})

export class askQuestionComponent {
clickMessage = '';

  onClickMe() {
    alert("You are my hero!");
  }


 //    pollList: Array<Poll> = [];

	//constructor(private pollListService: PollListService, private router: Router, private page: Page) {}

	//ngOnInit() {
	//	this.pollList = this.createMockPollList();
	//}	

	//public onItemTap(args) {
	//	var tappedItem = args.view;
	//	var poll = tappedItem.bindingContext;
	//	console.log("Question with pollID = " + poll.id + " tapped.");

	//	this.router.navigate(["/answer"]);
	//	// console.log("Question with pollID = " + args.index + " tapped.");
	//}

	//createMockPollList() {
	//	var polls = [];

	//	for (var i = 0; i < 5; ++i) {
	//		polls.unshift(new Poll(i, "Question " + i, ["a1", "a2", "a3"], [i,i+1,i+2], "me"));
	//	}

	//	return polls;
	//}


	//question = "";
 // submit() {
 //   alert("You’re asking:" + this.question);
 // }



//@ViewChild("CB1") FirstCheckBox: ElementRef;
//    constructor() {}
//     toggleCheck() {
//        this.FirstCheckBox.nativeElement.toggle();
//    }
 
//     getCheckProp() {
//        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
//    }
}

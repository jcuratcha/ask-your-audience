import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

import { Poll } from "../../shared/poll/poll";

@Component({
	selector: "list",
	templateUrl: "pages/answer/answer.html",
	styleUrls: ["pages/answer/answer-common.css", "pages/answer/answer.css"]
})

export class AnswerComponent implements OnInit {
	currentPoll: Poll;
	optionList = [];

	constructor(private router: Router, private page: Page) {
		// this.currentPoll = poll;
		// this.optionList = this.currentPoll.options;
		this.currentPoll = new Poll(0, "What is the question?", ["To be", "Not to be"], [0, 0], "you");
		this.optionList = this.currentPoll.options;
	}

	ngOnInit() {

	}

	goToQuestionCreation() {
		console.log("Going to Question Creation page");
	}

	goToQuestionList() {
		console.log("Going to Question List page");
		this.router.navigate(["/list"]);
	}

	goToPersonActivity() {
		console.log("Going to current user's Activity page");
	}
}
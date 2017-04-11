import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

import { Poll } from "../../shared/poll/poll";
import { PollService } from "../../shared/poll/poll.service";

@Component({
	selector: "answer",
	templateUrl: "pages/answer/answer.html",
	styleUrls: ["pages/answer/answer-common.css"],
	providers: [PollService]
})

export class AnswerComponent implements OnInit {
	poll: Poll;
	question: string;
	options: Array<string>;

	private id: number;

	constructor(private pollService: PollService, private router: ActivatedRoute, private page: Page) {
		console.log("Current page: AnswerComponent");
	}

	ngOnInit() {
		this.id = this.router.snapshot.params['id'];
		this.pollService.getPoll(this.id)
			.subscribe(newPoll => {
				this.poll = newPoll;
				this.question = newPoll.question;
				this.options = newPoll.options;
			});
	}


	//
	// Calls server for vote.
	//
    onVoteButtonTapped(eventData) {
		var button = eventData.object;
		var votedOption = button.bindingContext;

		var index = this.options.indexOf(votedOption);

		this.pollService.addPollVote(this.id, index)
			.subscribe(votedPoll => {
				console.log("Current vote: " + JSON.stringify(votedPoll));
			});

	}
}	
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

import { Poll } from "../../shared/poll/poll";
import { PollService } from "../../shared/poll/poll.service";

@Component({
	selector: "answer",
	templateUrl: "pages/answer/answer.html",
	styleUrls: ["pages/answer/answer-common.css", "pages/answer/answer.css"],
	providers: [PollService]
})

export class AnswerComponent implements OnInit {
	poll: Poll;

	constructor(private pollService: PollService, private router: ActivatedRoute, private page: Page) {}

	ngOnInit() {
		let id = this.router.snapshot.params['id'];
		this.pollService.load(id)
			.subscribe(poll => this.poll = poll);
	}
}
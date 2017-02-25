import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";

@Component({
	selector: "list",
	templateUrl: "pages/askQuestion/askQuestion.html",
	styleUrls: ["pages/askQuestion/askQuestion-common.css", "pages/askQuestion/askQuestion.css"],
	providers: [PollListService]
})

export class askQuestionComponent implements OnInit {
	pollList: Array<Poll> = [];

	constructor(private pollListService: PollListService) {}

	ngOnInit() {
		this.pollListService.load()
		.subscribe(loadedPolls => {
			loadedPolls.forEach((pollObject) => {
				this.pollList.unshift(pollObject);
				});
		});
	}	
}
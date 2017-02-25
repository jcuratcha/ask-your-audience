import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";

@Component({
	selector: "list",
	templateUrl: "pages/list/list.html",
	styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
	providers: [PollListService]
})

export class ListComponent implements OnInit {
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
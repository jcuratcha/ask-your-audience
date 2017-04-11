import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Page } from "ui/page"

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

	constructor(private pollListService: PollListService, private router: Router, private page: Page) {
		console.log("Current page: ListComponent");
	}

	ngOnInit() {
		this.pollListService.getAllPolls()
		.subscribe(loadedPolls => {
			loadedPolls.forEach((pollObject) => {
				this.pollList.unshift(pollObject);
				});
		});
	}	


	//
	// Calls server for information(options) for the clicked poll
	//
	public onItemTap(args) {
		var tappedItem = args.view;
		var poll = tappedItem.bindingContext;
		console.log("Question with pollID = " + poll.id + " tapped.");
		this.router.navigate(["/answer", poll.id]);
	}
}
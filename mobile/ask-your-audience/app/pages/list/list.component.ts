import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import { Router, NavigationExtras } from "@angular/router";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap"

@Component({
	selector: "list",
	templateUrl: "pages/list/list.html",
	styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
	providers: [PollListService]
})

export class ListComponent implements OnInit {
	pollList: Array<Poll> = [];
	pollListJson : string;

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

		// this.pollList = this.createMockPollList();
	}	

	public onItemTap(args) {
		var tappedItem = args.view;
		var poll = tappedItem.bindingContext;
		console.log("Question with pollID = " + poll.id + " tapped.");
		this.router.navigate(["/answer", poll.id]);
		// console.log("Question with pollID = " + args.index + " tapped.");
	}

	createMockPollList() {
		var polls = [];

		for (var i = 0; i < 5; ++i) {
			polls.unshift(new Poll(i, "Question " + i, ["a1", "a2", "a3"], [i,i+1,i+2], "me"));
		}

		return polls;
	}
}
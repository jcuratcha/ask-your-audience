import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";

@Component({
	selector: "list",
	templateUrl: "pages/myActivity/myActivity.html",
	styleUrls: ["pages/myActivity/myActivity-common.css", "pages/myActivity/myActivity.css"],
	providers: [PollListService]
})

export class myActivityComponent implements OnInit {
	groceryList: Array<Object> = [];

  ngOnInit() {
    this.groceryList.push({ name: "Question1" });
    this.groceryList.push({ name: "Question2" });
    this.groceryList.push({ name: "Question3" });
  }

}
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import tabViewModule = require("ui/tab-view");

@Component({
	selector: "list",
	templateUrl: "pages/answeredQuestions/answeredQuestions.html",
	styleUrls: ["pages/answeredQuestions/answeredQuestions-common.css", "pages/answeredQuestions/answeredQuestions.css"],
	providers: [PollListService]
})

export class answeredQuestionsComponent implements OnInit {

ngOnInit() {
    
  }

}
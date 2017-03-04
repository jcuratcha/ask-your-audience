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

  submit() {
    console.log("hello");
  }
}
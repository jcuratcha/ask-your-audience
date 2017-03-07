import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
	selector: "list",
	templateUrl: "pages/home/home.html",
	styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
})

export class HomeComponent {

	constructor(private router: Router, private page: Page) {}

	goToQuestionCreation() {
		console.log("Going to Question Creation page");
		this.router.navigate(["/item-animations"]);
	}

	goToQuestionList() {
		console.log("Going to Question List page");
		this.router.navigate(["/answeredQuestions"]);
	}

	goToPersonActivity() {
		console.log("Going to current user's Activity page");
		this.router.navigate(["/myActivity"]);
	}
}
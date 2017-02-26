import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
	selector: "home",
	templateUrl: "pages/home/home.html",
	styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
})

export class HomeComponent {

	constructor(private router: Router, private page: Page) {
		console.log("Current page: HomeComponent");
	}

	goToQuestionCreation() {
		console.log("Going to Question Creation page");
	}

	goToQuestionList() {
		console.log("Going to Question List page");
		this.router.navigate(["/list"]);
	}

	goToPersonActivity() {
		console.log("Going to current user's Activity page");
	}
}
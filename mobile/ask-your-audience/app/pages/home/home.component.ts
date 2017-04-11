import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
	selector: "home",
	templateUrl: "pages/home/home.html",
	styleUrls: ["pages/home/home-common.css"]
})

export class HomeComponent {

	constructor(private router: Router, private page: Page) {
		console.log("Current page: HomeComponent");
	}

	goToQuestionCreation() {
	console.log("Going to Question Creation page");
		this.router.navigate(["/askQuestion"]);
	}

	goToQuestionList() {
	console.log("Going to Answer Question page");
		this.router.navigate(["/list"]);
	}
}
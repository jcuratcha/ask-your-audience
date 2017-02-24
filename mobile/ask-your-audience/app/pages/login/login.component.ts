import { Component, OnInit } from "@angular/core";
import { Person } from "../../shared/person/person";
import { PersonService } from "../../shared/person/person.service";
import { Router } from "@angular/router";

import { Page } from "ui/page";

@Component({
	selector: "my-app",
	providers: [PersonService],
	templateUrl: "pages/login/login.html",
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent implements OnInit {
  person: Person;
  isLoggingIn = true;

	constructor(private router: Router, private personService: PersonService, private page: Page) {
		console.log("Current page: LoginComponent");
		this.person = new Person();
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	submit() {
		if (this.isLoggingIn) {
		this.login();
		} else {
			this.signUp();
		}
	}

	login() {
		this.router.navigate(["/home"]);
		/*
		Change this back to the actual login method,
		when we have login information
		*/
		// this.personService.login(this.person)
		// .subscribe(
		// 	() => this.router.navigate(["/list"]),
		// 	(error) => alert("Unfortunately we could not find your account.")
		// );
	}

	signUp() {
		this.personService.register(this.person)
		.subscribe(
		() => {
			alert("Your account was successfully created.");
			this.toggleDisplay();
		},
		() => alert("Unfortunately we were unable to create your account.")
		);
	}
	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}
}
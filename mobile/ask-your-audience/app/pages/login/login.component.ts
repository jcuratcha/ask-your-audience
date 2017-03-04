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

	login() {
		this.router.navigate(["/home"]);
	}
}
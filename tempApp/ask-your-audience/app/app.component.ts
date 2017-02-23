import { Component } from "@angular/core";
import { Person } from "./shared/person/person";
import { PersonService } from "./shared/person/person.service";

@Component({
  selector: "my-app",
  providers: [PersonService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class AppComponent {
  person: Person;
  isLoggingIn = true;

	constructor(private personService: PersonService) {
		this.person = new Person();
	}
	submit() {
		if (this.isLoggingIn) {
		this.login();
		} else {
			this.signUp();
		}
	}
	login() {
		// TODO: Define
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
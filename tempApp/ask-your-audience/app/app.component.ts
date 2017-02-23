import { Component } from "@angular/core";
import { User } from "./shared/person/person";

@Component({
  selector: "my-app",
  template: `
  	<StackLayout>
	    <TextField hint="Email Address" keyboardType="email" [(ngModel)]="email"
  			autocorrect="false" autocapitalizationType="none"></TextField>
	    <TextField hint="Password" secure="true"></TextField>
	    <Label text="Leave blank to go anonymous" class="sub-description"></Label>

	    <Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
		<Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
	</StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class AppComponent {
  person: Person;
  isLoggingIn = true;

  constructor() {
    this.person = new Person();
  }
  submit() {
    alert("You’re using: " + this.person.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
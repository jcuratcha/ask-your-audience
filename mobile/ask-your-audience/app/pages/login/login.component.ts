import { Component, OnInit } from "@angular/core";
import { Person } from "../../shared/person/person";
import { Router } from "@angular/router";
import { UserService } from "../../shared/person/user.service";

import { Page } from "ui/page";

@Component({
	selector: "my-app",
	providers: [UserService],
	templateUrl: "pages/login/login.html",
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent implements OnInit {
  person: Person;
  isLoggingIn = true;

    loggedIn: boolean = false;
    registerUser: boolean = false;
    errorMessage: string = '';
    successMessage: string = '';

	userName:string='';
	Password:string='';

	constructor(private router: Router,private page: Page,private userService: UserService) {
		console.log("Current page: LoginComponent");
		this.person = new Person();
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	login() {
		this.router.navigate(["/home"]);
	}

	register(){
		this.router.navigate(["/register"]);
	}

	 sendCredentials() {
		 
        var username=this.userName;
		var password=this.Password;

        this.errorMessage = '';
        this.successMessage = '';

        if (username === null || username === undefined || username.trim() == "") {
            this.errorMessage = "Please enter a username.";
            return "ERROR: No username has been provided (or is blank space)";
        }

        if (password === null || password === undefined || password.trim() == "") {
            this.errorMessage = "Please enter a password.";
            return "ERROR: No password has been provided (or is blank space)";
        }

        let result = "";
        let user = "";
        this.userService.authenticate(username, password).subscribe((result: string) => {
            if(result){
                this.loggedIn = true;
                this.userService.getLoggedInUser().subscribe((user: string) => {
                    console.log(user);
                });
            } else {
                this.errorMessage = "You have entered an incorrect username or password.";
            }
        });

		this.router.navigate(["/home"]);
    }
}
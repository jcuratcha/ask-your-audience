import { Component, OnInit } from "@angular/core";
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

    isLoggingIn = true;

    loggedIn: boolean = false;
    registerUser: boolean = false;
    successMessage: string = '';

	userName:string='';
	Password:string='';

	constructor(private router: Router,private page: Page,private userService: UserService) {
		console.log("Current page: LoginComponent");
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	register(){
		this.router.navigate(["/register"]);
	}


    // Send user information to server(name,password)
	// Calls server for credential check
	//if checked, go to home page,if not, keep trying
	sendCredentials() {
        var username=this.userName;
		var password=this.Password;

        if (username === null || username === undefined || username.trim() == "") {
            alert("Please enter a username.");
            return ;
        }

        if (password === null || password === undefined || password.trim() == "") {
            alert("Please enter a password.");
            return ;
        }

        let result = "";
        let user = "";
        this.userService.authenticate(username, password).subscribe((result: string) => {
            if(result){
                this.loggedIn = true;
                this.userService.getLoggedInUser().subscribe((user: string) => {
                    console.log(user);
                    this.router.navigate(["/home"]);
                });
            } else {
                alert("You have entered an incorrect username or password.");
                return;
            }
        });

    }
}
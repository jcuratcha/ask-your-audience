import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router"
import { Page } from "ui/page";
import { UserService } from "../../shared/person/user.service";

import dialogs = require("ui/dialogs");

@Component({
	selector: "register",
	providers: [UserService],
 	templateUrl: "pages/register/register.html",
 	styleUrls: ["pages/register/register-common.css", "pages/register/register.css"]
})

export class RegisterComponent implements OnInit {
    errorMessage: string = '';
    errorMessage2: string = '';
    successMessage: string = '';
	registerUser: boolean = false;
	loggedIn: boolean = false;

	userName:string='';
	userPassword:string='';
	displayName:string='';

	constructor(private router: ActivatedRoute, 
                private page: Page,
                private userService: UserService, 
                private routerExtensions: RouterExtensions) {
		console.log("Current page: Register");
	}

	ngOnInit() {
	}

    //
	// Calls server to register a new user.
	//
    
    sendRegistration() {
       var displayUser=this.displayName;
	   var username=this.userName;
	   var password=this.userPassword;

        if (displayUser === null || displayUser === undefined || displayUser.trim() == "") {
            alert("Please enter a display name.");
            return ;
        }

        if (username === null || username === undefined || username.trim() == "") {
            alert("Please enter a username.");
            return ;
        }

        if (password === null || password === undefined || password.trim() == "") {
            alert("Please enter a password.");
            return ;
        }

         this.userService.register(username,password,displayUser).subscribe(data => {
           if(data != -1) {
                this.successMessage = "Your profile has been successfully created!";
                this.registerUser = false;
                dialogs.alert({
                    title: "Registration Complete",
                    message: this.successMessage,
                    okButtonText: "Take me back to Login!"
                }).then(() => {
                    console.log("Dialog displayed, returning to login");
                    this.routerExtensions.back();
                });

            } else {
                this.errorMessage2 = "This username is already taken, please choose another one!"
                alert(this.errorMessage2);
            }
        });

	}
}	
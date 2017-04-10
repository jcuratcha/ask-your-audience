import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";
import { UserService } from "../../shared/person/user.service";

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


	constructor(private router: ActivatedRoute, private page: Page,private userService: UserService) {
		console.log("Current page: Register");
	}

	ngOnInit() {
	}

	sendRegistration() {
		console.log("resigter testing\n");
           this.userService.register("frank","12345","tby").subscribe(data => {
           if(data != -1) {
                this.successMessage = "Your profile has been created.";
                this.registerUser = false;
				console.log("good\n");
            } else {
                this.errorMessage2 = "This username is already taken."
				console.log("bad\n")
            }
        });

	}

	

}	
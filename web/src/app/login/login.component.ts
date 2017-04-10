import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
    loggedIn: boolean = window.sessionStorage['id'];
    registerUser: boolean = false;
    errorMessage: string = '';
    errorMessage2: string = '';
    successMessage: string = '';

    constructor(private userService: UserService) {}

    sendCredentials(username: string, password: string) {
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
                    window.sessionStorage.setItem("user", user);
                });
            } else {
                this.errorMessage = "You have entered an incorrect username or password.";
            }
        });
    }
    sendRegistration(displayUser: string, username: string, password: string) {
        this.errorMessage = '';
        this.errorMessage2 = '';
        this.successMessage = '';

        if (displayUser === null || displayUser === undefined || displayUser.trim() == "") {
            this.errorMessage2 = "Please enter a display name.";
            return "ERROR: No display username has been provided (or is blank space)";
        }

        if (username === null || username === undefined || username.trim() == "") {
            this.errorMessage2 = "Please enter a username.";
            return "ERROR: No username has been provided (or is blank space)";
        }

        if (password === null || password === undefined || password.trim() == "") {
            this.errorMessage2 = "Please enter a password.";
            return "ERROR: No password has been provided (or is blank space)";
        }

        this.userService.register(username, password, displayUser).subscribe(data => {
            if(data != -1) {
                this.successMessage = "Your profile has been created.";
                this.registerUser = false;
            } else {
                this.errorMessage2 = "This username is already taken."
            }
        });
    }


}

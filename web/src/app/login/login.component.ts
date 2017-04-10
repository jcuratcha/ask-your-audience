import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
    loggedIn: boolean = false;
    username: string;
    password: string;

    constructor(private userService: UserService) {}

    sendCredentials() {
        if (this.username === null || this.username === undefined || this.username.trim() == "") {
            alert("Please enter a username.");
            return "ERROR: No username has been provided (or is blank space)";
        }

        if (this.password === null || this.password === undefined || this.password.trim() == "") {
            alert("Please enter a password.");
            return "ERROR: No password has been provided (or is blank space)";
        }

        let result = "";
        this.userService.authenticate(this.username, this.password).subscribe((result: string) => {
            if(result){
                this.loggedIn = true;
            }
        });
    }

    sendRegistration() {
        this.userService.register(this.username, this.password, "Bobby Joe").subscribe();
    }


}

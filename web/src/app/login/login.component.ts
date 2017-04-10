import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
    loggedIn: boolean = true;
    username: string;
    password: string;

    constructor(private userService: UserService) {}

    sendCredentials() {
        this.userService.authenticate("test", "test2").subscribe((user: this.username, pass: this.password) => {
      });
    }


}

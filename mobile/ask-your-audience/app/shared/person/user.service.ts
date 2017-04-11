import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { User } from "./user";

@Injectable()
export class UserService {
	constructor(private http: Http) {}

	private postRegisterUrl = "/aya/api/register";
	private postAuthenticateUrl = "/aya/api/authenticate";
	private getUserUrl = "/aya/api/get-profiles/"
	private user: User;
	private userID: number;

	private dbUrl = Config.apiUrl;
	public preventSending:boolean = false;


	//
	// Calls server to register a new user.
	//
	register(username: string, password: string, displayName: string) {
		let headers = this.createRequestHeaders();
		headers.append('Content-Type', 'application/json');

		let options = new RequestOptions({ headers: headers });

		console.log("Registering username = " + username);

		if (this.preventSending === false)
		{
			return this.http.post(Config.apiUrl + this.postRegisterUrl, {
				"username": username,
				"password": password,
				"displayName": displayName
			}, options)
			.map(res => res.json())
			.map(data => {
			        console.log(data);
					let userID: number = -1;
					if(data['profileID'] !== null) {
							userID = data['profileID'];
								console.log("Username created.");
					} else {
							console.log("Username is already in use.");
					}

					return userID;
			})
			.catch(this.handleErrors);
		}
		else
			return null;
	}

	//
	// Calls server to check if user credentials are valid.
	//
	authenticate(username: string, password: string) {
		let headers = this.createRequestHeaders();
		headers.append('Content-Type', 'application/json');

		let options = new RequestOptions({ headers: headers });

		console.log("	Authenticating username = " + username);

		if (this.preventSending === false)
		{
			return this.http.post(this.dbUrl + this.postAuthenticateUrl, {
				"username": username,
				"password": password
			}, options)
			.map(res => res.json())
      .map(data => {
          let newUserID: number = null;
          if (data['success']) {
              newUserID = data['profileID'];
							this.userID = newUserID;
					} else {
              console.log(data['message']);
					}
          return newUserID;
      })
			.catch(this.handleErrors);
		}
		else
			return null;
	}

	//
	// Calls server to get user details
	//
	getLoggedInUser() {
		let headers = this.createRequestHeaders();
		if (this.preventSending === false)
		{
			return this.http.get(this.dbUrl + this.getUserUrl + this.userID, {
				headers : headers
			})
			.map(res => res.json()['profiles'][0])
			.map(data => {
					this.user = new User(data.profileID, data.username, data.displayName, data.votedPolls);
					console.log(this.user);
					return JSON.stringify(this.user);
			})
			.catch(this.handleErrors);
		}
		else
			return null;
	}

	//
	// Creates request headers for making Http requests
	//
	private createRequestHeaders() {
		let headers	= new Headers();

		return headers;
	}

	//
	// Simple logging infrastructure to handle errors
	//
	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}

	// stub method to test the function
	test_createRequestHeaders() {
		return this.createRequestHeaders();
	}
}

import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../shared/config";
import { User } from "../shared/user";

@Injectable()
export class UserService {
	constructor(private http: Http) {}

	private postRegisterUrl = "/aya/api/register";
	private postAuthenticateUrl = "/aya/api/authenticate";
	private getUserUrl = "/aya/api/get-profiles/";
	private getUserVotes = "/aya/api/user-vote/";

	private dbUrl = Config.getDbUrl();
	public preventSending:boolean = false;

	//
	// Calls server to add poll to users voted votedPolls
	//
	addVote(pollID: number){
		let headers = this.createRequestHeaders();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({ headers: headers });

		console.log("Adding votes to poll " + pollID + " for " + window.sessionStorage.getItem("id"));

		if( this.preventSending === false){
			return this.http.get(this.dbUrl + this.getUserVotes + window.sessionStorage.getItem("id") + "/" + pollID, {
				headers: headers
			})
			.map(res => res.json())
			.map(data =>{
				console.log(data)
			})
			.catch(this.handleErrors);
		}else{
			return null;
		}
	}
	//
	// Calls server to register a new user.
	//
	register(username: string, password: string, displayName: string) {
		let headers = this.createRequestHeaders();
		headers.append('Content-Type', 'application/json');

		let options = new RequestOptions({ headers: headers });

		console.log("	Registering username = " + username);

		if (this.preventSending === false)
		{
			return this.http.post(this.dbUrl + this.postRegisterUrl, {
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
							window.sessionStorage.setItem("id", String(newUserID));
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
		if (this.preventSending === false && window.sessionStorage.getItem("id"))
		{
			return this.http.get(this.dbUrl + this.getUserUrl + window.sessionStorage.getItem("id"), {
				headers : headers
			})
			.map(res => res.json()['profiles'][0])
			.map(data => {
					var user = new User(data.profileID, data.username, data.displayName, data.votedPolls);
					console.log(user);
					return JSON.stringify(user);
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

import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../shared/config";

@Injectable()
export class UserService {
	constructor(private http: Http) {}

	private postRegisterUrl = "/aya/api/register";
	private postAuthenticateUrl = "/aya/api/authenticate";

	private dbUrl = Config.getDbUrl();
	public preventSending:boolean = false;


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
					if(data['profileID'] !== null)
							userID = data['profileID'];
					else
							console.log("Username is already in use.");
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
		console.log(password);

		if (this.preventSending === false)
		{
			return this.http.post(this.dbUrl + this.postAuthenticateUrl, {
				"username": username,
				"password": password
			}, options)
			.map(res => res.json())
      .map(data => {
          let token: string = null;
          if(data['success'])
              token = data['token'];
          else
              console.log(data['message']);
          return token;
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

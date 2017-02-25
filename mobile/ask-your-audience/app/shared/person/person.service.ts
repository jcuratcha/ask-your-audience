import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http"
import { Observable } from "rxjs/Rx"
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Person } from "./person";
import { Config } from "../config";

@Injectable()
export class PersonService {

	constructor(private http: Http) {}

	register(person: Person) {
		let headers = new Headers();
		headers.append("Content-type", "application/json");

		return this.http.post(
			Config.apiUrl + "person",
			JSON.stringify({
				"email" : "What should I buy?",
				"ipaddress" : "663b:400c:e5fa:6638:d321:99f:177:40b4"
			}),
			{ headers: headers}
		)
		.catch(this.handleErrors);	
	}

	login(person: Person) {
		let headers = new Headers();
		headers.append("Content-Type", "application/json");

		return this.http.post(
			Config.apiUrl + "oauth/token",
			JSON.stringify({
				"username": person.email,
				"password": person.password,
				"grant_type": "password"
			}),
			{ headers: headers }
		)
		.map(response => response.json())
		.do(data => {
			Config.token = data.Result.access_token;
		})
		.catch(this.handleErrors);
	}

	handleErrors(error: Response) {
		console.log("Error: " + JSON.stringify(error.json()));
		return Observable.throw(error);
	}

	forceLogin(error: Response) {

	}
}
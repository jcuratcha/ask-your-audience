import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollService {
	constructor(private http: Http) {}

	//
	// Calls server to get the poll with the id passed in.
	//
	getPoll(id: number) {
		let headers = this.createRequestHeaders();

		console.log("Fetching poll id = " + id);

		return this.http.get(Config.apiUrl + "/aya/api/get-polls/" + id, {
			headers: headers
		})
		.map(res => res.json()['polls'][0])
		.map(data => {
			let options = [];
			let votes = [];

			data['options'].forEach((option) => {
				options.push(option);
			})

			data['votes'].forEach((vote) => {
				votes.push(vote);
			})
			// data.forEach((poll) => {
			// 	return new Poll(data.pollID, data.question, data.options, data.votes, data.owner);
			// });

			return new Poll(data.pollID, data.question, options, votes, data.owner);

		})
		.catch(this.handleErrors);
	}

	//
	// Creates request headers for making Http requests
	//
	private createRequestHeaders() {
		let headers	= new Headers();

		headers.append("Authorization", "Bearer " + Config.token);

		return headers;
	}

	// 
	// Simple logging infrastructure to handle errors
	//
	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}
}
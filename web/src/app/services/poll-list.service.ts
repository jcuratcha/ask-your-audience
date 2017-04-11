import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Config } from "../shared/config";
import { Poll } from "../shared/poll";

@Injectable()
export class PollListService {
	constructor(private http: Http) {}

	private getAllPointsUrl = "/aya/api/get-polls";

	private dbUrl = Config.getDbUrl();

	//
	// Fetch all available polls from database
	//
	getAllPolls(): Observable<Poll[]> {
		let headers = this.createRequestHeaders();

		console.log("Fetching all polls.");
		console.log("Current dbUrl: " + this.dbUrl);

		return this.http.get(this.dbUrl + this.getAllPointsUrl, {
			headers: headers
		})
		.map(res => res.json()['polls'])
		.map(data => {
			let pollList: Array<Poll> = [];
			data.forEach((poll: any) => {
				let newPoll = new Poll (poll.pollID, poll.question, poll.options, poll.votes, poll.owner, poll.active);
				newPoll.voted = false;

				pollList.push(newPoll);
			});
			return pollList;
		})
		.catch(this.handleErrors);
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
		console.log(JSON.stringify(error));
		return Observable.throw(error);
	}

	// stub method to test the function
	test_createRequestHeaders() {
		return this.createRequestHeaders();
	}
}

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollListService {
	constructor(private http: Http) {}

	//
	// Calls server to get all polls
	//

	getAllPolls() {
		let headers = this.createRequestHeaders();

		console.log("Fetching all polls.");

		return this.http.get(Config.apiUrl +  "/aya/api/get-polls/" , {
			headers: headers
		})
		.map(res => res.json()['polls'])
		.map(data => {
			let pollList = [];
			data.forEach((poll) => {
				let newPoll: Poll;

				try {
					newPoll = new Poll(
						poll.pollID,
						poll.question,
						poll.options,
						poll.votes,
						poll.owner
					)
					pollList.push(newPoll);
				} catch (error) {
					console.log("Poll with ID: " + poll.pollID + " is malformed, exception: [" + error + "]");
				}
			});
			return pollList;
		})
		.catch(this.handleErrors);
	}

	private createRequestHeaders() {
		let headers	= new Headers();

		headers.append("Authorization", "Bearer " + Config.token);

		return headers;
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}
}
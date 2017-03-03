import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "../poll";

@Injectable()
export class PollListService {
	constructor(private http: Http) {}

	private getAllPointsUrl = "/aya/api/get-polls";

	getAllPolls(): Observable<Poll[]> {
		let headers = this.createRequestHeaders();

		console.log("Fetching all polls.");

		return this.http.get(Config.apiUrl + this.getAllPointsUrl, {
			headers: headers
		})
		.map(res => res.json()['polls'])
		.map(data => {
			let pollList: Array<Poll> = [];
			data.forEach((poll: any) => {
				let newPoll = new Poll (poll.pollID, poll.question, poll.options, poll.votes, poll.owner);
				newPoll.voted = false;

				pollList.push(newPoll);
			});
			return pollList;
		})
		.catch(this.handleErrors);
	}

	private createRequestHeaders() {
		let headers	= new Headers();

		return headers;
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error));
		return Observable.throw(error);
	}
}

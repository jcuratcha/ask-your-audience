import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollListService {
	constructor(private http: Http) {}

	private getAllPointsUrl = "/aya/api/get-polls";
    
    addPolls(){
		console.log("add polls\n");
	}


	getAllPolls() {
		let headers = this.createRequestHeaders();

		console.log("Fetching all polls.");

		return this.http.get(Config.apiUrl + this.getAllPointsUrl, {
			headers: headers
		})
		.map(res => res.json()['polls'])
		.map(data => {
			let pollList = [];
			data.forEach((poll) => {
				pollList.push(new Poll(
					poll.pollID,
					poll.question,
					poll.options,
					poll.votes,
					poll.owner
				));
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
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollListService {
	constructor(private http: Http) {}

	load() {
		let headers = new Headers();
		// headers.append("Authorization", "Bearer " + Config.token);

		console.log("Fetching polls.");

		return this.http.get(Config.apiUrl + "/aya/api/get-polls", {
			headers: headers
		})
		.map(res =>
			res.json()
		)
		.map(data => {
			let pollList = [];
			data.Result.forEach((poll) => {
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

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}
}
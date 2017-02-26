import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollService {
	constructor(private http: Http) {}

	getPoll(id: number) {
		let headers = this.createRequestHeaders();

		console.log("Fetching poll id = " + id);

		return this.http.get(Config.apiUrl + "/aya/api/get-polls/" + id, {
			headers: headers
		})
		.map(res => res.json()['polls'])
		.map(data => {
			console.log(JSON.stringify(data));
			return new Poll(data.pollID, data.question, data.options, data.votes, data.owner);
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
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollService {
	constructor(private http: Http) {}

	load(id: number) {
		let headers = new Headers();

		console.log("Fetching poll id = " + id);

		return this.http.get(Config.apiUrl + "/aya/api/get-polls/" + id, {
			headers: headers
		})
		.map(res => res.json())
		.map(data => {
			var result = data.Result;
			return new Poll(result.pollID, result.question, result.options, result.votes, result.owner);
		})
		.catch(this.handleErrors);
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}
}
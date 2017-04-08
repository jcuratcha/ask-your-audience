import { Injectable } from "@angular/core";
import { Http, Headers ,RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Poll } from "./poll";

@Injectable()
export class PollService {
	constructor(private http: Http) {}

	private postNewPollUrl = "/aya/api/create-polls";

	//
	// Calls server to get the poll with the id passed in.
	//
	getPoll(id: number) {
		let headers = this.createRequestHeaders();

		console.log("	Fetching poll id = " + id);

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
			
			return new Poll(data.pollID, data.question, options, votes, data.owner);

		})
		.catch(this.handleErrors);
	}

	//
	//	Adds a vote for an option on the current poll id passed in
	//
	addPollVote(id: number, vote: number) {
		let headers = this.createRequestHeaders();

		console.log("	Adding vote for pollID: " + id + "; optionID: " + vote);
		console.log("	" + Config.apiUrl + "/aya/api/vote/" + id + '/' + vote + "/")

		return this.http.get(Config.apiUrl + "/aya/api/vote/" + id + '/' + vote + "/", {
			headers: headers
		})
		.map(res => res.json())
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

    createNewPoll(question:string,options:string[]) {
		let headers = this.createRequestHeaders();
		headers.append('Content-Type', 'application/json');

		let questionOptions = new RequestOptions({ headers: headers });

		 return this.http.post(Config.apiUrl + this.postNewPollUrl, {
		 	"questions": question,
		 	"options": options
		 }, options)
		 .map(res => res.json()['pollID'])
		 .catch(this.handleErrors);
	}
    
	// 
	// Simple logging infrastructure to handle errors
	//
	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}
}
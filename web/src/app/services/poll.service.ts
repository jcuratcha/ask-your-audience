import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../shared/config";
import { Poll } from "../shared/poll";

@Injectable()
export class PollService {
	constructor(private http: Http) {}

	private postNewPollUrl = "/aya/api/create-polls";
	private getPollUrl = "/aya/api/get-polls/";
	private addVoteUrl = "/aya/api/vote/";

	private dbUrl = Config.getDbUrl();
	public preventSending:boolean = false;

	//
	// Calls server to get the poll with the id passed in.
	//
	getPoll(id: number) {
		let headers = this.createRequestHeaders();

		console.log("	Fetching poll id = " + id);

		if (this.preventSending === false)
		{
			return this.http.get(this.dbUrl + this.getPollUrl + id, {
				headers: headers
			})
			.map(res => res.json()['polls'][0])
			.map(data => {
				let options : string[] = [];
				let votes : number[] = [];

				data['options'].forEach((option: string) => {
					options.push(option);
				})

				data['votes'].forEach((vote: number) => {
					votes.push(vote);
				})
				// data.forEach((poll) => {
				// 	return new Poll(data.pollID, data.question, data.options, data.votes, data.owner);
				// });

				return new Poll(data.pollID, data.question, options, votes, data.owner, data.active);

			})
			.catch(this.handleErrors);
		}
		else
			return null;
	}

	//
	//	Adds a vote for an option on the current poll id passed in
	//
	addPollVote(id: number, vote: number) {
		let headers = this.createRequestHeaders();

		let fullRequestUrl = this.dbUrl + this.addVoteUrl + id + '/' + vote + '/';

		console.log("	Adding vote for pollID: " + id + "; optionID: " + vote);
		console.log("	" + fullRequestUrl)

		if (this.preventSending === false)
		{
			return this.http.get(fullRequestUrl, {
				headers: headers
			})
			.map(res => res.json())
			.catch(this.handleErrors);
		}
		else
			return null;
	}

	//
	//	Send a post request with a new poll to add to the database
	//
	createNewPoll(poll: Poll) {
		let headers = this.createRequestHeaders();
		headers.append('Content-Type', 'application/json');

		let options = new RequestOptions({ headers: headers });

		console.log("Creating new poll");

		if (this.preventSending === false)
		{
			return this.http.post(this.dbUrl + this.postNewPollUrl, {
				"questions": poll.question,
				"options": poll.options
			}, options)
			.map(res => res.json()['pollID'])
			.catch(this.handleErrors);
		}
		else
			return null;
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
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}

	// stub method to test the function
	test_createRequestHeaders() {
		return this.createRequestHeaders();
	}
}

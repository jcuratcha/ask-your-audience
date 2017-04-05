import {} from 'jasmine';
import { TestBed } from "@angular/core/testing";
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

import { Poll } from '../shared/poll/poll';
import { PollService } from '../shared/poll/poll.service';

describe("The poll service for fetching data", function() {
    let pollService: PollService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
    });

    it("should return polls with valid data", function() {
        let poll = pollService.getPoll(1);
    });

    it("should throw an exception if data is not valid", function() {
        let poll = pollService.getPoll(1);
    });

    it("should throw an exception if no info provided on vote", function() {
        let poll = pollService.addPollVote(1,1); 
    });
});

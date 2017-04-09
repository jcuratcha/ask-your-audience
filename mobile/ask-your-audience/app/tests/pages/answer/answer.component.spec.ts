import "reflect-metadata";
import {} from 'jasmine';

import { Observable } from "rxjs/Rx";
import { EventData } from "data/observable"

import { AnswerComponent } from '../../../pages/answer/answer.component';
import { Poll } from '../../../shared/poll/poll';

describe("Answer Component", function() {
    var pollService, router;
    var answerComponent: AnswerComponent;
    var poll: Poll;
    
    beforeEach(function() {
        poll = new Poll(1, "Hello world", ["one", "two"], [2, 10], "me");
        pollService = {
            getPoll : function(id: number) {
                return Observable.of(poll);
            },

            addPollVote : function(id: number, vote: number) {
                poll.votes[vote]++;
                return Observable.of(poll);
            }
        }

        router = {
            snapshot: {
                params: {
                    id: 1
                }
            }
        }

        spyOn(pollService, "getPoll").and.returnValue(Observable.of(poll));
        spyOn(pollService, "addPollVote").and.callThrough().and.returnValue(Observable.of(poll));

        answerComponent = new AnswerComponent(pollService, router, null);
    });

    it("should call PollService.getPoll() during ngOnInit()", function() {
        answerComponent.ngOnInit();

        expect(pollService.getPoll).toHaveBeenCalled();
    });

    it("should call PollService.addPollVote() during onVoteButtonTapped()", function() {
        let eventData = {
            object: {
                bindingContext: "one"
            }
        };

        answerComponent.options = poll.options;

        answerComponent.onVoteButtonTapped(eventData);
        expect(pollService.addPollVote).toHaveBeenCalled();
    });
})
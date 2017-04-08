import {} from 'jasmine';

import { Poll } from '../../shared/poll/poll';

describe("Poll creation", function() {

    it("works if it contains valid information", function() {
        let poll = new Poll(1, "Is this a question", ["no", "yes"], [0, 1], "nobody");
        expect(poll.id).toBeGreaterThan(0);
        expect(poll.question).not.toBeNull();
        expect(poll.options.length).toBeGreaterThan(0);
        expect(poll.votes.length).toBeGreaterThan(0);
        expect(poll.votes.length === poll.options.length).toBe(true);
        expect(poll.owner).not.toBeNull();
    });

    it("throws an exception if null data is passed in", function() {
        var createPoll = function() {
            new Poll(null, null, null, null, null); 
        }  

        expect(createPoll).toThrow();
    });

    it("throws an exception if number of options is less than 2", function() {
        var createPoll = function() {
            new Poll(1, "Is this a question", ["no"], [0], "nobody");
        }

        expect(createPoll).toThrow();
    });

    it("throws an exception if number of options is different from the votes", function() {
        var createPoll = function() {
            new Poll(1, "Is this a question", ["no", "yes", "maybe"], [0,3,4,5], "nobody");
        }

        expect(createPoll).toThrow();        
    });
});

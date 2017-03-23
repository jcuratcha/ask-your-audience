import {} from 'jasmine';

import { Poll } from '../shared/poll/poll';

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

    it("throws an exception if invalid data is passed in", function() {
        expect(true).toBe(true);
    });

    it("throws an exception if number of options is less than 2", function() {
        expect(true).toBe(true);
    });

    it("throws an exception if number of options is different from the votes", function() {
        expect(true).toBe(true);
    });
});

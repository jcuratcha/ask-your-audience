import {} from 'jasmine';

import { Poll } from '../shared/poll/poll';

describe("A poll", function() {
    it("contains valid information", function() {
        let poll = new Poll(1, "Is this a question", ["no", "yes"], [0, 1], "nobody");
        expect(poll.id).toBeGreaterThan(0);
    });
});

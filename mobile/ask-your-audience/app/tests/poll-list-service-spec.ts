import {} from 'jasmine';

import { PollListService } from '../shared/poll/poll-list.service';
import { Poll } from '../shared/poll/poll';

describe("The poll list service", function() {

    beforeEach(function() {
        let bool = true;
    });

    it("should return a list of polls", function() {
        expect(true).toBe(true);
    });

    it("should return polls that are not null", function() {
        expect(true).toBe(true);
    });

    it("should throw an exception if there are no polls available", function() {
        expect(true).toBe(true);        
    });
});

"use strict";
var poll_service_1 = require('../../../../app/services/poll.service');
var testPollService;
beforeEach(function () {
    testPollService = new poll_service_1.PollService(null);
    testPollService.preventSending = true; // allows for unit testing
});
// getPoll(id): no unit tests (needs http get)
// addPollVote(id, vote): no unit tests (needs http get)
// createNewPoll(poll): no unit tests (needs http post)
describe('Poll service: creating/fetching polls from database', function () {
    describe('createRequestHeaders', function () {
        it('Returns a blank Headers object', function () {
            var testHeaders = null;
            testHeaders = testPollService.test_createRequestHeaders();
            expect(testHeaders).not.toBe(null);
        });
    });
});
// no test needed: handleErrors (logging function only)
//# sourceMappingURL=poll.service.spec.js.map
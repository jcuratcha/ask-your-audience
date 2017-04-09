"use strict";
var poll_list_service_1 = require('../../../../app/services/poll-list.service');
describe('Poll list service: creating/fetching polls from database', function () {
    var testPollListService;
    beforeEach(function () {
        testPollListService = new poll_list_service_1.PollListService(null);
    });
    describe('createRequestHeaders', function () {
        it('Returns a blank Headers object', function () {
            var testHeaders = null;
            testHeaders = testPollListService.test_createRequestHeaders();
            expect(testHeaders).not.toBe(null);
        });
    });
});
//# sourceMappingURL=poll-list.service.spec.js.map
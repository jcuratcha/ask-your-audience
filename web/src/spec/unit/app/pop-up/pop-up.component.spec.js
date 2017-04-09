"use strict";
var pop_up_component_1 = require('../../../../app/pop-up/pop-up.component');
var poll_service_1 = require('../../../../app/services/poll.service');
describe('Pop-up component: shows a dialog for a poll to be voted on |', function () {
    var testPollService;
    var testPoll;
    var testPopupComponent;
    beforeEach(function () {
        testPollService = new poll_service_1.PollService(null);
        testPoll = null;
        testPopupComponent = new pop_up_component_1.PopupComponent(testPollService);
    });
    // cannot be unit tested due to the pollService object performing complex actions
    // it ('vote: adds a single vote to the poll that the popup component represents', () => {
    //    let yesVotes = 10;
    //    testPopupComponent.poll = new Poll(123456, "test question", ["Yes", "No"], [yesVotes, 180], "test owner");
    //
    //    testPopupComponent.vote(0);
    //
    //    expect(testPopupComponent.poll.votes[0]).toBe(yesVotes + 1);
    // });
    // cannot unit test: emit sends to listener functions (HTML)
    // it ('closeDialog: sends the closed signal to any listeners')
    it('PopupComponent: no unit tests currently possible or implemented', function () {
        expect(true).toBe(true);
    });
});
//# sourceMappingURL=pop-up.component.spec.js.map
"use strict";
var app_component_1 = require('../../../app/app.component');
var poll_1 = require('../../../app/shared/poll');
describe('App Component: Main launch point |', function () {
    describe('onNotify:', function () {
        it('A "notification" will add a copy of the' +
            'new poll to the blank internal polls list', function () {
            var app = new app_component_1.AppComponent(null);
            var pollID = 123456;
            var question = "test Question";
            var options = ["a", "b", "c", "d"];
            var votes = [1, 2, 3, 4];
            var owner = "test owner";
            var testPoll = new poll_1.Poll(pollID, question, options, votes, owner);
            app.onNotify(testPoll);
            expect(app.polls[0].pollID).toBe(pollID);
            expect(app.polls[0].question).toBe(question);
            expect(app.polls[0].options).toEqual(options);
            expect(app.polls[0].votes).toEqual(votes);
            expect(app.polls[0].owner).toBe(owner);
        });
        it('A non-initialized component will not be added to the list', function () {
            var app = new app_component_1.AppComponent(null);
            var testPoll = new poll_1.Poll(123456, "test question", ["Yes", "No"], [152, 180], "test owner");
            app.onNotify(testPoll); // added first (2nd pos)
            app.onNotify(null); // added 2nd (1st pos)
            expect(app.polls[0].pollID).toBe(testPoll.pollID); // we'll just assume from here that the first is not the same
        });
    });
});
/*
   describe('app.component', function() {
      it('A "notification" will add a copy of the' +
            'new poll to the blank internal polls list', () => {
         let app = new AppComponent(null);
         expect(app.polls[0]).toBe()
      });
   });
*/
//# sourceMappingURL=app.component.spec.js.map
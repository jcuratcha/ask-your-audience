"use strict";
var poll_1 = require('../../../../app/shared/poll');
var single_poll_component_1 = require('../../../../app/polls/single-poll.component');
describe('single-poll.component', function () {
    var testComponent;
    beforeEach(function () {
        testComponent = new single_poll_component_1.SinglePollComponent();
    });
    describe('ngOnInit:', function () {
        it('Overrides any text currently in the shownText field', function () {
            testComponent.shownText = "a";
            testComponent.poll = new poll_1.Poll(123456, "test question", ["Yes", "No"], [152, 180], "test owner");
            testComponent.poll.question = "b";
            testComponent.ngOnInit();
            expect(testComponent.shownText).not.toBe("a");
        });
        it('A null question will also make shownText null', function () {
            testComponent.shownText = "a";
            testComponent.poll = new poll_1.Poll(123456, "test question", ["Yes", "No"], [152, 180], "test owner");
            testComponent.poll.question = null;
            testComponent.ngOnInit();
            expect(testComponent.shownText).toBe(null);
        });
    });
    describe('toggle:', function () {
        it('changes from both directions (t-f and f-t)', function () {
            testComponent.active = true;
            testComponent.toggle();
            expect(testComponent.active).toBe(false);
            testComponent.toggle();
            expect(testComponent.active).toBe(true);
        });
    });
    describe('closePoll:', function () {
        it('changes active to false in any occasion', function () {
            testComponent.active = true;
            testComponent.closePoll(false);
            expect(testComponent.active).toBe(false);
            testComponent.closePoll(false);
            expect(testComponent.active).toBe(false);
            testComponent.active = true;
            testComponent.closePoll(true);
            expect(testComponent.active).toBe(false);
            testComponent.closePoll(true);
            expect(testComponent.active).toBe(false);
        });
    });
});
//# sourceMappingURL=single-poll.component.spec.js.map
import {PollService} from './poll.service';
import {Headers} from '@angular/http';

let testPollService:PollService;

beforeEach(() => {
   testPollService = new PollService(null);
})

// getPoll(id): no unit tests (needs http get)

// addPollVote(id, vote): no unit tests (needs http get)

// createNewPoll(poll): no unit tests (needs http post)


describe ('poll.service', () => {
   it ('createRequestHeaders: returns a blank Headers object', () => {
      let testHeaders:Headers = null;

      testHeaders = testPollService.test_createRequestHeaders();

      expect(testHeaders).not.toBe(null);
   });

// no test needed: handleErrors (logging function only)
})

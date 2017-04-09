import {PollService} from '../../../../app/services/poll.service';
import {Headers} from '@angular/http';

let testPollService:PollService;

beforeEach(() => {
   testPollService = new PollService(null);
   testPollService.preventSending = true;    // allows for unit testing
})

// getPoll(id): no unit tests (needs http get)

// addPollVote(id, vote): no unit tests (needs http get)

// createNewPoll(poll): no unit tests (needs http post)


describe ('Poll service: creating/fetching polls from database', () => {
   describe ('createRequestHeaders', () => {

      it ('Returns a blank Headers object', () => {
         let testHeaders:Headers = null;

         testHeaders = testPollService.test_createRequestHeaders();

         expect(testHeaders).not.toBe(null);
      });
   })
})


// no test needed: handleErrors (logging function only)

import { PollListService } from '../../../../app/services/poll-list.service';
import { Headers } from '@angular/http';

describe ('Poll list service: creating/fetching polls from database', () => {
   let testPollListService:PollListService;

   beforeEach( () => {
      testPollListService = new PollListService(null);
   })
   describe ('createRequestHeaders', () => {

      it ('Returns a blank Headers object', () => {
         let testHeaders:Headers = null;

         testHeaders = testPollListService.test_createRequestHeaders();

         expect(testHeaders).not.toBe(null);
      });
   })
})

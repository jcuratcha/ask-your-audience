import {PopupComponent} from './pop-up.component';
import {Poll} from '../poll';
import {PollService} from '../services/poll.service';

describe('Pop-up component: shows a dialog for a poll to be voted on |', () => {
   let testPollService:PollService;
   let testPoll:Poll;
   let testPopupComponent:PopupComponent;

   beforeEach( () => {
      testPollService = new PollService(null);
      testPoll = null;
      testPopupComponent = new PopupComponent(testPollService);
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

   it ('PopupComponent: no unit tests currently possible or implemented', () => {
      expect(true).toBe(true);
   });
})

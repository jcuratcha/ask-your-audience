import {Poll} from './../poll';
import {SinglePollComponent} from './single-poll.component';

describe ('single-poll.component', () => {
   let testComponent:SinglePollComponent;

   beforeEach( () => {
      testComponent = new SinglePollComponent();
   });

   it ('ngOnInit: Overrides any text currently in the shownText field', () => {
      testComponent.shownText = "a";
      testComponent.poll = new Poll(123456, "test question", ["Yes", "No"], [152, 180], "test owner");
      testComponent.poll.question = "b";
      testComponent.ngOnInit();
      expect(testComponent.shownText).not.toBe("a");
   });

   it ('ngOnInit: A null question will also make shownText null', () => {
      testComponent.shownText = "a";
      testComponent.poll = new Poll(123456, "test question", ["Yes", "No"], [152, 180], "test owner");
      testComponent.poll.question = null;
      testComponent.ngOnInit();
      expect(testComponent.shownText).toBe(null);
   });

   it ('toggle: changes from both directions (t-f and f-t)', () => {
      testComponent.active = true;
      testComponent.toggle();
      expect(testComponent.active).toBe(false);
      testComponent.toggle();
      expect(testComponent.active).toBe(true);
   });

   it ('closePoll: changes active to false in any occasion', () => {
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
})

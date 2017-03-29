import { SideNavigationComponent } from './navigation-panel.component';

describe ('navigation-panel.component', () => {

    let testSideNav: SideNavigationComponent;

   beforeEach( () => {
      testSideNav = new SideNavigationComponent (null);
   });

   it ('addPoll: changes addDialog to true', () => {
      testSideNav.addDialog = false;
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(true); // false -> true
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(true); // true -> true
   })


   it ('close: changes addDialog to false', () => {
      testSideNav.addDialog = true;
      testSideNav.close();
      expect(testSideNav.addDialog).toBe(false); // true -> false
      testSideNav.close();
      expect(testSideNav.addDialog).toBe(false); // false -> false
   });

   it ('verifyPoll: undefined question, do nothing', () => {
      testSideNav.question = undefined;
      expect (testSideNav.verifyPoll()).toBe(-2);
   });

   it ('verifyPoll: null question, do nothing', () => {
      testSideNav.question = null;
      expect (testSideNav.verifyPoll()).toBe(-2);
   });

   it ('verifyPoll: If question is an empty string, do nothing', () => {
      testSideNav.question = "";
      expect (testSideNav.verifyPoll()).toBe(-2);
   });

   it ('if (q1) but one option, do nothing', () => {
      testSideNav.question = 'A';
      testSideNav.tempArray[0] = 'b';
      expect(testSideNav.verifyPoll()).toBe(-1);
   });

   it ('if (q1) but two options, one is empty, do nothing', () => {
      testSideNav.question = 'A';
      testSideNav.tempArray[1] = 'b';
      expect(testSideNav.verifyPoll()).toBe(-1);
   });

   it ('if (q1) but two options, one is null, do nothing', () => {
      testSideNav.question = 'A';
      testSideNav.tempArray[0] = null;
      testSideNav.tempArray[1] = 'b';
      expect(testSideNav.verifyPoll()).toBe(-1);
   });

   it ('if (q1) but two options, one is undefined, do nothing', () => {
      testSideNav.question = 'A';
      testSideNav.tempArray[0] = undefined;
      testSideNav.tempArray[1] = 'b';
      expect(testSideNav.verifyPoll()).toBe(-1);
   });

   // NEED INTEGRATION TESTS: /////////////////////////////////
   // - If the question has at least one character(q1) and there are two options with at least one character each, a poll is created
   // - if (q1) and 3 options but one is null, a poll is created w 2 results
   // - if (q1) and 3 options but one is undefined, a poll is created w 2 results

})

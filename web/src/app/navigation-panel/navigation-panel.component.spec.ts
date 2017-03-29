import { SideNavigationComponent } from './navigation-panel.component';

describe ('navigation-panel.component', () => {
    
    let testSideNav: SideNavigationComponent = null;

   beforeEach( () => {
      testSideNav = new SideNavigationComponent (null);
   });

   it ('addPoll: changes addDialog to true', () => {
      testSideNav.addDialog = false;
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(true); // false -> true
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(false);
   })
   
   
   it ('close: changes addDialog to false', () => {
      testSideNav.addDialog = true;
      testSideNav.close();
      expect(testSideNav.addDialog).toBe(false); // true -> false
      testSideNav.close();
      expect(testSideNav.addDialog).toBe(false); // false -> false
   });

   it ('verifyPoll: undefined question produces a temp array with one (blank) elements', () => {
      testSideNav.question = undefined;
      testSideNav.verifyPoll();
      expect(testSideNav.tempArray.length).toBe(1);
      expect(testSideNav.tempArray[0]).toBe("");
   });

   it ('verifyPoll: undefined question produces a temp array with one (blank) elements', () => {
      testSideNav.question = null;
      testSideNav.verifyPoll();
      expect(testSideNav.tempArray.length).toBe(1);
      expect(testSideNav.tempArray[0]).toBe("");
   });

   it ('verifyPoll: If question is an empty string, do nothing', () => {
      testSideNav.question = "";
      testSideNav.verifyPoll();
      expect(testSideNav.tempArray.length).toBe(1);
      expect(testSideNav.tempArray[0]).toBe("");
   });

   it ('verifyPoll: If the question has at least one character(q1) and there are two options with at least one character each, a poll is created ', () => {
      // let testSideNav = new SideNavigationComponent (null);
      testSideNav.question = "";
      testSideNav.verifyPoll();
      expect(testSideNav.tempArray.length).toBe(1);
      expect(testSideNav.tempArray[0]).toBe("");
   });

   // it ('verifyPoll: If the question has at least one character(q1) and there are two options with at least one character each, a poll is created ', () => {
   //    testSideNav.question = "";
   //    testSideNav.verifyPoll();
   //    expect(testSideNav.tempArray.length).toBe(1);
   //    expect(testSideNav.tempArray[0]).toBe("");
   // });

   // - If the question has at least one character(q1) and there are two options with at least one character each, a poll is created
   // - if (q1) but one option, do nothing
   // - if (q1) but two options, one that has an empty string, do nothing
   // - if (q1) but two options, one that is null, do nothing
   // - if (q1) and 3 options but one is null, a poll is created w 2 results
   // - if (q1) and 3 options but one is undefined, a poll is created w 2 results
   // - if (q1 and )

})

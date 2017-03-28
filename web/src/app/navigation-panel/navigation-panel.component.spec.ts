import {SideNavigationComponent} from './navigation-panel/navigation-panel.component';

describe ('navigation-panel.component', () => {
   beforeEach( () => {
      let testSideNav = new SideNavigationComponent ();
   });

   it ('addPoll: changes addDialog to false', () => {
      testSideNav.addDialog = true;
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(false);
      testSideNav.addPoll();
      expect(textSideNav.addDialog).toBe(false);
   })

})

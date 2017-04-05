import { SideNavigationComponent } from './navigation-panel.component';

describe ('navigation-panel.component', () => {
    
    let testSideNav: SideNavigationComponent = null;

   beforeEach( () => {
      let testSideNav = new SideNavigationComponent(null);
   });

   it ('addPoll: changes addDialog to false', () => {
      testSideNav.addDialog = true;
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(false);
      testSideNav.addPoll();
      expect(testSideNav.addDialog).toBe(false);
   })

})

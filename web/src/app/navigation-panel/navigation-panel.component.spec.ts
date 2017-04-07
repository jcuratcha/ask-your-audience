import { SideNavigationComponent } from './navigation-panel.component';
import { PollService } from '../services/poll.service'
// import { Http, Headers, Response, RequestOptions } from "@angular/http";

let testSideNav:SideNavigationComponent
describe('navigation-panel.component', () => {
    // let pollS = new PollService();
    // let testSideNav = new SideNavigationComponent(pollS);
    let pollS: PollService

    beforeEach(() => {
          testSideNav = new SideNavigationComponent (pollS);
    });

    it('addPoll: changes addDialog to false', () => {
        testSideNav.addDialog = true;
        testSideNav.addPoll();
        expect(testSideNav.addDialog).toBe(false);
        testSideNav.addPoll();
        expect(testSideNav.addDialog).toBe(false);
    })

})

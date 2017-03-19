/* import { AppComponent } from './app.component';

describe ('app.component', () => {
   it ('Component test 1: simple', () => {
      let app = new AppComponent(null);
      expect (true).toBe(true);
   });
});
 */
// import '../../node_modules/reflect-metadata/core-js/modules/es7.reflect.metadata';
import {Poll} from './poll';
import { AppComponent } from './app.component';

describe ('app.component', () => {
   it ('A "notification" will add a copy of the new poll to' +
            'the blank internal polls list', () => {

   });
});

describe('poll', () => {
   it ('Component test 2: simple single class', () => {
      let appComponent = new AppComponent(null);
      let poll = new Poll(0, null, null, null, null);
      expect(poll).not.toEqual(null);
   });
});

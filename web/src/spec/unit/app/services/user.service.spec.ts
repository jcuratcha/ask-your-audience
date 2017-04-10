import { UserService } from '../../../../app/services/user.service';
import {Headers} from '@angular/http';

describe ("User Service: Manages user creation and authentication |", () => {
   let testUserService:UserService;
   //register: need http
   //authenticate: need http

   beforeEach(() => {
      testUserService = new UserService(null);
      testUserService.preventSending = true;    // allows for unit testing
   })

   describe ('Poll service: creating/fetching polls from database', () => {
      describe ('createRequestHeaders', () => {

         it ('Returns a blank Headers object', () => {
            let testHeaders:Headers = null;

            testHeaders = testUserService.test_createRequestHeaders();

            expect(testHeaders).not.toBe(null);
         });
      })
   })
})




// import { UserService } from '../../../../app/services/user.service';
// import { TestBed } from '@angular/core/testing';
// describe('User Service: Manages user creation and authentication |', () => {
//
//    beforeEach( () => {
//       TestBed.configureTestingModule( {
//          providers: [
//             HTTP_PROVIDERS,
//             provide(XHRBackend)
//             UserService
//          ]
//       })
//    })
//    describe('register: user not currently in database is registered', () => {
//
//    })
//
//    describe('')
// })

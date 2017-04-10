import {LoginComponent} from '../../../../app/login/login.component';
import { UserService } from '../../../../app/services/user.service';

describe ('Login Component: Handles user account management before polls can be accessed |', () => {
   let testLoginComponent:LoginComponent;

   beforeEach( () => {
      testLoginComponent = new LoginComponent(new UserService(null));
   })

   describe ('sendCredentials:', () => {
      it ('username is null/whitespace/undefined -> returns no username provided message', () => {
         expect(testLoginComponent.sendCredentials(null, 'asdf')).toBe("ERROR: No username has been provided (or is blank space)");
         expect(testLoginComponent.sendCredentials(" \t\n", 'asdf')).toBe("ERROR: No username has been provided (or is blank space)");
         expect(testLoginComponent.sendCredentials(undefined, 'asdf')).toBe("ERROR: No username has been provided (or is blank space)");
      });

      it ('password is null/whitespace/undefined -> returns no password provided message', () => {
         expect(testLoginComponent.sendCredentials('asdf', null)).toBe("ERROR: No password has been provided (or is blank space)");
         expect(testLoginComponent.sendCredentials("asdf", ' \t\n')).toBe("ERROR: No password has been provided (or is blank space)");
         expect(testLoginComponent.sendCredentials('asdf', undefined)).toBe("ERROR: No password has been provided (or is blank space)");
      });

      // username and password are valid and match entry in database, success (requires http request)
      // username and password are valid and don't match entry in database, failure (requires http request)
   })

   describe('sendRegistration:', () => {
      it ('display username is null/whitespace/undefined -> returns no username provided message', () => {
         expect(testLoginComponent.sendRegistration(null, 'asdf', 'asdf')).toBe("ERROR: No display username has been provided (or is blank space)");
         expect(testLoginComponent.sendRegistration(" \t\n", 'asdf', 'asdf')).toBe("ERROR: No display username has been provided (or is blank space)");
         expect(testLoginComponent.sendRegistration(undefined, 'asdf', 'asdf')).toBe("ERROR: No display username has been provided (or is blank space)");
      });

      it ('username is null/whitespace/undefined -> returns no username provided message', () => {
         expect(testLoginComponent.sendRegistration('asdf', null, 'asdf')).toBe("ERROR: No username has been provided (or is blank space)");
         expect(testLoginComponent.sendRegistration('asdf', " \t\n", 'asdf')).toBe("ERROR: No username has been provided (or is blank space)");
         expect(testLoginComponent.sendRegistration('asdf', undefined, 'asdf')).toBe("ERROR: No username has been provided (or is blank space)");
      });

      it ('password is null/whitespace/undefined -> returns no username provided message', () => {
         expect(testLoginComponent.sendRegistration('asdf', 'asdf', null)).toBe("ERROR: No password has been provided (or is blank space)");
         expect(testLoginComponent.sendRegistration('asdf', 'asdf', " \t\n")).toBe("ERROR: No password has been provided (or is blank space)");
         expect(testLoginComponent.sendRegistration('asdf', 'asdf', undefined)).toBe("ERROR: No password has been provided (or is blank space)");
      });

      // display username, username, and password are valid but username already exists in database, failure (requires http request)
      // display username, username, and password are valid and username does not exist in database, success (requires http request)
   })
})

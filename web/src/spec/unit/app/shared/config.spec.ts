import { Config } from '../../../../app/shared/config';

describe ('Config: provides information about the platform being connected to |', () => {
   describe ('getDbUrl', () => {
      it ('forms a connection string from the contained information', () => {
         let result = Config.getDbUrl();
         expect(result).toBe(Config.httpPrefix + Config.dbHostname + Config.dbPort);
      });
   });

})

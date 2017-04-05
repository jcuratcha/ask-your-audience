import {Config} from './config';

describe ('config', () => {
   it ('forms a connection string from the contained information', () => {
      let result = Config.getDbUrl();
      expect(result).toBe(Config.httpPrefix + Config.dbHostname + Config.dbPort);
   });

})

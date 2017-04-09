"use strict";
var config_1 = require('../../../../app/shared/config');
describe('Config: provides information about the platform being connected to |', function () {
    describe('getDbUrl', function () {
        it('forms a connection string from the contained information', function () {
            var result = config_1.Config.getDbUrl();
            expect(result).toBe(config_1.Config.httpPrefix + config_1.Config.dbHostname + config_1.Config.dbPort);
        });
    });
});
//# sourceMappingURL=config.spec.js.map
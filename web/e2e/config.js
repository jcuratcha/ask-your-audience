"use strict";
var Config = (function () {
    function Config() {
    }
    Config.getDbUrl = function () {
        return Config.httpPrefix + Config.dbHostname + Config.dbPort;
    };
    // static dbPort = ":8080"
    // static dbHostname = "ec2-54-213-112-197.us-west-2.compute.amazonaws.com";
    // static httpPrefix = "http://";
    Config.dbPort = ":3000";
    Config.dbHostname = "ec2-35-161-110-163.us-west-2.compute.amazonaws.com";
    Config.httpPrefix = "http://";
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map
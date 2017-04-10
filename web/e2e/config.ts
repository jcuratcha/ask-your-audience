export class Config {
  static dbPort = ":8080"
  static dbHostname = "ec2-54-213-112-197.us-west-2.compute.amazonaws.com";
  static httpPrefix = "http://";

  static getDbUrl() {
    return Config.httpPrefix + Config.dbHostname + Config.dbPort;
  }
}
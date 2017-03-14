export class Config {
  static dbPort = ":8080"
  static dbHostname = window.location.hostname;
  static httpPrefix = "http://";

  static getDbUrl() {
    return Config.httpPrefix + Config.dbHostname + Config.dbPort;
  }
}
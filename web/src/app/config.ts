export class Config {
  static apiUrl = "http://localhost:8080" // local dev machine
  // static apiUrl = "http://ec2-52-60-106-250.ca-central-1.compute.amazonaws.com:8080"; // Production
  // static apiUrl = "http://ec2-54-213-112-197.us-west-2.compute.amazonaws.com:8080"; // Testing
  static token = "";
  static dbPort = ":8080"
  static dbHostname = window.location.hostname;
  static httpPrefix = "http://";

  static getDbUrl() {
    return Config.httpPrefix + Config.dbHostname + Config.dbPort;
  }
}
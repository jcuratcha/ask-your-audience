"use strict";
var core_1 = require("@angular/core");
var person_1 = require("../../shared/person/person");
var person_service_1 = require("../../shared/person/person.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = (function () {
    function LoginComponent(router, personService, page) {
        this.router = router;
        this.personService = personService;
        this.page = page;
        this.isLoggingIn = true;
        console.log("Current page: LoginComponent");
        this.person = new person_1.Person();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(["/home"]);
        /*
        Change this back to the actual login method,
        when we have login information
        */
        // this.personService.login(this.person)
        // .subscribe(
        // 	() => this.router.navigate(["/list"]),
        // 	(error) => alert("Unfortunately we could not find your account.")
        // );
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.personService.register(this.person)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [person_service_1.PersonService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, person_service_1.PersonService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQW9EO0FBQ3BELHFFQUFtRTtBQUNuRSwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBUy9CLElBQWEsY0FBYztJQUkxQix3QkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsSUFBVTtRQUF4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEM7OztVQUdFO1FBQ0Ysd0NBQXdDO1FBQ3hDLGNBQWM7UUFDZCwwQ0FBMEM7UUFDMUMscUVBQXFFO1FBQ3JFLEtBQUs7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN2QyxTQUFTLENBQ1Y7WUFDQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDbEUsQ0FBQztJQUNILENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzFCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDcEUsQ0FBQztxQ0FNMkIsZUFBTSxFQUF5Qiw4QkFBYSxFQUFnQixXQUFJO0dBSmhGLGNBQWMsQ0ErQzFCO0FBL0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BlcnNvbi9wZXJzb25cIjtcclxuaW1wb3J0IHsgUGVyc29uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGVyc29uL3BlcnNvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0cHJvdmlkZXJzOiBbUGVyc29uU2VydmljZV0sXHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwZXJzb246IFBlcnNvbjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGVyc29uU2VydmljZTogUGVyc29uU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkN1cnJlbnQgcGFnZTogTG9naW5Db21wb25lbnRcIik7XHJcblx0XHR0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRzdWJtaXQoKSB7XHJcblx0XHRpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG5cdFx0dGhpcy5sb2dpbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaWduVXAoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxvZ2luKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xyXG5cdFx0LypcclxuXHRcdENoYW5nZSB0aGlzIGJhY2sgdG8gdGhlIGFjdHVhbCBsb2dpbiBtZXRob2QsXHJcblx0XHR3aGVuIHdlIGhhdmUgbG9naW4gaW5mb3JtYXRpb25cclxuXHRcdCovXHJcblx0XHQvLyB0aGlzLnBlcnNvblNlcnZpY2UubG9naW4odGhpcy5wZXJzb24pXHJcblx0XHQvLyAuc3Vic2NyaWJlKFxyXG5cdFx0Ly8gXHQoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXHJcblx0XHQvLyBcdChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuXHRcdC8vICk7XHJcblx0fVxyXG5cclxuXHRzaWduVXAoKSB7XHJcblx0XHR0aGlzLnBlcnNvblNlcnZpY2UucmVnaXN0ZXIodGhpcy5wZXJzb24pXHJcblx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0KCkgPT4ge1xyXG5cdFx0XHRhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG5cdFx0XHR0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuXHRcdH0sXHJcblx0XHQoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcclxuXHRcdCk7XHJcblx0fVxyXG5cdHRvZ2dsZURpc3BsYXkoKSB7XHJcblx0XHR0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcblx0fVxyXG59Il19
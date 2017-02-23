"use strict";
var core_1 = require("@angular/core");
var person_1 = require("../../shared/person/person");
var person_service_1 = require("../../shared/person/person.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, personService) {
        this.router = router;
        this.personService = personService;
        this.isLoggingIn = true;
        this.person = new person_1.Person();
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.personService.login(this.person)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
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
    __metadata("design:paramtypes", [router_1.Router, person_service_1.PersonService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFDMUMscURBQW9EO0FBQ3BELHFFQUFtRTtBQUNuRSwwQ0FBeUM7QUFTekMsSUFBYSxjQUFjO0lBSTFCLHdCQUFvQixNQUFjLEVBQVUsYUFBNEI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRnZFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDRixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxTQUFTLENBQ1QsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFDckMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDakUsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3ZDLFNBQVMsQ0FDVjtZQUNDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNsRSxDQUFDO0lBQ0gsQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQU0yQixlQUFNLEVBQXlCLDhCQUFhO0dBSjVELGNBQWMsQ0FvQzFCO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wZXJzb24vcGVyc29uXCI7XHJcbmltcG9ydCB7IFBlcnNvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BlcnNvbi9wZXJzb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJteS1hcHBcIixcclxuXHRwcm92aWRlcnM6IFtQZXJzb25TZXJ2aWNlXSxcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIHBlcnNvbjogUGVyc29uO1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwZXJzb25TZXJ2aWNlOiBQZXJzb25TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oKTtcclxuXHR9XHJcblx0c3VibWl0KCkge1xyXG5cdFx0aWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuXHRcdHRoaXMubG9naW4oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2lnblVwKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2dpbigpIHtcclxuXHRcdHRoaXMucGVyc29uU2VydmljZS5sb2dpbih0aGlzLnBlcnNvbilcclxuXHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuXHRcdFx0KGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0XHJcblx0c2lnblVwKCkge1xyXG5cdFx0dGhpcy5wZXJzb25TZXJ2aWNlLnJlZ2lzdGVyKHRoaXMucGVyc29uKVxyXG5cdFx0LnN1YnNjcmliZShcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0YWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuXHRcdFx0dGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcblx0XHR9LFxyXG5cdFx0KCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR0b2dnbGVEaXNwbGF5KCkge1xyXG5cdFx0dGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG5cdH1cclxufSJdfQ==
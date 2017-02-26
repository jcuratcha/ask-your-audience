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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQW9EO0FBQ3BELHFFQUFtRTtBQUNuRSwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBUy9CLElBQWEsY0FBYztJQUkxQix3QkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsSUFBVTtRQUF4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEM7OztVQUdFO1FBQ0Ysd0NBQXdDO1FBQ3hDLGNBQWM7UUFDZCwwQ0FBMEM7UUFDMUMscUVBQXFFO1FBQ3JFLEtBQUs7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN2QyxTQUFTLENBQ1Y7WUFDQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDbEUsQ0FBQztJQUNILENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzFCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDcEUsQ0FBQztxQ0FNMkIsZUFBTSxFQUF5Qiw4QkFBYSxFQUFnQixXQUFJO0dBSmhGLGNBQWMsQ0ErQzFCO0FBL0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wZXJzb24vcGVyc29uXCI7XG5pbXBvcnQgeyBQZXJzb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wZXJzb24vcGVyc29uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJteS1hcHBcIixcblx0cHJvdmlkZXJzOiBbUGVyc29uU2VydmljZV0sXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJzb246IFBlcnNvbjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGVyc29uU2VydmljZTogUGVyc29uU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJDdXJyZW50IHBhZ2U6IExvZ2luQ29tcG9uZW50XCIpO1xuXHRcdHRoaXMucGVyc29uID0gbmV3IFBlcnNvbigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRzdWJtaXQoKSB7XG5cdFx0aWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcblx0XHR0aGlzLmxvZ2luKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2lnblVwKCk7XG5cdFx0fVxuXHR9XG5cblx0bG9naW4oKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuXHRcdC8qXG5cdFx0Q2hhbmdlIHRoaXMgYmFjayB0byB0aGUgYWN0dWFsIGxvZ2luIG1ldGhvZCxcblx0XHR3aGVuIHdlIGhhdmUgbG9naW4gaW5mb3JtYXRpb25cblx0XHQqL1xuXHRcdC8vIHRoaXMucGVyc29uU2VydmljZS5sb2dpbih0aGlzLnBlcnNvbilcblx0XHQvLyAuc3Vic2NyaWJlKFxuXHRcdC8vIFx0KCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxuXHRcdC8vIFx0KGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKVxuXHRcdC8vICk7XG5cdH1cblxuXHRzaWduVXAoKSB7XG5cdFx0dGhpcy5wZXJzb25TZXJ2aWNlLnJlZ2lzdGVyKHRoaXMucGVyc29uKVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0KCkgPT4ge1xuXHRcdFx0YWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcblx0XHRcdHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuXHRcdH0sXG5cdFx0KCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG5cdFx0KTtcblx0fVxuXHR0b2dnbGVEaXNwbGF5KCkge1xuXHRcdHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcblx0fVxufSJdfQ==
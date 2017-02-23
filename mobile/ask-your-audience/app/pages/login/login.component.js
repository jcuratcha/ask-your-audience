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
        this.router.navigate(["/list"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQW9EO0FBQ3BELHFFQUFtRTtBQUNuRSwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBUy9CLElBQWEsY0FBYztJQUkxQix3QkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsSUFBVTtRQUF4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDRixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQzs7O1VBR0U7UUFDRix3Q0FBd0M7UUFDeEMsY0FBYztRQUNkLDBDQUEwQztRQUMxQyxxRUFBcUU7UUFDckUsS0FBSztJQUNOLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3ZDLFNBQVMsQ0FDVjtZQUNDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNsRSxDQUFDO0lBQ0gsQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQU0yQixlQUFNLEVBQXlCLDhCQUFhLEVBQWdCLFdBQUk7R0FKaEYsY0FBYyxDQThDMUI7QUE5Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGVyc29uL3BlcnNvblwiO1xyXG5pbXBvcnQgeyBQZXJzb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wZXJzb24vcGVyc29uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJteS1hcHBcIixcclxuXHRwcm92aWRlcnM6IFtQZXJzb25TZXJ2aWNlXSxcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHBlcnNvbjogUGVyc29uO1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwZXJzb25TZXJ2aWNlOiBQZXJzb25TZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdHRoaXMucGVyc29uID0gbmV3IFBlcnNvbigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHN1Ym1pdCgpIHtcclxuXHRcdGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcblx0XHR0aGlzLmxvZ2luKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNpZ25VcCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9naW4oKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XHJcblx0XHQvKlxyXG5cdFx0Q2hhbmdlIHRoaXMgYmFjayB0byB0aGUgYWN0dWFsIGxvZ2luIG1ldGhvZCxcclxuXHRcdHdoZW4gd2UgaGF2ZSBsb2dpbiBpbmZvcm1hdGlvblxyXG5cdFx0Ki9cclxuXHRcdC8vIHRoaXMucGVyc29uU2VydmljZS5sb2dpbih0aGlzLnBlcnNvbilcclxuXHRcdC8vIC5zdWJzY3JpYmUoXHJcblx0XHQvLyBcdCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuXHRcdC8vIFx0KGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKVxyXG5cdFx0Ly8gKTtcclxuXHR9XHJcblxyXG5cdHNpZ25VcCgpIHtcclxuXHRcdHRoaXMucGVyc29uU2VydmljZS5yZWdpc3Rlcih0aGlzLnBlcnNvbilcclxuXHRcdC5zdWJzY3JpYmUoXHJcblx0XHQoKSA9PiB7XHJcblx0XHRcdGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcblx0XHRcdHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG5cdFx0fSxcclxuXHRcdCgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dG9nZ2xlRGlzcGxheSgpIHtcclxuXHRcdHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuXHR9XHJcbn0iXX0=
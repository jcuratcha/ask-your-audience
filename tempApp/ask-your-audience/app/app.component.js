"use strict";
var core_1 = require("@angular/core");
var person_1 = require("./shared/person/person");
var person_service_1 = require("./shared/person/person.service");
var AppComponent = (function () {
    function AppComponent(personService) {
        this.personService = personService;
        this.isLoggingIn = true;
        this.person = new person_1.Person();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        // TODO: Define
    };
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.personService.register(this.person)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [person_service_1.PersonService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxpREFBZ0Q7QUFDaEQsaUVBQStEO0FBUy9ELElBQWEsWUFBWTtJQUl4QixzQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGL0MsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNGLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0MsZUFBZTtJQUNoQixDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN2QyxTQUFTLENBQ1Y7WUFDQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDbEUsQ0FBQztJQUNILENBQUM7SUFDRCxvQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxZQUFZO0lBUHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzFCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztxQ0FNa0MsOEJBQWE7R0FKcEMsWUFBWSxDQThCeEI7QUE5Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vc2hhcmVkL3BlcnNvbi9wZXJzb25cIjtcbmltcG9ydCB7IFBlcnNvblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvcGVyc29uL3BlcnNvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbUGVyc29uU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcGVyc29uOiBQZXJzb247XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcnNvblNlcnZpY2U6IFBlcnNvblNlcnZpY2UpIHtcblx0XHR0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oKTtcblx0fVxuXHRzdWJtaXQoKSB7XG5cdFx0aWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcblx0XHR0aGlzLmxvZ2luKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2lnblVwKCk7XG5cdFx0fVxuXHR9XG5cdGxvZ2luKCkge1xuXHRcdC8vIFRPRE86IERlZmluZVxuXHR9XG5cdHNpZ25VcCgpIHtcblx0XHR0aGlzLnBlcnNvblNlcnZpY2UucmVnaXN0ZXIodGhpcy5wZXJzb24pXG5cdFx0LnN1YnNjcmliZShcblx0XHQoKSA9PiB7XG5cdFx0XHRhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuXHRcdFx0dGhpcy50b2dnbGVEaXNwbGF5KCk7XG5cdFx0fSxcblx0XHQoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcblx0XHQpO1xuXHR9XG5cdHRvZ2dsZURpc3BsYXkoKSB7XG5cdFx0dGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuXHR9XG59Il19
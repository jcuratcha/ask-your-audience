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
    LoginComponent.prototype.login = function () {
        this.router.navigate(["/home"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQW9EO0FBQ3BELHFFQUFtRTtBQUNuRSwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBUy9CLElBQWEsY0FBYztJQUkxQix3QkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsSUFBVTtRQUF4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzFCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDcEUsQ0FBQztxQ0FNMkIsZUFBTSxFQUF5Qiw4QkFBYSxFQUFnQixXQUFJO0dBSmhGLGNBQWMsQ0FnQjFCO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BlcnNvbi9wZXJzb25cIjtcclxuaW1wb3J0IHsgUGVyc29uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGVyc29uL3BlcnNvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0cHJvdmlkZXJzOiBbUGVyc29uU2VydmljZV0sXHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwZXJzb246IFBlcnNvbjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGVyc29uU2VydmljZTogUGVyc29uU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkN1cnJlbnQgcGFnZTogTG9naW5Db21wb25lbnRcIik7XHJcblx0XHR0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsb2dpbigpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxuXHR9XHJcbn0iXX0=
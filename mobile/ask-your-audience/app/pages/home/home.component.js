"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(router, page) {
        this.router = router;
        this.page = page;
        this.email = "test";
    }
    HomeComponent.prototype.goToQuestionCreation = function () {
        console.log("Going to Question Creation page");
        this.router.navigate(["/askQuestion"]);
    };
    HomeComponent.prototype.goToQuestionList = function () {
        console.log("Going to Question List page");
        this.router.navigate(["/answer"]);
    };
    HomeComponent.prototype.goToPersonActivity = function () {
        console.log("Going to current user's Activity page");
        this.router.navigate(["/myActivity"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "pages/home/home.html",
        styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFRL0IsSUFBYSxhQUFhO0lBR3pCLHVCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ2RCxVQUFLLEdBQUMsTUFBTSxDQUFDO0lBRTZDLENBQUM7SUFHMUQsNENBQW9CLEdBQXBCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDaEUsQ0FBQztxQ0FLMkIsZUFBTSxFQUFnQixXQUFJO0dBSDFDLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaG9tZVwiLFxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS1jb21tb24uY3NzXCIsIFwicGFnZXMvaG9tZS9ob21lLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuZW1haWw9XCJ0ZXN0XCI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG5cblx0Z29Ub1F1ZXN0aW9uQ3JlYXRpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coXCJHb2luZyB0byBRdWVzdGlvbiBDcmVhdGlvbiBwYWdlXCIpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hc2tRdWVzdGlvblwiXSk7XG5cdH1cblxuXHRnb1RvUXVlc3Rpb25MaXN0KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiR29pbmcgdG8gUXVlc3Rpb24gTGlzdCBwYWdlXCIpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hbnN3ZXJcIl0pO1xuXHR9XG5cblx0Z29Ub1BlcnNvbkFjdGl2aXR5KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiR29pbmcgdG8gY3VycmVudCB1c2VyJ3MgQWN0aXZpdHkgcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbXlBY3Rpdml0eVwiXSk7XG5cdH1cbn0iXX0=
"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    HomeComponent.prototype.goToQuestionCreation = function () {
        console.log("Going to Question Creation page");
        this.router.navigate(["/askQuestion"]);
    };
    HomeComponent.prototype.goToQuestionList = function () {
        console.log("Going to Question List page");
        this.router.navigate(["/list"]);
    };
    HomeComponent.prototype.goToPersonActivity = function () {
        console.log("Going to current user's Activity page");
        this.router.navigate(["/myActivity"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/home/home.html",
        styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFRL0IsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFMUQsNENBQW9CLEdBQXBCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDaEUsQ0FBQztxQ0FJMkIsZUFBTSxFQUFnQixXQUFJO0dBRjFDLGFBQWEsQ0FrQnpCO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS1jb21tb24uY3NzXCIsIFwicGFnZXMvaG9tZS9ob21lLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuXHRnb1RvUXVlc3Rpb25DcmVhdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZyhcIkdvaW5nIHRvIFF1ZXN0aW9uIENyZWF0aW9uIHBhZ2VcIik7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2Fza1F1ZXN0aW9uXCJdKTtcblx0fVxuXG5cdGdvVG9RdWVzdGlvbkxpc3QoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJHb2luZyB0byBRdWVzdGlvbiBMaXN0IHBhZ2VcIik7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xuXHR9XG5cblx0Z29Ub1BlcnNvbkFjdGl2aXR5KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiR29pbmcgdG8gY3VycmVudCB1c2VyJ3MgQWN0aXZpdHkgcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbXlBY3Rpdml0eVwiXSk7XG5cdH1cbn0iXX0=
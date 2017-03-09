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
        this.router.navigate(["/answeredQuestions"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFRL0IsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFMUQsNENBQW9CLEdBQXBCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNoRSxDQUFDO3FDQUkyQixlQUFNLEVBQWdCLFdBQUk7R0FGMUMsYUFBYSxDQWtCekI7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJsaXN0XCIsXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2hvbWUvaG9tZS5odG1sXCIsXG5cdHN0eWxlVXJsczogW1wicGFnZXMvaG9tZS9ob21lLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9ob21lL2hvbWUuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG5cdGdvVG9RdWVzdGlvbkNyZWF0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiR29pbmcgdG8gUXVlc3Rpb24gQ3JlYXRpb24gcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNrUXVlc3Rpb25cIl0pO1xuXHR9XG5cblx0Z29Ub1F1ZXN0aW9uTGlzdCgpIHtcblx0XHRjb25zb2xlLmxvZyhcIkdvaW5nIHRvIFF1ZXN0aW9uIExpc3QgcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYW5zd2VyZWRRdWVzdGlvbnNcIl0pO1xuXHR9XG5cblx0Z29Ub1BlcnNvbkFjdGl2aXR5KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiR29pbmcgdG8gY3VycmVudCB1c2VyJ3MgQWN0aXZpdHkgcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbXlBY3Rpdml0eVwiXSk7XG5cdH1cbn0iXX0=
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
        this.router.navigate(["/item-animations"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFRL0IsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFMUQsNENBQW9CLEdBQXBCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2hFLENBQUM7cUNBSTJCLGVBQU0sRUFBZ0IsV0FBSTtHQUYxQyxhQUFhLENBa0J6QjtBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImxpc3RcIixcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2hvbWUvaG9tZS5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cblx0Z29Ub1F1ZXN0aW9uQ3JlYXRpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coXCJHb2luZyB0byBRdWVzdGlvbiBDcmVhdGlvbiBwYWdlXCIpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pdGVtLWFuaW1hdGlvbnNcIl0pO1xuXHR9XG5cblx0Z29Ub1F1ZXN0aW9uTGlzdCgpIHtcblx0XHRjb25zb2xlLmxvZyhcIkdvaW5nIHRvIFF1ZXN0aW9uIExpc3QgcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYW5zd2VyZWRRdWVzdGlvbnNcIl0pO1xuXHR9XG5cblx0Z29Ub1BlcnNvbkFjdGl2aXR5KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiR29pbmcgdG8gY3VycmVudCB1c2VyJ3MgQWN0aXZpdHkgcGFnZVwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbXlBY3Rpdml0eVwiXSk7XG5cdH1cbn0iXX0=
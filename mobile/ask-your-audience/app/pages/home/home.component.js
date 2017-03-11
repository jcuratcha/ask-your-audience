"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(router, page) {
        this.router = router;
        this.page = page;
        console.log("Current page: HomeComponent");
    }
    HomeComponent.prototype.goToQuestionCreation = function () {
        console.log("Going to Question Creation page");
    };
    HomeComponent.prototype.goToQuestionList = function () {
        this.router.navigate(["/list"]);
    };
    HomeComponent.prototype.goToPersonActivity = function () {
        console.log("Going to current user's Activity page");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFRL0IsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRDQUFvQixHQUFwQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2hFLENBQUM7cUNBSTJCLGVBQU0sRUFBZ0IsV0FBSTtHQUYxQyxhQUFhLENBaUJ6QjtBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJob21lXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS1jb21tb24uY3NzXCIsIFwicGFnZXMvaG9tZS9ob21lLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQ3VycmVudCBwYWdlOiBIb21lQ29tcG9uZW50XCIpO1xyXG5cdH1cclxuXHJcblx0Z29Ub1F1ZXN0aW9uQ3JlYXRpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkdvaW5nIHRvIFF1ZXN0aW9uIENyZWF0aW9uIHBhZ2VcIik7XHJcblx0fVxyXG5cclxuXHRnb1RvUXVlc3Rpb25MaXN0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xyXG5cdH1cclxuXHJcblx0Z29Ub1BlcnNvbkFjdGl2aXR5KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJHb2luZyB0byBjdXJyZW50IHVzZXIncyBBY3Rpdml0eSBwYWdlXCIpO1xyXG5cdH1cclxufSJdfQ==
"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var poll_list_service_1 = require("../../shared/poll/poll-list.service");
var ListComponent = (function () {
    function ListComponent(pollListService, router, page) {
        this.pollListService = pollListService;
        this.router = router;
        this.page = page;
        this.pollList = [];
        console.log("Current page: ListComponent");
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pollListService.getAllPolls()
            .subscribe(function (loadedPolls) {
            loadedPolls.forEach(function (pollObject) {
                _this.pollList.unshift(pollObject);
            });
        });
    };
    //
    // Called when a list item is tapped
    //
    ListComponent.prototype.onItemTap = function (args) {
        var tappedItem = args.view;
        var poll = tappedItem.bindingContext;
        console.log("Question with pollID = " + poll.id + " tapped.");
        this.router.navigate(["/answer", poll.id]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [poll_list_service_1.PollListService]
    }),
    __metadata("design:paramtypes", [poll_list_service_1.PollListService, router_1.Router, page_1.Page])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELDBDQUEyRDtBQUMzRCxnQ0FBOEI7QUFHOUIseUVBQXNFO0FBU3RFLElBQWEsYUFBYTtJQUd6Qix1QkFBb0IsZUFBZ0MsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUE1RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZoRyxhQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUcxQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO2FBQ2pDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDckIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsRUFBRTtJQUNGLG9DQUFvQztJQUNwQyxFQUFFO0lBQ0ssaUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNwQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQzVCLENBQUM7cUNBS29DLG1DQUFlLEVBQWtCLGVBQU0sRUFBZ0IsV0FBSTtHQUhwRixhQUFhLENBeUJ6QjtBQXpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIlxyXG5cclxuaW1wb3J0IHsgUG9sbCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9sbC9wb2xsXCI7XHJcbmltcG9ydCB7IFBvbGxMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9sbC9wb2xsLWxpc3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXHJcblx0cHJvdmlkZXJzOiBbUG9sbExpc3RTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBvbGxMaXN0OiBBcnJheTxQb2xsPiA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxMaXN0U2VydmljZTogUG9sbExpc3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQ3VycmVudCBwYWdlOiBMaXN0Q29tcG9uZW50XCIpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnBvbGxMaXN0U2VydmljZS5nZXRBbGxQb2xscygpXHJcblx0XHQuc3Vic2NyaWJlKGxvYWRlZFBvbGxzID0+IHtcclxuXHRcdFx0bG9hZGVkUG9sbHMuZm9yRWFjaCgocG9sbE9iamVjdCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucG9sbExpc3QudW5zaGlmdChwb2xsT2JqZWN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cdFxyXG5cclxuXHQvL1xyXG5cdC8vIENhbGxlZCB3aGVuIGEgbGlzdCBpdGVtIGlzIHRhcHBlZFxyXG5cdC8vXHJcblx0cHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcblx0XHR2YXIgdGFwcGVkSXRlbSA9IGFyZ3MudmlldztcclxuXHRcdHZhciBwb2xsID0gdGFwcGVkSXRlbS5iaW5kaW5nQ29udGV4dDtcclxuXHRcdGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gd2l0aCBwb2xsSUQgPSBcIiArIHBvbGwuaWQgKyBcIiB0YXBwZWQuXCIpO1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2Fuc3dlclwiLCBwb2xsLmlkXSk7XHJcblx0fVxyXG59Il19
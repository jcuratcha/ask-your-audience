"use strict";
var core_1 = require("@angular/core");
var poll_list_service_1 = require("../../shared/poll/poll-list.service");
var myActivityComponent = (function () {
    function myActivityComponent() {
        this.groceryList = [];
    }
    myActivityComponent.prototype.ngOnInit = function () {
        this.groceryList.push({ name: "Question1" });
        this.groceryList.push({ name: "Question2" });
        this.groceryList.push({ name: "Question3" });
    };
    return myActivityComponent;
}());
myActivityComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/myActivity/myActivity.html",
        styleUrls: ["pages/myActivity/myActivity-common.css", "pages/myActivity/myActivity.css"],
        providers: [poll_list_service_1.PollListService]
    })
], myActivityComponent);
exports.myActivityComponent = myActivityComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlBY3Rpdml0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteUFjdGl2aXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHlFQUFzRTtBQVN0RSxJQUFhLG1CQUFtQjtJQVBoQztRQVFDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztJQVFqQyxDQUFDO0lBTkMsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFSCwwQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksbUJBQW1CO0lBUC9CLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxFQUFFLGlDQUFpQyxDQUFDO1FBQ3hGLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7S0FDNUIsQ0FBQztHQUVXLG1CQUFtQixDQVMvQjtBQVRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9sbCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9sbC9wb2xsXCI7XG5pbXBvcnQgeyBQb2xsTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbC1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImxpc3RcIixcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvbXlBY3Rpdml0eS9teUFjdGl2aXR5Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9teUFjdGl2aXR5L215QWN0aXZpdHktY29tbW9uLmNzc1wiLCBcInBhZ2VzL215QWN0aXZpdHkvbXlBY3Rpdml0eS5jc3NcIl0sXG5cdHByb3ZpZGVyczogW1BvbGxMaXN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBteUFjdGl2aXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Z3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBuYW1lOiBcIlF1ZXN0aW9uMVwiIH0pO1xuICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IG5hbWU6IFwiUXVlc3Rpb24yXCIgfSk7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgbmFtZTogXCJRdWVzdGlvbjNcIiB9KTtcbiAgfVxuXG59Il19
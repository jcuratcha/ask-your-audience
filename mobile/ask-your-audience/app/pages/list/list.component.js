"use strict";
var core_1 = require("@angular/core");
var poll_list_service_1 = require("../../shared/poll/poll-list.service");
var ListComponent = (function () {
    function ListComponent(pollListService) {
        this.pollListService = pollListService;
        this.pollList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pollListService.load()
            .subscribe(function (loadedPolls) {
            loadedPolls.forEach(function (pollObject) {
                _this.pollList.unshift(pollObject);
            });
        });
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
    __metadata("design:paramtypes", [poll_list_service_1.PollListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHlFQUFzRTtBQVN0RSxJQUFhLGFBQWE7SUFHekIsdUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUZwRCxhQUFRLEdBQWdCLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRXhELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDckIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUM1QixDQUFDO3FDQUtvQyxtQ0FBZTtHQUh4QyxhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvbGwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbFwiO1xuaW1wb3J0IHsgUG9sbExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wb2xsL3BvbGwtbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJsaXN0XCIsXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG5cdHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxuXHRwcm92aWRlcnM6IFtQb2xsTGlzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHBvbGxMaXN0OiBBcnJheTxQb2xsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcG9sbExpc3RTZXJ2aWNlOiBQb2xsTGlzdFNlcnZpY2UpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wb2xsTGlzdFNlcnZpY2UubG9hZCgpXG5cdFx0LnN1YnNjcmliZShsb2FkZWRQb2xscyA9PiB7XG5cdFx0XHRsb2FkZWRQb2xscy5mb3JFYWNoKChwb2xsT2JqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMucG9sbExpc3QudW5zaGlmdChwb2xsT2JqZWN0KTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cdFxufSJdfQ==
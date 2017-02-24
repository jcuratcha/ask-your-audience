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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHlFQUFzRTtBQVN0RSxJQUFhLGFBQWE7SUFHekIsdUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUZwRCxhQUFRLEdBQWdCLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRXhELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDckIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUM1QixDQUFDO3FDQUtvQyxtQ0FBZTtHQUh4QyxhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUG9sbCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9sbC9wb2xsXCI7XHJcbmltcG9ydCB7IFBvbGxMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9sbC9wb2xsLWxpc3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXHJcblx0cHJvdmlkZXJzOiBbUG9sbExpc3RTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBvbGxMaXN0OiBBcnJheTxQb2xsPiA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxMaXN0U2VydmljZTogUG9sbExpc3RTZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMucG9sbExpc3RTZXJ2aWNlLmxvYWQoKVxyXG5cdFx0LnN1YnNjcmliZShsb2FkZWRQb2xscyA9PiB7XHJcblx0XHRcdGxvYWRlZFBvbGxzLmZvckVhY2goKHBvbGxPYmplY3QpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBvbGxMaXN0LnVuc2hpZnQocG9sbE9iamVjdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHRcclxufSJdfQ==
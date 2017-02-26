"use strict";
var core_1 = require("@angular/core");
var poll_1 = require("../../shared/poll/poll");
var poll_list_service_1 = require("../../shared/poll/poll-list.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
require("rxjs/add/operator/switchMap");
var ListComponent = (function () {
    function ListComponent(pollListService, router, page) {
        this.pollListService = pollListService;
        this.router = router;
        this.page = page;
        this.pollList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.pollList = this.createMockPollList();
    };
    ListComponent.prototype.onItemTap = function (args) {
        var tappedItem = args.view;
        var poll = tappedItem.bindingContext;
        console.log("Question with pollID = " + poll.id + " tapped.");
        this.router.navigate(["/answer"]);
        // console.log("Question with pollID = " + args.index + " tapped.");
    };
    ListComponent.prototype.createMockPollList = function () {
        var polls = [];
        for (var i = 0; i < 5; ++i) {
            polls.unshift(new poll_1.Poll(i, "Question " + i, ["a1", "a2", "a3"], [i, i + 1, i + 2], "me"));
        }
        return polls;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBQ3pFLCtDQUE4QztBQUM5Qyx5RUFBc0U7QUFDdEUsMENBQTJEO0FBQzNELGdDQUErQjtBQUUvQix1Q0FBb0M7QUFTcEMsSUFBYSxhQUFhO0lBR3pCLHVCQUFvQixlQUFnQyxFQUFVLE1BQWMsRUFBVSxJQUFVO1FBQTVFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRmhHLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO0lBRXdFLENBQUM7SUFFcEcsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDcEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsb0VBQW9FO0lBQ3JFLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFJLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUM1QixDQUFDO3FDQUtvQyxtQ0FBZSxFQUFrQixlQUFNLEVBQWdCLFdBQUk7R0FIcEYsYUFBYSxDQTJCekI7QUEzQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvbGwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbFwiO1xuaW1wb3J0IHsgUG9sbExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wb2xsL3BvbGwtbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJsaXN0XCIsXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG5cdHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxuXHRwcm92aWRlcnM6IFtQb2xsTGlzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHBvbGxMaXN0OiBBcnJheTxQb2xsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcG9sbExpc3RTZXJ2aWNlOiBQb2xsTGlzdFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnBvbGxMaXN0ID0gdGhpcy5jcmVhdGVNb2NrUG9sbExpc3QoKTtcblx0fVx0XG5cblx0cHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG5cdFx0dmFyIHRhcHBlZEl0ZW0gPSBhcmdzLnZpZXc7XG5cdFx0dmFyIHBvbGwgPSB0YXBwZWRJdGVtLmJpbmRpbmdDb250ZXh0O1xuXHRcdGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gd2l0aCBwb2xsSUQgPSBcIiArIHBvbGwuaWQgKyBcIiB0YXBwZWQuXCIpO1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2Fuc3dlclwiXSk7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJRdWVzdGlvbiB3aXRoIHBvbGxJRCA9IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZC5cIik7XG5cdH1cblxuXHRjcmVhdGVNb2NrUG9sbExpc3QoKSB7XG5cdFx0dmFyIHBvbGxzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDU7ICsraSkge1xuXHRcdFx0cG9sbHMudW5zaGlmdChuZXcgUG9sbChpLCBcIlF1ZXN0aW9uIFwiICsgaSwgW1wiYTFcIiwgXCJhMlwiLCBcImEzXCJdLCBbaSxpKzEsaSsyXSwgXCJtZVwiKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvbGxzO1xuXHR9XG59Il19
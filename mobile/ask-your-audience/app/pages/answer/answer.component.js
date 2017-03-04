"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var poll_1 = require("../../shared/poll/poll");
var poll_service_1 = require("../../shared/poll/poll.service");
var AnswerComponent = (function () {
    function AnswerComponent(pollService, router, page) {
        this.pollService = pollService;
        this.router = router;
        this.page = page;
        this.optionList = [];
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Opening Answer page for poll with id=" + this.poll.id);
        this.poll = new poll_1.Poll(0, "What is the question?", ["To be", "Not to be"], [0, 0], "you");
        this.optionList = this.poll.options;
        var id = this.router.snapshot.params['id'];
        this.pollService.load(id)
            .subscribe(function (poll) { return _this.poll = poll; });
    };
    return AnswerComponent;
}());
AnswerComponent = __decorate([
    core_1.Component({
        selector: "answer",
        templateUrl: "pages/answer/answer.html",
        styleUrls: ["pages/answer/answer-common.css", "pages/answer/answer.css"],
        providers: [poll_service_1.PollService]
    }),
    __metadata("design:paramtypes", [poll_service_1.PollService, router_1.ActivatedRoute, page_1.Page])
], AnswerComponent);
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBaUQ7QUFDakQsZ0NBQStCO0FBRS9CLCtDQUE4QztBQUM5QywrREFBNkQ7QUFTN0QsSUFBYSxlQUFlO0lBSTNCLHlCQUFvQixXQUF3QixFQUFVLE1BQXNCLEVBQVUsSUFBVTtRQUE1RSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZoRyxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBRW1GLENBQUM7SUFFcEcsa0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUN2QixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztRQUN4RSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQ3hCLENBQUM7cUNBTWdDLDBCQUFXLEVBQWtCLHVCQUFjLEVBQWdCLFdBQUk7R0FKcEYsZUFBZSxDQWdCM0I7QUFoQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IFBvbGwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbFwiO1xuaW1wb3J0IHsgUG9sbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJhbnN3ZXJcIixcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG5cdHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCIsIFwicGFnZXMvYW5zd2VyL2Fuc3dlci5jc3NcIl0sXG5cdHByb3ZpZGVyczogW1BvbGxTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHBvbGw6IFBvbGw7XG5cdG9wdGlvbkxpc3QgPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxTZXJ2aWNlOiBQb2xsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJPcGVuaW5nIEFuc3dlciBwYWdlIGZvciBwb2xsIHdpdGggaWQ9XCIgKyB0aGlzLnBvbGwuaWQpO1xuXG5cdFx0dGhpcy5wb2xsID0gbmV3IFBvbGwoMCwgXCJXaGF0IGlzIHRoZSBxdWVzdGlvbj9cIiwgW1wiVG8gYmVcIiwgXCJOb3QgdG8gYmVcIl0sIFswLCAwXSwgXCJ5b3VcIik7XG5cdFx0dGhpcy5vcHRpb25MaXN0ID0gdGhpcy5wb2xsLm9wdGlvbnM7XG5cblx0XHRsZXQgaWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG5cdFx0dGhpcy5wb2xsU2VydmljZS5sb2FkKGlkKVxuXHRcdFx0LnN1YnNjcmliZShwb2xsID0+IHRoaXMucG9sbCA9IHBvbGwpO1xuXHR9XG59Il19
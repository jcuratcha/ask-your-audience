"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var poll_service_1 = require("../../shared/poll/poll.service");
var AnswerComponent = (function () {
    function AnswerComponent(pollService, router, page) {
        this.pollService = pollService;
        this.router = router;
        this.page = page;
        console.log("Current page: AnswerComponent");
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.router.snapshot.params['id'];
        this.pollService.getPoll(this.id)
            .subscribe(function (newPoll) {
            _this.poll = newPoll;
            _this.question = newPoll.question;
            _this.options = newPoll.options;
        });
    };
    //
    // Send vote request to server for tapped option and for current poll
    // 
    AnswerComponent.prototype.onVoteButtonTapped = function (eventData) {
        var button = eventData.object;
        var votedOption = button.bindingContext;
        var index = this.options.indexOf(votedOption);
        this.pollService.addPollVote(this.id, index)
            .subscribe(function (votedPoll) {
            console.log("Current vote: " + JSON.stringify(votedPoll));
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBaUQ7QUFDakQsZ0NBQStCO0FBRy9CLCtEQUE2RDtBQVM3RCxJQUFhLGVBQWU7SUFPM0IseUJBQW9CLFdBQXdCLEVBQVUsTUFBc0IsRUFBVSxJQUFVO1FBQTVFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQy9GLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsRUFBRTtJQUNGLHFFQUFxRTtJQUNyRSxHQUFHO0lBQ0gsNENBQWtCLEdBQWxCLFVBQW1CLFNBQVM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBRXhDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO2FBQzFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7UUFDeEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN4QixDQUFDO3FDQVNnQywwQkFBVyxFQUFrQix1QkFBYyxFQUFnQixXQUFJO0dBUHBGLGVBQWUsQ0FtQzNCO0FBbkNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IFBvbGwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbFwiO1xyXG5pbXBvcnQgeyBQb2xsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9sbC9wb2xsLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFuc3dlclwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlci9hbnN3ZXIuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCIsIFwicGFnZXMvYW5zd2VyL2Fuc3dlci5jc3NcIl0sXHJcblx0cHJvdmlkZXJzOiBbUG9sbFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwb2xsOiBQb2xsO1xyXG5cdHF1ZXN0aW9uOiBzdHJpbmc7XHJcblx0b3B0aW9uczogQXJyYXk8c3RyaW5nPjtcclxuXHJcblx0cHJpdmF0ZSBpZDogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxTZXJ2aWNlOiBQb2xsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQ3VycmVudCBwYWdlOiBBbnN3ZXJDb21wb25lbnRcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcblx0XHR0aGlzLnBvbGxTZXJ2aWNlLmdldFBvbGwodGhpcy5pZClcclxuXHRcdFx0LnN1YnNjcmliZShuZXdQb2xsID0+IHtcclxuXHRcdFx0XHR0aGlzLnBvbGwgPSBuZXdQb2xsO1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb24gPSBuZXdQb2xsLnF1ZXN0aW9uO1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IG5ld1BvbGwub3B0aW9ucztcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL1xyXG5cdC8vIFNlbmQgdm90ZSByZXF1ZXN0IHRvIHNlcnZlciBmb3IgdGFwcGVkIG9wdGlvbiBhbmQgZm9yIGN1cnJlbnQgcG9sbFxyXG5cdC8vIFxyXG5cdG9uVm90ZUJ1dHRvblRhcHBlZChldmVudERhdGEpIHtcclxuXHRcdHZhciBidXR0b24gPSBldmVudERhdGEub2JqZWN0O1xyXG5cdFx0dmFyIHZvdGVkT3B0aW9uID0gYnV0dG9uLmJpbmRpbmdDb250ZXh0O1xyXG5cclxuXHRcdHZhciBpbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleE9mKHZvdGVkT3B0aW9uKTtcclxuXHJcblx0XHR0aGlzLnBvbGxTZXJ2aWNlLmFkZFBvbGxWb3RlKHRoaXMuaWQsIGluZGV4KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHZvdGVkUG9sbCA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJDdXJyZW50IHZvdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkodm90ZWRQb2xsKSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVx0Il19
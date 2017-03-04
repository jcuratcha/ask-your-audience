"use strict";
var core_1 = require("@angular/core");
var poll_list_service_1 = require("../../shared/poll/poll-list.service");
require("rxjs/add/operator/switchMap");
var askQuestionComponent = (function () {
    function askQuestionComponent() {
        this.clickMessage = '';
        //    pollList: Array<Poll> = [];
        //constructor(private pollListService: PollListService, private router: Router, private page: Page) {}
        //ngOnInit() {
        //	this.pollList = this.createMockPollList();
        //}	
        //public onItemTap(args) {
        //	var tappedItem = args.view;
        //	var poll = tappedItem.bindingContext;
        //	console.log("Question with pollID = " + poll.id + " tapped.");
        //	this.router.navigate(["/answer"]);
        //	// console.log("Question with pollID = " + args.index + " tapped.");
        //}
        //createMockPollList() {
        //	var polls = [];
        //	for (var i = 0; i < 5; ++i) {
        //		polls.unshift(new Poll(i, "Question " + i, ["a1", "a2", "a3"], [i,i+1,i+2], "me"));
        //	}
        //	return polls;
        //}
        //question = "";
        // submit() {
        //   alert("You’re asking:" + this.question);
        // }
        //@ViewChild("CB1") FirstCheckBox: ElementRef;
        //    constructor() {}
        //     toggleCheck() {
        //        this.FirstCheckBox.nativeElement.toggle();
        //    }
        //     getCheckProp() {
        //        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
        //    }
    }
    askQuestionComponent.prototype.onClickMe = function () {
        alert("You are my hero!");
    };
    return askQuestionComponent;
}());
askQuestionComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/askQuestion/askQuestion.html",
        styleUrls: ["pages/askQuestion/askQuestion-common.css", "pages/askQuestion/askQuestion.css"],
        providers: [poll_list_service_1.PollListService]
    })
], askQuestionComponent);
exports.askQuestionComponent = askQuestionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNrUXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNrUXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUseUVBQXNFO0FBSXRFLHVDQUFxQztBQVlyQyxJQUFhLG9CQUFvQjtJQVBqQztRQVFBLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBT2pCLGlDQUFpQztRQUVqQyxzR0FBc0c7UUFFdEcsY0FBYztRQUNkLDZDQUE2QztRQUM3QyxJQUFJO1FBRUosMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5Qix3Q0FBd0M7UUFDeEMsaUVBQWlFO1FBRWpFLHFDQUFxQztRQUNyQyx1RUFBdUU7UUFDdkUsR0FBRztRQUVILHdCQUF3QjtRQUN4QixrQkFBa0I7UUFFbEIsZ0NBQWdDO1FBQ2hDLHVGQUF1RjtRQUN2RixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLEdBQUc7UUFHSCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLDZDQUE2QztRQUM3QyxJQUFJO1FBSUwsOENBQThDO1FBQzlDLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsb0RBQW9EO1FBQ3BELE9BQU87UUFFUCx1QkFBdUI7UUFDdkIsMEZBQTBGO1FBQzFGLE9BQU87SUFDUCxDQUFDO0lBakRDLHdDQUFTLEdBQVQ7UUFDRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBK0NILDJCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQXBEWSxvQkFBb0I7SUFQaEMsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUMsMENBQTBDLEVBQUUsbUNBQW1DLENBQUM7UUFDNUYsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUM1QixDQUFDO0dBRVcsb0JBQW9CLENBb0RoQztBQXBEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvbGwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvbGwvcG9sbFwiO1xuaW1wb3J0IHsgUG9sbExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wb2xsL3BvbGwtbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuXG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveCc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSAndWkvZnJhbWUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9hc2tRdWVzdGlvbi9hc2tRdWVzdGlvbi5odG1sXCIsXG5cdHN0eWxlVXJsczogW1wicGFnZXMvYXNrUXVlc3Rpb24vYXNrUXVlc3Rpb24tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2Fza1F1ZXN0aW9uL2Fza1F1ZXN0aW9uLmNzc1wiXSxcblx0cHJvdmlkZXJzOiBbUG9sbExpc3RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIGFza1F1ZXN0aW9uQ29tcG9uZW50IHtcbmNsaWNrTWVzc2FnZSA9ICcnO1xuXG4gIG9uQ2xpY2tNZSgpIHtcbiAgICBhbGVydChcIllvdSBhcmUgbXkgaGVybyFcIik7XG4gIH1cblxuXG4gLy8gICAgcG9sbExpc3Q6IEFycmF5PFBvbGw+ID0gW107XG5cblx0Ly9jb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxMaXN0U2VydmljZTogUG9sbExpc3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cblx0Ly9uZ09uSW5pdCgpIHtcblx0Ly9cdHRoaXMucG9sbExpc3QgPSB0aGlzLmNyZWF0ZU1vY2tQb2xsTGlzdCgpO1xuXHQvL31cdFxuXG5cdC8vcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG5cdC8vXHR2YXIgdGFwcGVkSXRlbSA9IGFyZ3Mudmlldztcblx0Ly9cdHZhciBwb2xsID0gdGFwcGVkSXRlbS5iaW5kaW5nQ29udGV4dDtcblx0Ly9cdGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gd2l0aCBwb2xsSUQgPSBcIiArIHBvbGwuaWQgKyBcIiB0YXBwZWQuXCIpO1xuXG5cdC8vXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYW5zd2VyXCJdKTtcblx0Ly9cdC8vIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gd2l0aCBwb2xsSUQgPSBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWQuXCIpO1xuXHQvL31cblxuXHQvL2NyZWF0ZU1vY2tQb2xsTGlzdCgpIHtcblx0Ly9cdHZhciBwb2xscyA9IFtdO1xuXG5cdC8vXHRmb3IgKHZhciBpID0gMDsgaSA8IDU7ICsraSkge1xuXHQvL1x0XHRwb2xscy51bnNoaWZ0KG5ldyBQb2xsKGksIFwiUXVlc3Rpb24gXCIgKyBpLCBbXCJhMVwiLCBcImEyXCIsIFwiYTNcIl0sIFtpLGkrMSxpKzJdLCBcIm1lXCIpKTtcblx0Ly9cdH1cblxuXHQvL1x0cmV0dXJuIHBvbGxzO1xuXHQvL31cblxuXG5cdC8vcXVlc3Rpb24gPSBcIlwiO1xuIC8vIHN1Ym1pdCgpIHtcbiAvLyAgIGFsZXJ0KFwiWW914oCZcmUgYXNraW5nOlwiICsgdGhpcy5xdWVzdGlvbik7XG4gLy8gfVxuXG5cblxuLy9AVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG4vLyAgICBjb25zdHJ1Y3RvcigpIHt9XG4vLyAgICAgdG9nZ2xlQ2hlY2soKSB7XG4vLyAgICAgICAgdGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQudG9nZ2xlKCk7XG4vLyAgICB9XG4gXG4vLyAgICAgZ2V0Q2hlY2tQcm9wKCkge1xuLy8gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2VkIHByb3AgdmFsdWUgPSAnICsgdGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCk7XG4vLyAgICB9XG59XG4iXX0=
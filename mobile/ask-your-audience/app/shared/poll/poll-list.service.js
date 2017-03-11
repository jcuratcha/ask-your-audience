"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var poll_1 = require("./poll");
var PollListService = (function () {
    function PollListService(http) {
        this.http = http;
        this.getAllPointsUrl = "/aya/api/get-polls";
    }
    PollListService.prototype.getAllPolls = function () {
        var headers = this.createRequestHeaders();
        console.log("Fetching all polls.");
        return this.http.get(config_1.Config.apiUrl + this.getAllPointsUrl, {
            headers: headers
        })
            .map(function (res) { return res.json()['polls']; })
            .map(function (data) {
            var pollList = [];
            data.forEach(function (poll) {
                pollList.push(new poll_1.Poll(poll.pollID, poll.question, poll.options, poll.votes, poll.owner));
            });
            return pollList;
        })
            .catch(this.handleErrors);
    };
    PollListService.prototype.createRequestHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return headers;
    };
    PollListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return PollListService;
}());
PollListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PollListService);
exports.PollListService = PollListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2xsLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUNuQywrQkFBOEI7QUFHOUIsSUFBYSxlQUFlO0lBQzNCLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUV0QixvQkFBZSxHQUFHLG9CQUFvQixDQUFDO0lBRmQsQ0FBQztJQUlsQyxxQ0FBVyxHQUFYO1FBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDMUQsT0FBTyxFQUFFLE9BQU87U0FDaEIsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQzthQUMvQixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUNyQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLENBQ1YsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLDhDQUFvQixHQUE1QjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FFYyxXQUFJO0dBRGxCLGVBQWUsQ0EwQzNCO0FBMUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQb2xsIH0gZnJvbSBcIi4vcG9sbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9sbExpc3RTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG5cdHByaXZhdGUgZ2V0QWxsUG9pbnRzVXJsID0gXCIvYXlhL2FwaS9nZXQtcG9sbHNcIjtcclxuXHJcblx0Z2V0QWxsUG9sbHMoKSB7XHJcblx0XHRsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcnMoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIkZldGNoaW5nIGFsbCBwb2xscy5cIik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIHRoaXMuZ2V0QWxsUG9pbnRzVXJsLCB7XHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnNcclxuXHRcdH0pXHJcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpWydwb2xscyddKVxyXG5cdFx0Lm1hcChkYXRhID0+IHtcclxuXHRcdFx0bGV0IHBvbGxMaXN0ID0gW107XHJcblx0XHRcdGRhdGEuZm9yRWFjaCgocG9sbCkgPT4ge1xyXG5cdFx0XHRcdHBvbGxMaXN0LnB1c2gobmV3IFBvbGwoXHJcblx0XHRcdFx0XHRwb2xsLnBvbGxJRCxcclxuXHRcdFx0XHRcdHBvbGwucXVlc3Rpb24sXHJcblx0XHRcdFx0XHRwb2xsLm9wdGlvbnMsXHJcblx0XHRcdFx0XHRwb2xsLnZvdGVzLFxyXG5cdFx0XHRcdFx0cG9sbC5vd25lclxyXG5cdFx0XHRcdCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHBvbGxMaXN0O1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXJzKCkge1xyXG5cdFx0bGV0IGhlYWRlcnNcdD0gbmV3IEhlYWRlcnMoKTtcclxuXHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xyXG5cclxuXHRcdHJldHVybiBoZWFkZXJzO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcblx0fVxyXG59Il19
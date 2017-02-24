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
    }
    PollListService.prototype.load = function () {
        var headers = new http_1.Headers();
        // headers.append("Authorization", "Bearer " + Config.token);
        console.log("Fetching polls.");
        return this.http.get(config_1.Config.apiUrl + "/aya/api/get-polls", {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            var pollList = [];
            data.Result.forEach(function (poll) {
                pollList.push(new poll_1.Poll(poll.pollID, poll.question, poll.options, poll.votes, poll.owner));
            });
            return pollList;
        })
            .catch(this.handleErrors);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2xsLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUNuQywrQkFBOEI7QUFHOUIsSUFBYSxlQUFlO0lBQzNCLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsOEJBQUksR0FBSjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsNkRBQTZEO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsRUFBRTtZQUMxRCxPQUFPLEVBQUUsT0FBTztTQUNoQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUVQLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRTtRQUFWLENBQVUsQ0FDVjthQUNBLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUNyQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLENBQ1YsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUVjLFdBQUk7R0FEbEIsZUFBZSxDQW9DM0I7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgUG9sbCB9IGZyb20gXCIuL3BvbGxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvbGxMaXN0U2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuXHRsb2FkKCkge1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0Ly8gaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIkZldGNoaW5nIHBvbGxzLlwiKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCIvYXlhL2FwaS9nZXQtcG9sbHNcIiwge1xyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzXHJcblx0XHR9KVxyXG5cdFx0Lm1hcChyZXMgPT5cclxuXHRcdFx0XHJcblx0XHRcdHJlcy5qc29uKClcclxuXHRcdClcclxuXHRcdC5tYXAoZGF0YSA9PiB7XHJcblx0XHRcdGxldCBwb2xsTGlzdCA9IFtdO1xyXG5cdFx0XHRkYXRhLlJlc3VsdC5mb3JFYWNoKChwb2xsKSA9PiB7XHJcblx0XHRcdFx0cG9sbExpc3QucHVzaChuZXcgUG9sbChcclxuXHRcdFx0XHRcdHBvbGwucG9sbElELFxyXG5cdFx0XHRcdFx0cG9sbC5xdWVzdGlvbixcclxuXHRcdFx0XHRcdHBvbGwub3B0aW9ucyxcclxuXHRcdFx0XHRcdHBvbGwudm90ZXMsXHJcblx0XHRcdFx0XHRwb2xsLm93bmVyXHJcblx0XHRcdFx0KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcG9sbExpc3Q7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG5cdH1cclxufSJdfQ==
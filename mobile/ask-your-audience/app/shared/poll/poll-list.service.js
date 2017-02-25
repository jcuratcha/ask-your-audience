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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2xsLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUNuQywrQkFBOEI7QUFHOUIsSUFBYSxlQUFlO0lBQzNCLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsOEJBQUksR0FBSjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsNkRBQTZEO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsRUFBRTtZQUMxRCxPQUFPLEVBQUUsT0FBTztTQUNoQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUVQLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRTtRQUFWLENBQVUsQ0FDVjthQUNBLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUNyQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLENBQ1YsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUVjLFdBQUk7R0FEbEIsZUFBZSxDQW9DM0I7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgUG9sbCB9IGZyb20gXCIuL3BvbGxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvbGxMaXN0U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuXHRsb2FkKCkge1xuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHQvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xuXG5cdFx0Y29uc29sZS5sb2coXCJGZXRjaGluZyBwb2xscy5cIik7XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCIvYXlhL2FwaS9nZXQtcG9sbHNcIiwge1xuXHRcdFx0aGVhZGVyczogaGVhZGVyc1xuXHRcdH0pXG5cdFx0Lm1hcChyZXMgPT5cblx0XHRcdFxuXHRcdFx0cmVzLmpzb24oKVxuXHRcdClcblx0XHQubWFwKGRhdGEgPT4ge1xuXHRcdFx0bGV0IHBvbGxMaXN0ID0gW107XG5cdFx0XHRkYXRhLlJlc3VsdC5mb3JFYWNoKChwb2xsKSA9PiB7XG5cdFx0XHRcdHBvbGxMaXN0LnB1c2gobmV3IFBvbGwoXG5cdFx0XHRcdFx0cG9sbC5wb2xsSUQsXG5cdFx0XHRcdFx0cG9sbC5xdWVzdGlvbixcblx0XHRcdFx0XHRwb2xsLm9wdGlvbnMsXG5cdFx0XHRcdFx0cG9sbC52b3Rlcyxcblx0XHRcdFx0XHRwb2xsLm93bmVyXG5cdFx0XHRcdCkpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcG9sbExpc3Q7XG5cdFx0fSlcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuXHR9XG5cblx0aGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcblx0fVxufSJdfQ==
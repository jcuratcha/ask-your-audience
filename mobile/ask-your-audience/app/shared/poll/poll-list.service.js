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
            .map(function (res) { return res.json(); })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2xsLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUNuQywrQkFBOEI7QUFHOUIsSUFBYSxlQUFlO0lBQzNCLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsOEJBQUksR0FBSjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsNkRBQTZEO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsRUFBRTtZQUMxRCxPQUFPLEVBQUUsT0FBTztTQUNoQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FDckIsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsS0FBSyxDQUNWLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FFYyxXQUFJO0dBRGxCLGVBQWUsQ0FpQzNCO0FBakNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFBvbGwgfSBmcm9tIFwiLi9wb2xsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2xsTGlzdFNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cblx0bG9hZCgpIHtcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0Ly8gaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgcG9sbHMuXCIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFwiL2F5YS9hcGkvZ2V0LXBvbGxzXCIsIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnNcblx0XHR9KVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0Lm1hcChkYXRhID0+IHtcblx0XHRcdGxldCBwb2xsTGlzdCA9IFtdO1xuXHRcdFx0ZGF0YS5SZXN1bHQuZm9yRWFjaCgocG9sbCkgPT4ge1xuXHRcdFx0XHRwb2xsTGlzdC5wdXNoKG5ldyBQb2xsKFxuXHRcdFx0XHRcdHBvbGwucG9sbElELFxuXHRcdFx0XHRcdHBvbGwucXVlc3Rpb24sXG5cdFx0XHRcdFx0cG9sbC5vcHRpb25zLFxuXHRcdFx0XHRcdHBvbGwudm90ZXMsXG5cdFx0XHRcdFx0cG9sbC5vd25lclxuXHRcdFx0XHQpKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHBvbGxMaXN0O1xuXHRcdH0pXG5cdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcblx0fVxuXG5cdGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG5cdH1cbn0iXX0=
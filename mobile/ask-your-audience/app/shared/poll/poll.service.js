"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var poll_1 = require("./poll");
var PollService = (function () {
    function PollService(http) {
        this.http = http;
    }
    PollService.prototype.load = function (id) {
        var headers = new http_1.Headers();
        console.log("Fetching poll id = " + id);
        return this.http.get(config_1.Config.apiUrl + "/aya/api/get-polls/" + id, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var result = data.Result;
            return new poll_1.Poll(result.pollID, result.question, result.options, result.votes, result.owner);
        })
            .catch(this.handleErrors);
    };
    PollService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return PollService;
}());
PollService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PollService);
exports.PollService = PollService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0Isb0NBQW1DO0FBQ25DLCtCQUE4QjtBQUc5QixJQUFhLFdBQVc7SUFDdkIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQywwQkFBSSxHQUFKLFVBQUssRUFBVTtRQUNkLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUV4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsR0FBRyxFQUFFLEVBQUU7WUFDaEUsT0FBTyxFQUFFLE9BQU87U0FDaEIsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksV0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVjLFdBQUk7R0FEbEIsV0FBVyxDQXVCdkI7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgUG9sbCB9IGZyb20gXCIuL3BvbGxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvbGxTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG5cdGxvYWQoaWQ6IG51bWJlcikge1xuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgcG9sbCBpZCA9IFwiICsgaWQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFwiL2F5YS9hcGkvZ2V0LXBvbGxzL1wiICsgaWQsIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnNcblx0XHR9KVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0Lm1hcChkYXRhID0+IHtcblx0XHRcdHZhciByZXN1bHQgPSBkYXRhLlJlc3VsdDtcblx0XHRcdHJldHVybiBuZXcgUG9sbChyZXN1bHQucG9sbElELCByZXN1bHQucXVlc3Rpb24sIHJlc3VsdC5vcHRpb25zLCByZXN1bHQudm90ZXMsIHJlc3VsdC5vd25lcik7XG5cdFx0fSlcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuXHR9XG5cblx0aGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcblx0fVxufSJdfQ==
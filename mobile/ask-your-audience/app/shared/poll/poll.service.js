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
    //
    // Calls server to get the poll with the id passed in.
    //
    PollService.prototype.getPoll = function (id) {
        var headers = this.createRequestHeaders();
        console.log("	Fetching poll id = " + id);
        return this.http.get(config_1.Config.apiUrl + "/aya/api/get-polls/" + id, {
            headers: headers
        })
            .map(function (res) { return res.json()['polls'][0]; })
            .map(function (data) {
            var options = [];
            var votes = [];
            data['options'].forEach(function (option) {
                options.push(option);
            });
            data['votes'].forEach(function (vote) {
                votes.push(vote);
            });
            // data.forEach((poll) => {
            // 	return new Poll(data.pollID, data.question, data.options, data.votes, data.owner);
            // });
            return new poll_1.Poll(data.pollID, data.question, options, votes, data.owner);
        })
            .catch(this.handleErrors);
    };
    //
    //	Adds a vote for an option on the current poll id passed in
    //
    PollService.prototype.addPollVote = function (id, vote) {
        var headers = this.createRequestHeaders();
        console.log("	Adding vote for pollID: " + id + "; optionID: " + vote);
        console.log("	" + config_1.Config.apiUrl + "/aya/api/vote/" + id + '/' + vote + "/");
        return this.http.get(config_1.Config.apiUrl + "/aya/api/vote/" + id + '/' + vote + "/", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    //
    // Creates request headers for making Http requests
    //
    PollService.prototype.createRequestHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return headers;
    };
    // 
    // Simple logging infrastructure to handle errors
    //
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0Isb0NBQW1DO0FBQ25DLCtCQUE4QjtBQUc5QixJQUFhLFdBQVc7SUFDdkIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxFQUFFO0lBQ0Ysc0RBQXNEO0lBQ3RELEVBQUU7SUFDRiw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLHFCQUFxQixHQUFHLEVBQUUsRUFBRTtZQUNoRSxPQUFPLEVBQUUsT0FBTztTQUNoQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRWYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtZQUNGLDJCQUEyQjtZQUMzQixzRkFBc0Y7WUFDdEYsTUFBTTtZQUVOLE1BQU0sQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtJQUNGLDZEQUE2RDtJQUM3RCxFQUFFO0lBQ0YsaUNBQVcsR0FBWCxVQUFZLEVBQVUsRUFBRSxJQUFZO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsRUFBRSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRTNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUM5RSxPQUFPLEVBQUUsT0FBTztTQUNoQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxFQUFFO0lBQ0YsbURBQW1EO0lBQ25ELEVBQUU7SUFDTSwwQ0FBb0IsR0FBNUI7UUFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUQsR0FBRztJQUNILGlEQUFpRDtJQUNqRCxFQUFFO0lBQ0Ysa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBRWMsV0FBSTtHQURsQixXQUFXLENBc0V2QjtBQXRFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQb2xsIH0gZnJvbSBcIi4vcG9sbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9sbFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcblx0Ly9cclxuXHQvLyBDYWxscyBzZXJ2ZXIgdG8gZ2V0IHRoZSBwb2xsIHdpdGggdGhlIGlkIHBhc3NlZCBpbi5cclxuXHQvL1xyXG5cdGdldFBvbGwoaWQ6IG51bWJlcikge1xyXG5cdFx0bGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXJzKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJcdEZldGNoaW5nIHBvbGwgaWQgPSBcIiArIGlkKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCIvYXlhL2FwaS9nZXQtcG9sbHMvXCIgKyBpZCwge1xyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzXHJcblx0XHR9KVxyXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKVsncG9sbHMnXVswXSlcclxuXHRcdC5tYXAoZGF0YSA9PiB7XHJcblx0XHRcdGxldCBvcHRpb25zID0gW107XHJcblx0XHRcdGxldCB2b3RlcyA9IFtdO1xyXG5cclxuXHRcdFx0ZGF0YVsnb3B0aW9ucyddLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG5cdFx0XHRcdG9wdGlvbnMucHVzaChvcHRpb24pO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0ZGF0YVsndm90ZXMnXS5mb3JFYWNoKCh2b3RlKSA9PiB7XHJcblx0XHRcdFx0dm90ZXMucHVzaCh2b3RlKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gZGF0YS5mb3JFYWNoKChwb2xsKSA9PiB7XHJcblx0XHRcdC8vIFx0cmV0dXJuIG5ldyBQb2xsKGRhdGEucG9sbElELCBkYXRhLnF1ZXN0aW9uLCBkYXRhLm9wdGlvbnMsIGRhdGEudm90ZXMsIGRhdGEub3duZXIpO1xyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUG9sbChkYXRhLnBvbGxJRCwgZGF0YS5xdWVzdGlvbiwgb3B0aW9ucywgdm90ZXMsIGRhdGEub3duZXIpO1xyXG5cclxuXHRcdH0pXHJcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG5cdH1cclxuXHJcblx0Ly9cclxuXHQvL1x0QWRkcyBhIHZvdGUgZm9yIGFuIG9wdGlvbiBvbiB0aGUgY3VycmVudCBwb2xsIGlkIHBhc3NlZCBpblxyXG5cdC8vXHJcblx0YWRkUG9sbFZvdGUoaWQ6IG51bWJlciwgdm90ZTogbnVtYmVyKSB7XHJcblx0XHRsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcnMoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIlx0QWRkaW5nIHZvdGUgZm9yIHBvbGxJRDogXCIgKyBpZCArIFwiOyBvcHRpb25JRDogXCIgKyB2b3RlKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiXHRcIiArIENvbmZpZy5hcGlVcmwgKyBcIi9heWEvYXBpL3ZvdGUvXCIgKyBpZCArICcvJyArIHZvdGUgKyBcIi9cIilcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCIvYXlhL2FwaS92b3RlL1wiICsgaWQgKyAnLycgKyB2b3RlICsgXCIvXCIsIHtcclxuXHRcdFx0aGVhZGVyczogaGVhZGVyc1xyXG5cdFx0fSlcclxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG5cdH1cclxuXHJcblx0Ly9cclxuXHQvLyBDcmVhdGVzIHJlcXVlc3QgaGVhZGVycyBmb3IgbWFraW5nIEh0dHAgcmVxdWVzdHNcclxuXHQvL1xyXG5cdHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcnMoKSB7XHJcblx0XHRsZXQgaGVhZGVyc1x0PSBuZXcgSGVhZGVycygpO1xyXG5cclxuXHRcdGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7XHJcblxyXG5cdFx0cmV0dXJuIGhlYWRlcnM7XHJcblx0fVxyXG5cclxuXHQvLyBcclxuXHQvLyBTaW1wbGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZSB0byBoYW5kbGUgZXJyb3JzXHJcblx0Ly9cclxuXHRoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuXHR9XHJcbn0iXX0=
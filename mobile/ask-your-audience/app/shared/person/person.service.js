"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.register = function (person) {
        var headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "person", JSON.stringify({
            "email": "What should I buy?",
            "ipaddress": "663b:400c:e5fa:6638:d321:99f:177:40b4"
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    PersonService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return PersonService;
}());
PersonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF1RDtBQUN2RCw4QkFBb0M7QUFDcEMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBbUM7QUFHbkMsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZCxPQUFPLEVBQUcsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRyx1Q0FBdUM7U0FDckQsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNuQjthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxLQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUdjLFdBQUk7R0FGbEIsYUFBYSxDQXVCekI7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vcGVyc29uXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcnNvblNlcnZpY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG5cdHJlZ2lzdGVyKHBlcnNvbjogUGVyc29uKSB7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG5cdFx0XHRDb25maWcuYXBpVXJsICsgXCJwZXJzb25cIixcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFwiZW1haWxcIiA6IFwiV2hhdCBzaG91bGQgSSBidXk/XCIsXHJcblx0XHRcdFx0XCJpcGFkZHJlc3NcIiA6IFwiNjYzYjo0MDBjOmU1ZmE6NjYzODpkMzIxOjk5ZjoxNzc6NDBiNFwiXHJcblx0XHRcdH0pLFxyXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnN9XHJcblx0XHQpXHJcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1x0XHJcblx0fVxyXG5cclxuXHRoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuXHR9XHJcbn0iXX0=
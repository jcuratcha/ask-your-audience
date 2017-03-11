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
    PersonService.prototype.login = function (person) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "oauth/token", JSON.stringify({
            "username": person.email,
            "password": person.password,
            "grant_type": "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    PersonService.prototype.handleErrors = function (error) {
        console.log("Error: " + JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    PersonService.prototype.forceLogin = function (error) {
    };
    return PersonService;
}());
PersonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF1RDtBQUN2RCw4QkFBb0M7QUFDcEMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBbUM7QUFHbkMsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZCxPQUFPLEVBQUcsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRyx1Q0FBdUM7U0FDckQsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNuQjthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2QsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixZQUFZLEVBQUUsVUFBVTtTQUN4QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3BCO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ1AsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFlO0lBRTFCLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUdjLFdBQUk7R0FGbEIsYUFBYSxDQStDekI7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vcGVyc29uXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcnNvblNlcnZpY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG5cdHJlZ2lzdGVyKHBlcnNvbjogUGVyc29uKSB7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG5cdFx0XHRDb25maWcuYXBpVXJsICsgXCJwZXJzb25cIixcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFwiZW1haWxcIiA6IFwiV2hhdCBzaG91bGQgSSBidXk/XCIsXHJcblx0XHRcdFx0XCJpcGFkZHJlc3NcIiA6IFwiNjYzYjo0MDBjOmU1ZmE6NjYzODpkMzIxOjk5ZjoxNzc6NDBiNFwiXHJcblx0XHRcdH0pLFxyXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnN9XHJcblx0XHQpXHJcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1x0XHJcblx0fVxyXG5cclxuXHRsb2dpbihwZXJzb246IFBlcnNvbikge1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0aGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuXHRcdFx0Q29uZmlnLmFwaVVybCArIFwib2F1dGgvdG9rZW5cIixcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFwidXNlcm5hbWVcIjogcGVyc29uLmVtYWlsLFxyXG5cdFx0XHRcdFwicGFzc3dvcmRcIjogcGVyc29uLnBhc3N3b3JkLFxyXG5cdFx0XHRcdFwiZ3JhbnRfdHlwZVwiOiBcInBhc3N3b3JkXCJcclxuXHRcdFx0fSksXHJcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9XHJcblx0XHQpXHJcblx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC5kbyhkYXRhID0+IHtcclxuXHRcdFx0Q29uZmlnLnRva2VuID0gZGF0YS5SZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG5cdH1cclxuXHJcblx0Zm9yY2VMb2dpbihlcnJvcjogUmVzcG9uc2UpIHtcclxuXHJcblx0fVxyXG59Il19
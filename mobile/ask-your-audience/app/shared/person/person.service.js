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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF1RDtBQUN2RCw4QkFBb0M7QUFDcEMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBbUM7QUFHbkMsSUFBYSxhQUFhO0lBRXpCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZCxPQUFPLEVBQUcsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRyx1Q0FBdUM7U0FDckQsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNuQjthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2QsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixZQUFZLEVBQUUsVUFBVTtTQUN4QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3BCO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ1AsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFlO0lBRTFCLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUdjLFdBQUk7R0FGbEIsYUFBYSxDQStDekI7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vcGVyc29uXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzb25TZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cblx0cmVnaXN0ZXIocGVyc29uOiBQZXJzb24pIHtcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0Q29uZmlnLmFwaVVybCArIFwicGVyc29uXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwiZW1haWxcIiA6IFwiV2hhdCBzaG91bGQgSSBidXk/XCIsXG5cdFx0XHRcdFwiaXBhZGRyZXNzXCIgOiBcIjY2M2I6NDAwYzplNWZhOjY2Mzg6ZDMyMTo5OWY6MTc3OjQwYjRcIlxuXHRcdFx0fSksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnN9XG5cdFx0KVxuXHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHRcblx0fVxuXG5cdGxvZ2luKHBlcnNvbjogUGVyc29uKSB7XG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdENvbmZpZy5hcGlVcmwgKyBcIm9hdXRoL3Rva2VuXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidXNlcm5hbWVcIjogcGVyc29uLmVtYWlsLFxuXHRcdFx0XHRcInBhc3N3b3JkXCI6IHBlcnNvbi5wYXNzd29yZCxcblx0XHRcdFx0XCJncmFudF90eXBlXCI6IFwicGFzc3dvcmRcIlxuXHRcdFx0fSksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfVxuXHRcdClcblx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQuZG8oZGF0YSA9PiB7XG5cdFx0XHRDb25maWcudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XG5cdFx0fSlcblx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuXHR9XG5cblx0aGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuXHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuXHR9XG5cblx0Zm9yY2VMb2dpbihlcnJvcjogUmVzcG9uc2UpIHtcblxuXHR9XG59Il19
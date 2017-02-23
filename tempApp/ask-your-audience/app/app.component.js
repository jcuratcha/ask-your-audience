"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  \t<StackLayout>\n\t    <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n  \t\t\tautocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n\t    <TextField hint=\"Password\" secure=\"true\"></TextField>\n\t    <Label text=\"Leave blank to go anonymous\" class=\"sub-description\"></Label>\n\n\t    <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n\t\t<Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n\t</StackLayout>\n  ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQWtCMUMsSUFBYSxZQUFZO0lBaEJ6QjtRQWlCRSxVQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7SUFRckIsQ0FBQztJQU5DLDZCQUFNLEdBQU47UUFDRSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxZQUFZO0lBaEJ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLCtqQkFVVDtRQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7R0FFVyxZQUFZLENBVXhCO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIFx0PFN0YWNrTGF5b3V0PlxuXHQgICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgWyhuZ01vZGVsKV09XCJlbWFpbFwiXG4gIFx0XHRcdGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuXHQgICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG5cdCAgICA8TGFiZWwgdGV4dD1cIkxlYXZlIGJsYW5rIHRvIGdvIGFub255bW91c1wiIGNsYXNzPVwic3ViLWRlc2NyaXB0aW9uXCI+PC9MYWJlbD5cblxuXHQgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1wiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cblx0XHQ8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXCIgKHRhcCk9XCJ0b2dnbGVEaXNwbGF5KClcIj48L0J1dHRvbj5cblx0PC9TdGFja0xheW91dD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZW1haWwgPSBcIm5hdGl2ZXNjcmlwdHJvY2tzQHRlbGVyaWsuY29tXCI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICBzdWJtaXQoKSB7XG4gICAgYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLmVtYWlsKTtcbiAgfVxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufSJdfQ==
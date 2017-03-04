"use strict";
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var list_component_1 = require("./pages/list/list.component");
var askQuestion_component_1 = require("./pages/askQuestion/askQuestion.component");
var myActivity_component_1 = require("./pages/myActivity/myActivity.component");
var answeredQuestions_component_1 = require("./pages/answeredQuestions/answeredQuestions.component");
var answer_component_1 = require("./pages/answer/answer.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "askQuestion", component: askQuestion_component_1.askQuestionComponent },
    { path: "myActivity", component: myActivity_component_1.myActivityComponent },
    { path: "answeredQuestions", component: answeredQuestions_component_1.answeredQuestionsComponent },
    { path: "answer", component: list_component_1.ListComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    home_component_1.HomeComponent,
    list_component_1.ListComponent,
    askQuestion_component_1.askQuestionComponent,
    myActivity_component_1.myActivityComponent,
    answeredQuestions_component_1.answeredQuestionsComponent,
    answer_component_1.AnswerComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsbUZBQWlGO0FBQ2pGLGdGQUE4RTtBQUM5RSxxR0FBbUc7QUFDbkcsb0VBQWtFO0FBRXJELFFBQUEsTUFBTSxHQUFHO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7SUFDdkQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztJQUNyRCxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsd0RBQTBCLEVBQUM7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQzVDLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ3BDLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLDRDQUFvQjtJQUNwQiwwQ0FBbUI7SUFDbkIsd0RBQTBCO0lBQzFCLGtDQUFlO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IGFza1F1ZXN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvYXNrUXVlc3Rpb24vYXNrUXVlc3Rpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBteUFjdGl2aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbXlBY3Rpdml0eS9teUFjdGl2aXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgYW5zd2VyZWRRdWVzdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9hbnN3ZXJlZFF1ZXN0aW9ucy9hbnN3ZXJlZFF1ZXN0aW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFuc3dlckNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2Fuc3dlci9hbnN3ZXIuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuXHR7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcblx0eyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogXCJhc2tRdWVzdGlvblwiLCBjb21wb25lbnQ6IGFza1F1ZXN0aW9uQ29tcG9uZW50fSxcblx0eyBwYXRoOiBcIm15QWN0aXZpdHlcIiwgY29tcG9uZW50OiBteUFjdGl2aXR5Q29tcG9uZW50fSxcblx0eyBwYXRoOiBcImFuc3dlcmVkUXVlc3Rpb25zXCIsIGNvbXBvbmVudDogYW5zd2VyZWRRdWVzdGlvbnNDb21wb25lbnR9LFxuXHR7IHBhdGg6IFwiYW5zd2VyXCIsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9XG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuXHRMb2dpbkNvbXBvbmVudCxcblx0SG9tZUNvbXBvbmVudCxcblx0TGlzdENvbXBvbmVudCxcblx0YXNrUXVlc3Rpb25Db21wb25lbnQsXG5cdG15QWN0aXZpdHlDb21wb25lbnQsXG5cdGFuc3dlcmVkUXVlc3Rpb25zQ29tcG9uZW50LFxuXHRBbnN3ZXJDb21wb25lbnRcbl07Il19
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from "./pages/list/list.component";
import { AnswerComponent } from "./pages/answer/answer.component";
import { askQuestionComponent } from "./pages/askQuestion/askQuestion.component";
import { myActivityComponent } from "./pages/myActivity/myActivity.component";

export const routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "list", component: ListComponent },
	{ path: "askQuestion", component: askQuestionComponent},
	{ path: "myActivity", component: myActivityComponent},
	{ path: "answer/:id", component: AnswerComponent }
];

export const navigatableComponents = [
	LoginComponent,
	HomeComponent,
	ListComponent,
	askQuestionComponent,
	myActivityComponent,
	AnswerComponent
];
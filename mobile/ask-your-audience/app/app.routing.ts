import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from "./pages/list/list.component";
import { AnswerComponent } from "./pages/answer/answer.component";
import { AskQuestionComponent } from "./pages/askQuestion/askQuestion.component";
import { RegisterComponent } from "./pages/register/register.component";


export const routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "list", component: ListComponent },
	{ path: "askQuestion", component: AskQuestionComponent},
	{ path: "answer/:id", component: AnswerComponent },
	{ path: "register", component: RegisterComponent }
];

export const navigatableComponents = [
	LoginComponent,
	HomeComponent,
	ListComponent,
	AskQuestionComponent,
	AnswerComponent,
	RegisterComponent
];
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from "./pages/list/list.component";
import { AnswerComponent } from "./pages/answer/answer.component";

export const routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "list", component: ListComponent },
	{ path: "answer", component: ListComponent }
];

export const navigatableComponents = [
	LoginComponent,
	HomeComponent,
	ListComponent,
	AnswerComponent
];
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from "./pages/list/list.component";
<<<<<<< HEAD
import { askQuestionComponent } from "./pages/askQuestion/askQuestion.component";
import { myActivityComponent } from "./pages/myActivity/myActivity.component";
import { answeredQuestionsComponent } from "./pages/answeredQuestions/answeredQuestions.component";
=======
import { AnswerComponent } from "./pages/answer/answer.component";
>>>>>>> AYA-MC-1-android-client

export const routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "list", component: ListComponent },
<<<<<<< HEAD
	{ path: "askQuestion", component: askQuestionComponent},
	{ path: "myActivity", component: myActivityComponent},
	{ path: "answeredQuestions", component: answeredQuestionsComponent}
=======
	{ path: "answer", component: ListComponent }
>>>>>>> AYA-MC-1-android-client
];

export const navigatableComponents = [
	LoginComponent,
	HomeComponent,
	ListComponent,
<<<<<<< HEAD
	askQuestionComponent,
	myActivityComponent,
	answeredQuestionsComponent
=======
	AnswerComponent
>>>>>>> AYA-MC-1-android-client
];
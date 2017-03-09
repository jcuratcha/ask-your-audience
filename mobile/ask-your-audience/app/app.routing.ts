import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from "./pages/list/list.component";
import { askQuestionComponent } from "./pages/askQuestion/askQuestion.component";
import { myActivityComponent } from "./pages/myActivity/myActivity.component";
import { answeredQuestionsComponent } from "./pages/answeredQuestions/answeredQuestions.component";
import {ListViewItemAnimationsComponent}from "./pages/item-animations/listview-item-animations.component";

export const routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "list", component: ListComponent },
	{ path: "askQuestion", component: askQuestionComponent},
	{ path: "myActivity", component: myActivityComponent},
	{ path: "answeredQuestions", component: answeredQuestionsComponent},
	{ path: "item-animations", component: ListViewItemAnimationsComponent},
];

export const navigatableComponents = [
	LoginComponent,
	HomeComponent,
	ListComponent,
	ListViewItemAnimationsComponent,
	askQuestionComponent,
	myActivityComponent,
	answeredQuestionsComponent
];
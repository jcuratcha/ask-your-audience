import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DATAFORM_DIRECTIVES } from 'nativescript-telerik-ui-pro/dataform/angular';
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		LISTVIEW_DIRECTIVES,
		DATAFORM_DIRECTIVES,

		...navigatableComponents
	],
	exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],

	bootstrap: [AppComponent]
})
export class AppModule {}
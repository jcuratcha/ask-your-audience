"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui-pro/dataform/angular");
var angular_2 = require("nativescript-telerik-ui-pro/listview/angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            angular_2.LISTVIEW_DIRECTIVES,
            angular_1.DATAFORM_DIRECTIVES
        ].concat(app_routing_1.navigatableComponents),
        exports: [
            platform_1.NativeScriptModule,
            router_1.NativeScriptRouterModule
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLDBEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsd0VBQW1GO0FBQ25GLHdFQUFtRjtBQUNuRixpREFBK0M7QUFFL0MsNkNBQThEO0FBd0I5RCxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUF0QnJCLGVBQVEsQ0FBQztRQUNULE9BQU8sRUFBRTtZQUNSLDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN4QztRQUNELFlBQVk7WUFDWCw0QkFBWTtZQUNaLDZCQUFtQjtZQUNuQiw2QkFBbUI7aUJBRWhCLG1DQUFxQixDQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNGLDZCQUFrQjtZQUNsQixpQ0FBd0I7U0FDM0I7UUFFSixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQ3pCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBEQVRBRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2RhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IG15QWN0aXZpdHlDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL215QWN0aXZpdHkvbXlBY3Rpdml0eS5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFwcENvbXBvbmVudCxcblx0XHRMSVNUVklFV19ESVJFQ1RJVkVTLFxuXHRcdERBVEFGT1JNX0RJUkVDVElWRVMsXG5cblx0XHQuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcblx0XSxcblx0ZXhwb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF0sXG5cblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge30iXX0=
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { SinglePollComponent } from './polls/single-poll.component'
import { SideNavigationComponent } from './navigation-panel/navigation-panel.component'
import { PopupComponent } from './pop-up/pop-up.component'

import { InputTextModule, DialogModule } from 'primeng/primeng';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
<<<<<<< HEAD
    DialogModule,
=======
>>>>>>> 88cb752... Added poll list service and http module
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    SinglePollComponent,
    SideNavigationComponent,
    PopupComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

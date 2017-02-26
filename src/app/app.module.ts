import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { SinglePollComponent } from './polls/single-poll.component'
import { SideNavigationComponent } from './navigation-panel/navigation-panel.component'
import { PopupComponent } from './pop-up/pop-up.component'

import { InputTextModule } from 'primeng/primeng';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
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

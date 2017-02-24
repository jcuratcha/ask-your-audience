import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { SinglePollComponent } from './polls/single-poll.component'
import { SideNavigationComponent } from './navigation-panel/navigation-panel.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    SinglePollComponent,
    SideNavigationComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

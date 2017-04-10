import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { SinglePollComponent } from './polls/single-poll.component';
import { SideNavigationComponent } from './navigation-panel/navigation-panel.component';
import { PopupComponent } from './pop-up/pop-up.component';
import { PollService } from './services/poll.service';
import { InputTextModule, DialogModule, ChartModule } from 'primeng/primeng';
import { LoginComponent } from './login/login.component'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    HttpModule,
    ChartModule
  ],
  declarations: [
    AppComponent,
    SinglePollComponent,
    SideNavigationComponent,
    PopupComponent,
    LoginComponent
  ],
  providers:[
    PollService,
  ]
  ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

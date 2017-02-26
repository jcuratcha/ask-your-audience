import { Component } from '@angular/core';
import{ Poll } from './poll';

const MOCKDB: Poll[] = [
  { question: "this is a mockDB", 
    options: ["option 1", "option 2", "option 3", "option 4"],
    votes: [0, 1, 2, 3],
    voted: false
  },
  { question: "this is the second poll", 
    options: ["hello", "world"],
    votes: [0, 1],
    voted: false
  },
  { question: "User cannot vote in this poll as theyve already voted", 
    options: ["cannot", "vote"],
    votes: [0, 1],
    voted: true
  }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  name = 'test'; 
  //polls is an array of poll
  polls = MOCKDB;

}

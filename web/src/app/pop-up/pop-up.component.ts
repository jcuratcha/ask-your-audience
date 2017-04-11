import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { PollService } from '../services/poll.service'

import { Poll } from '../shared/poll';
import { User } from '../shared/user';

import { ChartModule, UIChart } from 'primeng/primeng';
import { UserService } from '../services/user.service';

@Component({
  selector: 'pop-up',
  templateUrl: 'app/pop-up/pop-up.component.html',
  styleUrls: ['app/pop-up/pop-up.component.css'],
  providers: [PollService, UserService]
})
export class PopupComponent {
  @Input() poll: Poll;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  showPoll: boolean = true;
  chartData: any;
  chartOptions: any;

  constructor(private pollService: PollService, private userService: UserService) { }

  ngOnInit() {
    this.createChartData();
  }

  createChartData() {
    this.chartData = {
      labels: this.poll.options,
      datasets: [{
        label: this.poll.question,
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: this.poll.votes
      }]
    };

    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
    };
  }

  vote(chart: UIChart, index: number) {
    let user:User = JSON.parse(window.sessionStorage.getItem("user"));
    let alreadyVoted = user.votedPolls.find(x => this.poll.pollID == x);

    if( alreadyVoted >= 0){
      window.alert("You've already voted!");
      return;
    } else{
      user.votedPolls.push(this.poll.pollID);
    }

    this.userService.addVote(this.poll.pollID).subscribe(
      success =>{
        window.sessionStorage.setItem("user", JSON.stringify(user));
      }
    );
    
    this.pollService.addPollVote(this.poll.pollID, index)
    	.subscribe(poll => {
        this.poll = poll;
        chart.data.datasets[0].data = this.poll.votes;
        chart.reinit();
        chart.refresh();
      });
  }

  closeDialog() {
    this.close.emit(this.showPoll);
  }
}
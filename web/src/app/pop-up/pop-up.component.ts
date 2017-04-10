import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { PollService } from '../services/poll.service'

import { Poll } from '../shared/poll';

import { ChartModule } from 'primeng/primeng';

@Component({
  selector: 'pop-up',
  templateUrl: 'app/pop-up/pop-up.component.html',
  styleUrls: ['app/pop-up/pop-up.component.css'],
  providers: [PollService]
})
export class PopupComponent {
  @Input() poll: Poll;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  showPoll: boolean = true;
  chartData: any;
  chartOptions: any;

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.createChartData();
  }

  update($event: Event){
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
  vote(index: number) {
    this.pollService.addPollVote(this.poll.pollID, index)
    	.subscribe(
        (poll) => this.poll = poll,
        );  
  }

  closeDialog() {
    this.close.emit(this.showPoll);
  }
}
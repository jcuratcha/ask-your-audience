// >> chart-angular-bar-series-component
import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    templateUrl: 'chart-series-bar.component.html'
})
export class ChartSeriesBarComponent implements OnInit {
    private test: ObservableArray<Country>;

    constructor() { 
    console.log("set!\n");
    this.test=new ObservableArray<Country>([ 
            { Country: "China", Amount: 120, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 56, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 }
        
    ]);
    }

    ngOnInit() {
     
    }
}
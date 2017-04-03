// import { Component, ElementRef, OnInit, ViewChild ,ChangeDetectionStrategy} from "@angular/core";
// import { Poll } from "../../shared/poll/poll";
// import { PollListService } from "../../shared/poll/poll-list.service";
// import { SegmentedBarItem } from "ui/segmented-bar";
// import { ObservableArray } from "data/observable-array";
// import { DataItem } from "../../listview/dataItem";
// import { DataItemService } from "../../listview/dataItem.service";
// import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";


// let sortList = ["Questions I asked","My response"];

// @Component({
// 	selector: "list",
// 	templateUrl: "pages/myActivity/myActivity.html",
// 	styleUrls: ["pages/myActivity/myActivity-common.css", "pages/myActivity/myActivity.css"],
// 	providers: [DataItemService]
// })

// export class myActivityComponent implements OnInit {

// private _dataItems: ObservableArray<DataItem>;

//  constructor(private _dataItemService: DataItemService) {
//     }
    
//     get dataItems(): ObservableArray<DataItem> {
//         return this._dataItems;
//     }


//  public pokemons: Array<string>;
//     public picked: string;

//   ngOnInit() {
//     this.pokemons = [];

//         for (let i = 0; i < sortList.length; i++) {
//             this.pokemons.push(sortList[i]);
//         }
//            this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(5));
//   }

// public selectedIndexChanged(picker) {
//         console.log("picker selection: " + picker.selectedIndex);
//         this.picked = this.pokemons[picker.selectedIndex];
//     }

//         public itemSelected(args: ListViewEventData) {
//         var item = this.dataItems.getItem(args.itemIndex);
//         item.selected = true;
//     }

//     public itemDeselected(args: ListViewEventData) {
//         var item = this.dataItems.getItem(args.itemIndex);
//         item.selected = false;
//     }    

    
// }


import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Page } from "ui/page"

import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import {PollService} from "../../shared/poll/poll.service";

@Component({
	selector: "list",
	templateUrl: "pages/myActivity/myActivity.html",
	styleUrls: ["pages/myActivity/myActivity-common.css", "pages/myActivity/myActivity.css"],
	providers: [PollListService]
})

export class myActivityComponent implements OnInit {
	pollList: Array<Poll> = [];

	constructor(private pollListService: PollListService, private router: Router, private page: Page,private pollservice: PollService) {
	//	constructor(private pollListService: PollListService, private router: Router, private page: Page) {
		console.log("Current page: ListComponent");
	}

	ngOnInit() {
		this.pollListService.getAllPolls()
		.subscribe(loadedPolls => {
			loadedPolls.forEach((pollObject) => {
				this.pollList.unshift(pollObject);
				});
		});

       // this.pollListService.addPolls();
		// this.pollservice.createNewPoll();
	}	

	// public test(){
	// 	//this.PollService.createNewPoll();
	// }

	//
	// Called when a list item is tapped
	//
	public onItemTap(args) {
		var tappedItem = args.view;
		var poll = tappedItem.bindingContext;
		console.log("Question with pollID = " + poll.id + " tapped.");
		this.router.navigate(["/answer", poll.id]);
	}
}
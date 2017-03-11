import { Component, ElementRef, OnInit, ViewChild ,ChangeDetectionStrategy} from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import { SegmentedBarItem } from "ui/segmented-bar";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../../listview/dataItem";
import { DataItemService } from "../../listview/dataItem.service";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";

let sortList = ["Questions I asked","My response"];

@Component({
	selector: "list",
	templateUrl: "pages/myActivity/myActivity.html",
	styleUrls: ["pages/myActivity/myActivity-common.css", "pages/myActivity/myActivity.css"],
	providers: [DataItemService]
})

export class myActivityComponent implements OnInit {

private _dataItems: ObservableArray<DataItem>;

 constructor(private _dataItemService: DataItemService) {
    }
    
    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }


 public pokemons: Array<string>;
    public picked: string;

  ngOnInit() {
    this.pokemons = [];

        for (let i = 0; i < sortList.length; i++) {
            this.pokemons.push(sortList[i]);
        }
           this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(25));
  }

public selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.picked = this.pokemons[picker.selectedIndex];
    }

        public itemSelected(args: ListViewEventData) {
        var item = this.dataItems.getItem(args.itemIndex);
        item.selected = true;
    }

    public itemDeselected(args: ListViewEventData) {
        var item = this.dataItems.getItem(args.itemIndex);
        item.selected = false;
    }    

    
}
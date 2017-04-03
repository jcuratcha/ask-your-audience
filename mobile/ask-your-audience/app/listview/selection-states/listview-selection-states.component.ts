// >> angular-listview-selection-states-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-selection-states",
    providers: [DataItemService],
    templateUrl: "listview-selection-states.component.html",
    styleUrls: ["listview-selection-states.component.css"]
})
export class ListviewSelectionStatesComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(25));
    }

     // >> angular-listview-howto-item-selection-events
    public itemSelected(args: ListViewEventData) {
        var item = this.dataItems.getItem(args.itemIndex);
        item.selected = true;
    }

    public itemDeselected(args: ListViewEventData) {
        var item = this.dataItems.getItem(args.itemIndex);
        item.selected = false;
    }
    // << angular-listview-howto-item-selection-events
}
// << angular-listview-selection-states-component
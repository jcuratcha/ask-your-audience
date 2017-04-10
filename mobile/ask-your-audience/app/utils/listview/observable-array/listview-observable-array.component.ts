import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";

import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-observable-array",
    templateUrl: "listview-observable-array.component.html",
    styleUrls: ["listview-observable-array.component.css"]
})
export class ListviewObservableArrayComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor() {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>();
    }

    public onAddItemClick(args: ListViewEventData) {
        var id = Math.round(Math.random() * 100);
        this._dataItems.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    }

    public onResetClick(args: ListViewEventData) {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
    }

    public onUpdateItemClick(args: ListViewEventData) {
        for (var index = 0; index < this._dataItems.length; index++) {
            this._dataItems.getItem(index).id = Math.random() * 100;
            this._dataItems.getItem(index).name = "This is an updated item";
            this._dataItems.getItem(index).description = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick(args: ListViewEventData) {
        this._dataItems.splice(this._dataItems.length - 1, 1);
    }
}
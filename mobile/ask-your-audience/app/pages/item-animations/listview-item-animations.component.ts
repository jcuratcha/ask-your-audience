import { Component, OnInit, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../../listview/dataItem";
import { OptionsExampleBase } from "../../options-example-base";
import { Page } from "ui/page";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";
//import { OptionsService } from "../../navigation/options/options.service";
import * as applicationModule from "application";


@Component({
    moduleId: module.id,
    selector: "tk-listview-item-animations",
    templateUrl: "listview-item-animations.component.html",
    styleUrls: ["listview-item-animations.component.css"]
})
@Injectable()
export class ListViewItemAnimationsComponent extends OptionsExampleBase implements OnInit {
    private _dataItems: ObservableArray<DataItem>;//dataItem is a stack based array

    private _itemInsertAnimation: string;
    private _itemDeleteAnimation: string;
    private _optionsParamName: string;
    private _itemsCount;

    options="";
    description="";

    constructor(private _page: Page, private _router: Router) {
        super();
        if (applicationModule.ios) {
            this._optionsParamName = "animation";
            this.router = _router;
            this.navigationParameters = {
                selectedIndex: 0, paramName: this._optionsParamName,
                items: ["Default", "Fade", "Scale", "Slide"]
            };
        }
        this.onDefaultTap();
    }

    ngOnInit() {
        this._itemsCount = 0;
        this._dataItems = new ObservableArray<DataItem>();
    }

  submit() {
    var information="You’re asking: \n" +this.description+"\nwith options:\n";
    var i=0;
    for(i=0;i<this._dataItems.length;i++){
      information+=this._dataItems.getItem(i).name+"\n";
    }
    alert(information);
  }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get itemInsertAnimation(): string {
        return this._itemInsertAnimation;
    }

    set itemInsertAnimation(value: string) {
        this._itemInsertAnimation = value;
    }

    get itemDeleteAnimation(): string {
        return this._itemDeleteAnimation;
    }

    set itemDeleteAnimation(value: string) {
        this._itemDeleteAnimation = value;
    }

    public onAddItemClick() {
        this._dataItems.push(new DataItem(this._itemsCount,this.options));
        this._itemsCount++;
    }

    public onResetClick(args: ListViewEventData) {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
        this._itemsCount = 0;
    }

    public onUpdateItemClick(args: ListViewEventData) {
        for (var index = 0; index < this._dataItems.length; index++) {
            this._dataItems.getItem(index).name = "This is an updated item";
            this._dataItems.getItem(index).description = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick(args: ListViewEventData) {
        this._dataItems.splice(this._dataItems.length - 1, 1);
    }

    public onDefaultTap() {
        this.itemInsertAnimation = "Default";
        this.itemDeleteAnimation = "Default";
    }

    public onFadeTap() {
        this.itemInsertAnimation = "Fade";
        this.itemDeleteAnimation = "Fade";
    }

    public onScaleTap() {
        this.itemInsertAnimation = "Scale";
        this.itemDeleteAnimation = "Scale";
    }

    public onSlideTap() {
        this.itemInsertAnimation = "Slide";
        this.itemDeleteAnimation = "Slide";
    }
}
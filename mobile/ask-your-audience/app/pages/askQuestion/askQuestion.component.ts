import { Component, OnInit, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../../utils/listview/dataItem";
import { Page } from "ui/page";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";
import { Observable } from "data/observable";
import * as frameModule from "ui/frame";
import * as applicationModule from "application";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { Poll } from "../../shared/poll/poll";
import { PollService } from "../../shared/poll/poll.service";

@Component({
    moduleId: module.id,
    selector: "askQuestion",
    templateUrl: "askQuestion.html",
    styleUrls: ["askQuestion.component.css"],
    providers: [PollService],
})
@Injectable()
export class AskQuestionComponent implements OnInit {
    private navigationParameters;
    private router;

    private _dataItems: ObservableArray<DataItem>;

    private _itemInsertAnimation: string;
    private _itemDeleteAnimation: string;
    private _optionsParamName: string;
    private _itemsCount;

    public model = {
        options: "",
        question: ""
    };
    
    constructor(private pollService: PollService, private page: Page, private _router: Router) {
        console.log("Current page: AnswerComponent");

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

    //
	// Calls server to create a new poll
	//

    submit() {
        if (this._dataItems.length < 2) {
            alert("You need at least two choices for your audience to choose from!");
            return;
        } else if (this.model.question == null || this.model.question.length === 0) {
            alert("Your question must be more than just empty or a few spaces!");
            return;
        }

        let question = this.model.question;
        let pollOptions:string[] = [];

        for(var i=0; i < this._dataItems.length; i++){
            pollOptions.push(this._dataItems.getItem(i).name);
        }

        this.pollService.createNewPoll(question, pollOptions)
            .subscribe(
                (newPollID) => {
                    console.log("poll id for new poll:"+newPollID)
                    alert("Thanks for asking your question!");
                },
                (error) => {
                    console.log("Error: " + error);
                    alert("Looks like there was a problem getting your question out, please try again later!");
                });
    }

    //
	// UI methods for animations.
	//

    public onAddItemClick() {
        this._dataItems.push(new DataItem(this._itemsCount,this.model.options));
        this.model.options == ""
        this._itemsCount++;
    }

    public onResetClick(args: ListViewEventData) {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
        this._itemsCount = 0;
    }

    public onRemoveItemClick(args: ListViewEventData) {
        this._dataItems.pop();
        this._itemsCount--;
    }

    public onOptionsTapped() {
        this.router.navigate(['/options'], {
            queryParams: { 
                selectedIndex: this.navigationParameters.selectedIndex,
                paramName: this.navigationParameters.paramName,
                items: this.navigationParameters.items }
            });
    }
    
    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
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
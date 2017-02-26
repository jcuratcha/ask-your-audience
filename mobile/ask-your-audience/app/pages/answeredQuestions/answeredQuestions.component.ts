import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import tabViewModule = require("ui/tab-view");

@Component({
	selector: "list",
	templateUrl: "pages/answeredQuestions/answeredQuestions.html",
	styleUrls: ["pages/answeredQuestions/answeredQuestions-common.css", "pages/answeredQuestions/answeredQuestions.css"],
	providers: [PollListService]
})

export class answeredQuestionsComponent implements OnInit {

	var items = [];
var StackLayout0 = new stackLayoutModule.StackLayout();
var label0 = new labelModule.Label();
label0.text = "Tab 0";
StackLayout0.addChild(label0);
var tabEntry0 = {
    title: "Tab 0",
    view: StackLayout0
};
items.push(tabEntry0);
var StackLayout1 = new stackLayoutModule.StackLayout();
var label1 = new labelModule.Label();
label1.text = "Tab 1";
StackLayout1.addChild(label1);
var tabEntry1 = {
    title: "Tab 1",
    view: StackLayout1
};
items.push(tabEntry1);
tabView.items = items;
tabView.selectedIndex = 9;

  var tabView = new tabViewModule.TabView();
  tabView.on(tabViewModule.TabView.selectedIndexChangedEvent, (args: tabViewModule.SelectedIndexChangedEventData) => {
    actualOldIndex = args.oldIndex;
    actualNewIndex = args.newIndex;
});

ngOnInit() {
    
  }

}
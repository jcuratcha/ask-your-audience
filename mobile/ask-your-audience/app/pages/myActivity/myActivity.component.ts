import { Component, ElementRef, OnInit, ViewChild ,ChangeDetectionStrategy} from "@angular/core";
import { Poll } from "../../shared/poll/poll";
import { PollListService } from "../../shared/poll/poll-list.service";
import { SegmentedBarItem } from "ui/segmented-bar";


let sortList = ["Questions I asked","My response"];

@Component({
	selector: "list",
	templateUrl: "pages/myActivity/myActivity.html",
	styleUrls: ["pages/myActivity/myActivity-common.css", "pages/myActivity/myActivity.css"],
	providers: [PollListService]
})

export class myActivityComponent implements OnInit {


 public pokemons: Array<string>;
    public picked: string;

  ngOnInit() {
    this.pokemons = [];

        for (let i = 0; i < sortList.length; i++) {
            this.pokemons.push(sortList[i]);
        }
  }

public selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.picked = this.pokemons[picker.selectedIndex];
    }


    
}
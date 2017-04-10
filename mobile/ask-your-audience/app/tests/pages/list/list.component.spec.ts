import "reflect-metadata";
import {} from 'jasmine';

import { Observable } from "rxjs/Rx";

import { ListComponent } from '../../../pages/list/list.component';
import { Poll } from '../../../shared/poll/poll';

describe("List Component", function() {
    var pollListService, router;
    var listComponent: ListComponent;
    var poll1 = new Poll(1, "Hello world", ["one", "two"], [2, 10], "me");
    var poll2 = new Poll(2, "Hello world", ["three", "four"], [32, 103], "me");
    var poll3 = new Poll(3, "Hello world", ["zero", "ninety nine"], [32, 10], "me");

    var pollList: Poll[] = [poll1, poll2, poll3];
    
    beforeEach(function() {
        pollListService = {
            getAllPolls : function() {
                return Observable.of(pollList);
            }
        }

        router = {
            navigate: function () {
                console.log("router.navigate() called in test!");
            }
        }

        spyOn(pollListService, "getAllPolls").and.returnValue(Observable.of(pollList));
        spyOn(router, "navigate").and.callThrough();

        listComponent = new ListComponent(pollListService, router, null);
    });

    it("should fetch all polls on init in ngOnInit()", function() {
        listComponent.ngOnInit();

        expect(pollListService.getAllPolls).toHaveBeenCalled();
        expect(listComponent.pollList.length).toBe(3);
    });

    it("should navigate to answer page with correct id in onItemTap()", function() {
        var item1EventData = {
            view: {
                bindingContext: poll1
            }
        };

        var item2EventData = {
            view: {
                bindingContext: poll3
            }
        };

        var item3EventData = {
            view: {
                bindingContext: poll3
            }
        };

        listComponent.onItemTap(item1EventData);
        listComponent.onItemTap(item2EventData);
        listComponent.onItemTap(item3EventData);

        expect(router.navigate).toHaveBeenCalledTimes(3);
        
    });

});
import "reflect-metadata";
import {} from 'jasmine';

import { Observable } from "rxjs/Rx";

import { AskQuestionComponent } from '../../../pages/askQuestion/askQuestion.component';
import { Poll } from '../../../shared/poll/poll';

describe("Ask Question Component", function() {
    var pollService;
    var poll: Poll;
    var askQuestionComponent: AskQuestionComponent;

    beforeEach(function() {
        poll = new Poll(1, "Hello world", ["one", "two"], [2, 10], "me");
        pollService = {
            createNewPoll : function(question: string, options: string[]) {
                return Observable.of(1);
            }
        };

        spyOn(pollService, "createNewPoll").and.returnValue(Observable.of(1));

        askQuestionComponent = new AskQuestionComponent(pollService, null, null);
        askQuestionComponent.ngOnInit();
    });

    describe("submitting a new question", function() {
        it("should contain a valid question and > 2 options", function() {
            askQuestionComponent.model.question = "This is a question";
            askQuestionComponent.model.options = "Option 1";
            askQuestionComponent.onAddItemClick();
            askQuestionComponent.model.options = "Option 2";
            askQuestionComponent.onAddItemClick();

            askQuestionComponent.submit();

            askQuestionComponent.model.options = "Option 3";
            askQuestionComponent.onAddItemClick();

            askQuestionComponent.submit();

            expect(pollService.createNewPoll).toHaveBeenCalledTimes(2);
        });

        it("should display an alert if the question is blank", function() {
            askQuestionComponent.model.question = "";
            askQuestionComponent.model.options = "Option 1";
            askQuestionComponent.onAddItemClick();
            askQuestionComponent.model.options = "Option 2";
            askQuestionComponent.onAddItemClick();

            askQuestionComponent.submit();
            expect(pollService.createNewPoll).not.toHaveBeenCalled();            
        });

        it("should display an alert if the question is null", function() {
            askQuestionComponent.model.question = null;
            askQuestionComponent.model.options = "Option 1";
            askQuestionComponent.onAddItemClick();
            askQuestionComponent.model.options = "Option 2";
            askQuestionComponent.onAddItemClick();

            askQuestionComponent.submit();
            expect(pollService.createNewPoll).not.toHaveBeenCalled();            
        });

        it("should display an alert if there are less than 2 options provided", function() {
            askQuestionComponent.model.question = "Hello";
            askQuestionComponent.model.options = "Option 1";
            askQuestionComponent.onAddItemClick();

            askQuestionComponent.submit();

            expect(pollService.createNewPoll).not.toHaveBeenCalled(); 
        });
    });
})
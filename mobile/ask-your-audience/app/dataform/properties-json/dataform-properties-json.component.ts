import { Component, OnInit } from "@angular/core";
import { Person } from "../data-services/person";
import fs = require("file-system");
import * as fileSystemModule from "file-system";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-properties-json",
    templateUrl: "dataform-properties-json.component.html"
})
export class DataformPropertiesJsonComponent implements OnInit {
    private _personMetadata;
    private _person: Person;

    constructor() {
    }

    ngOnInit() {
        var documents = fs.knownFolders.currentApp();
        var jsonPersonFile = documents.getFile('dataform/data-services/person-model.json');
        var that = new WeakRef(this);
        jsonPersonFile.readText()
            .then(function(content) {
                try {
                    var person = JSON.parse(content);
                    that.get().person =  person;
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            }, function(error) {
                throw new Error('Could not read JSON file');
            });

        var jsonMetadataFile = documents.getFile('dataform/data-services/person-metadata.json');
        jsonMetadataFile.readText()
            .then(function(content) {
                try {
                    var metadata = JSON.parse(content);
                    that.get().personMetadata =  metadata;
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            }, function(error) {
                throw new Error('Could not read JSON file');
            });
    }

    get personMetadata() {
        return this._personMetadata;
    }

    set personMetadata(value) {
        this._personMetadata = value;
    }

    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }
}
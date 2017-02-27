var db = require('../db.js');
var service = require('../service.js');
var sinon = require('sinon');
var expect = require('chai').expect;

describe('Service', function() {
    describe('newPoll', function() {
        var q = 'question', o = ['a', 'b', 'c'], ip = '123.456.789.123';

        afterEach(function() {
            db.insert.restore();
            db.getPolls.restore();
        });

        it('returns poll ID 1 on first poll created', function() {
            var getPollsResult = [];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var insertResults = {pollID : 1, question: q, options : o, votes : [0, 0, 0], owner : ip}, expectedValue = 1;
            sinon.stub(db, 'insert').returns(Promise.resolve(insertResults));

            return service.newPoll(q, o, ip).then(pollID => expect(pollID).to.equal(expectedValue));
        });

        it('returns poll ID 2 on second poll created', function() {
            var getPollsResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123"}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var insertResults = {pollID : 2, question: q, options : o, votes : [0, 0, 0], owner : ip}, expectedValue = 2;
            sinon.stub(db, 'insert').returns(Promise.resolve(insertResults));


            return service.newPoll(q, o, ip).then(pollID => expect(pollID).to.equal(expectedValue));
        });

        it('increments poll ID on additional polls', function() {
            var getPollsResult = [{pollID : 10, question: "question 10", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123"}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var insertResults = {pollID : 11, question: q, options : o, votes : [0, 0, 0], owner : ip}, expectedValue = 11;
            sinon.stub(db, 'insert').returns(Promise.resolve(insertResults));

            return service.newPoll(q, o, ip).then(pollID => expect(pollID).to.equal(expectedValue));
        });
    });

    describe('getPoll', function() {
        afterEach(function() {
            db.getPolls.restore();
        });

        it('returns null when poll ID does not exist', function() {
            var getPollsResult = [];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var id = 0, expectedValue = null;

            return service.getPoll(id).then(poll => expect(poll).to.equal(expectedValue));
        });

        it('returns poll with asked poll ID', function() {
            var getPollsResult = [{pollID : 1, question: "question", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123"}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var id = 1, expectedPollID = 1;

            return service.getPoll(id).then(result => expect(result.polls[0].pollID).to.equal(expectedPollID));
        });
    });

    describe('getPolls', function() {
        afterEach(function() {
            db.getPolls.restore();
        });

        it('returns null when no polls exist', function() {
            var getPollsResult = [];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var expectedValue = null;

            return service.getPolls().then(poll => expect(poll).to.equal(expectedValue));
        });

        it('returns single poll', function() {
            var getPollsResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123"}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var expectedNumPolls = 1;

            return service.getPolls().then(result => expect(result.polls.length).to.equal(expectedNumPolls));
        });

        it('returns multiple polls', function() {
            var getPollsResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123"},
                                  {pollID : 2, question: "question 2", options : ["d", "e", "f"], votes : [0, 0, 0], owner : "123.456.789.123"}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var expectedNumPolls = 2;

            return service.getPolls().then(result => expect(result.polls.length).to.equal(expectedNumPolls));
        });
    });

    describe('increaseVote', function(){
        afterEach(function() {
            db.findOneAndUpdate.restore();
        });

        it('returns null when poll does not exist', function() {
            var increaseVoteResult = null;
            sinon.stub(db, 'findOneAndUpdate').returns(Promise.resolve(increaseVoteResult));
            var id = 0, index = 1, expectedValue = null;

            return service.increaseVote(id, index).then(result => expect(result).to.equal(expectedValue));
        });

        it ('returns poll with updated vote count', function() {
            var increaseVoteResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 1, 0], owner : "123.456.789.123"}];
            sinon.stub(db, 'findOneAndUpdate').returns(Promise.resolve(increaseVoteResult));
            var id = 1, index = 1, expectedNumVotes = 1;

            return service.increaseVote(id, index).then(result => expect(result[0].votes[1]).to.equal(expectedNumVotes));
        });
    });
});
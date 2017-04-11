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
            var getPollsResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var insertResults = {pollID : 2, question: q, options : o, votes : [0, 0, 0], owner : ip}, expectedValue = 2;
            sinon.stub(db, 'insert').returns(Promise.resolve(insertResults));


            return service.newPoll(q, o, ip).then(pollID => expect(pollID).to.equal(expectedValue));
        });

        it('increments poll ID on additional polls', function() {
            var getPollsResult = [{pollID : 10, question: "question 10", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}];
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
            var getPollsResult = [{pollID : 1, question: "question", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}];
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
            var getPollsResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}];
            sinon.stub(db, 'getPolls').returns(Promise.resolve(getPollsResult));
            var expectedNumPolls = 1;

            return service.getPolls().then(result => expect(result.polls.length).to.equal(expectedNumPolls));
        });

        it('returns multiple polls', function() {
            var getPollsResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true},
                                  {pollID : 2, question: "question 2", options : ["d", "e", "f"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}];
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
            var increaseVoteResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 1, 0], owner : "123.456.789.123", active : true}];
            sinon.stub(db, 'findOneAndUpdate').returns(Promise.resolve(increaseVoteResult));
            var id = 1, index = 1, expectedNumVotes = 1;

            return service.increaseVote(id, index).then(result => expect(result[0].votes[1]).to.equal(expectedNumVotes));
        });
    });

    describe('removePoll', function(){
        afterEach(function() {
            db.findOneAndRemove.restore();
        });

        it('returns null when poll does not exist', function() {
            var removePollResult = null;
            sinon.stub(db, 'findOneAndRemove').returns(Promise.resolve(removePollResult));
            var id = 0, expectedValue = null;

            return service.removePoll(id).then(result => expect(result).to.equal(expectedValue));
        });

        it ('returns poll with poll ID and non-active status', function() {
            var removePollResult = [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 1, 0], owner : "123.456.789.123", active : false}];
            sinon.stub(db, 'findOneAndRemove').returns(Promise.resolve(removePollResult));
            var id = 1, expectedPollID = 1, expectedStatus = false;

            return service.removePoll(id).then(result => expect(result[0].pollID).to.equal(expectedPollID) && expect(result[0].active).to.equal(expectedStatus));
        });
    });

    describe('newProfile', function() {
        var user = 'bob1', pass = 'password', display = 'Robert', votes = [1, 5, 6];
        var user2 = 'joe2', pass2 = 'password', display2 = 'Jonathon', votes2 = [1, 2, 3, 4, 5];
        var user3 = 'tim3', pass3 = 'password', display3 = 'Timothy', votes3 = [1, 2, 3];

        afterEach(function() {
            db.createProfile.restore();
            db.getProfiles.restore();
        });

        it('returns profileID 1 on first profile created', function() {
            var getProfilesResult = [];
            sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
            var insertResults = {profileID : 1, username: user, password : pass, displayName : display, votedPolls : votes}, expectedValue = 1;
            sinon.stub(db, 'createProfile').returns(Promise.resolve(insertResults));

            return service.newProfile(user, pass, display).then(profileID => expect(profileID).to.equal(expectedValue));
        });

        // it('returns profileID 2 on second profile created', function() {
        //     var getProfilesResult = [{profileID : 1, username : "hpotter1", password : "urawizard", displayName : "Harry Potter", votes : []}];
        //     sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
        //     var insertResults = {profileID : 2, username: user2, password : pass2, displayName : display2, votedPolls : votes2}, expectedValue = 2;
        //     sinon.stub(db, 'createProfile').returns(Promise.resolve(insertResults));
        //
        //     return service.newProfile(user2, pass2, display2).then(profileID => expect(profileID).to.equal(expectedValue));
        // });
        //
        // it('increments profile ID on additional creations', function() {
        //     var getProfilesResult = [{profileID : 10, username : "hpotter1", password : "urawizard", displayName : "Harry Potter", votes : []}];
        //     sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
        //     var insertResults = {profileID : 11, username: user3, password : pass3, displayName : display3, votedPolls : votes3}, expectedValue = 11;
        //     sinon.stub(db, 'createProfile').returns(Promise.resolve(insertResults));
        //
        //     return service.newProfile(user2, pass2, display2).then(profileID => expect(profileID).to.equal(expectedValue));
        // });
    });

    describe('authUser', function() {
      afterEach(function() {
          db.getProfiles.restore();
      });

      it('returns null when username does not exist', function() {
          var getProfilesResult = [];
          sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
          var username = "doesnotexist", password = "password", expectedValue = null;

          return service.authUser(username, password).then(profileID => expect(profileID).to.equal(expectedValue));
      });

      it('returns null when password does not match what is on record', function() {
          var getProfilesResult = [{profileID : 1, username: "bob1", password: "password", displayName: "Robert", votedPolls: []}];
          sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
          var username = "bob1", password = "notcorrect", expectedValue = null;

          return service.authUser(username, password).then(profileID => expect(profileID).to.equal(expectedValue));
      });

      it('returns null when username or password is empty', function() {
          var getProfilesResult = [];
          sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
          var username = "", password = "", expectedValue = null;

          return service.authUser(username, password).then(profileID => expect(profileID).to.equal(expectedValue));
      });

      it('returns profile ID when credentials are correct', function() {
          var getProfilesResult = [{profileID : 1, username: "bob1", password: "password", displayName: "Robert", votedPolls: []}];
          sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
          var username = "bob1", password = "password", expectedValue = 1;

          return service.authUser(username, password).then(profileID => expect(profileID).to.equal(expectedValue));
      });
    });

    describe('getProfile', function() {
        afterEach(function() {
            db.getProfiles.restore();
        });

        it('returns null when profile ID does not exist', function() {
            var getProfilesResult = [];
            sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
            var id = 0, expectedValue = null;

            return service.getProfile(id).then(profile => expect(profile).to.equal(expectedValue));
        });

        it('returns profile with asked profile ID', function() {
            var getProfilesResult = [{profileID : 1, username: "bob1", password: "password", displayName: "Robert", votedPolls: []}];
            sinon.stub(db, 'getProfiles').returns(Promise.resolve(getProfilesResult));
            var id = 1, expectedProfileID = 1;

            return service.getProfile(id).then(result => expect(result.profiles[0].profileID).to.equal(expectedProfileID));
        });
    });

    describe('updateUserVotes', function(){
        afterEach(function() {
            db.findProfileAndUpdate.restore();
        });

        it('returns null when profile does not exist', function() {
            var updateUserVotesResult = null;
            sinon.stub(db, 'findProfileAndUpdate').returns(Promise.resolve(updateUserVotesResult));
            var id = 0, pollID = 20, expectedValue = null;

            return service.updateUserVotes(id, pollID).then(result => expect(result).to.equal(expectedValue));
        });

        it ('returns profile with updated list of polls', function() {
            var updateUserVotesResult = [{profileID : 1, username: "bob1", password: "password", displayName: "Robert", votedPolls: [1, 5, 20]}];
            sinon.stub(db, 'findProfileAndUpdate').returns(Promise.resolve(updateUserVotesResult));
            var id = 1, pollID = 20, expectedVote = 20;

            return service.updateUserVotes(id, pollID).then(result => expect(result[0].votedPolls).to.contain(expectedVote));
        });
    });
});

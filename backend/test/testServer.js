var request = require('supertest');
var service = require('../service.js');
var sinon = require('sinon');
var expect = require('chai').expect;

process.env.NODE_ENV = 'test';

describe("Server", function() {
    var server;

    beforeEach(function() {
        delete require.cache[require.resolve('../server.js')];
        server = require('../server.js');
    });

    afterEach(function(done) {
        server.close(done);
    });

    describe('POST /aya/api/create-polls', function() {
        var requestBody = {
            questions : "What should I buy?",
            options : ["apple", "oranges", "both", "none"]
        }

        afterEach(function() {
            service.newPoll.restore();
        });

        it('sends poll ID 1 on first poll created', function() {
            var expectedServiceResult = expectedServerResult = 1
            sinon.stub(service, 'newPoll').returns(Promise.resolve(expectedServiceResult));

            return request(server)
                .post('/aya/api/create-polls')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body.pollID).to.equal(expectedServerResult));
        });

        it('sends poll ID 2 on second poll created', function() {
            var expectedServiceResult = expectedServerResult = 2
            sinon.stub(service, 'newPoll').returns(Promise.resolve(expectedServiceResult));

            return request(server)
                .post('/aya/api/create-polls')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body.pollID).to.equal(expectedServerResult));
        });

        it('increments poll ID on additional polls', function() {
            var expectedServiceResult = expectedServerResult = 10
            sinon.stub(service, 'newPoll').returns(Promise.resolve(expectedServiceResult));

            return request(server)
                .post('/aya/api/create-polls')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body.pollID).to.equal(expectedServerResult));
        });
    });

    describe('GET /aya/api/get-polls/:id', function() {
        afterEach(function() {
            service.getPoll.restore();
        });

        it('returns null when poll id does not exist', function() {
            var getPollResult = null;
            sinon.stub(service, 'getPoll').returns(Promise.resolve(getPollResult));
            var id = 0, expectedServiceResult = null;

            return request(server)
                .get(`/aya/api/get-polls/${id}`)
                .then(res => expect(res.body).to.equal(expectedServiceResult));
        });

        it('returns poll with asked poll ID', function() {
            var getPollResult = { "polls" : [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}]};
            sinon.stub(service, 'getPoll').returns(Promise.resolve(getPollResult));
            var id = 1, expectedPollID = 1;

            return request(server)
                .get(`/aya/api/get-polls/${id}`)
                .then(res => expect(res.body.polls[0].pollID).to.equal(expectedPollID));
        });
    });

    describe('GET /aya/api/get-polls', function() {
        afterEach(function() {
            service.getPolls.restore();
        });

        it('sends null when no polls', function() {
            var expectedServiceResult = null;
            sinon.stub(service, 'getPolls').returns(Promise.resolve(expectedServiceResult));
            var expectedServerResult = null;

            return request(server)
                .get('/aya/api/get-polls')
                .then(res => expect(res.body).to.equal(expectedServiceResult));
        });

        it('sends a single poll', function() {
            var getPollsResult = { "polls" : [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}]};
            sinon.stub(service, 'getPolls').returns(Promise.resolve(getPollsResult));
            var expectedNumPolls = 1;

            return request(server)
                .get('/aya/api/get-polls')
                .then(res => expect(res.body.polls.length).to.equal(expectedNumPolls));
        });

        it('sends multiple polls', function() {
            var getPollsResult = { "polls" : [{pollID : 1, question: "question 1", options : ["a", "b", "c"], votes : [0, 0, 0], owner : "123.456.789.123", active : true},
                                              {pollID : 2, question: "question 2", options : ["d", "e", "f"], votes : [0, 0, 0], owner : "123.456.789.123", active : true}]};
            sinon.stub(service, 'getPolls').returns(Promise.resolve(getPollsResult));
            var expectedNumPolls = 2;

            return request(server)
                .get('/aya/api/get-polls')
                .then(res => expect(res.body.polls.length).to.equal(expectedNumPolls));
        });
    });

    describe('GET /aya/api/vote/:id/:index', function() {
        afterEach(function() {
            service.increaseVote.restore();
        });

        it('returns null when poll ID does not exist', function() {
            var increaseVoteResult = null;
            sinon.stub(service, 'increaseVote').returns(Promise.resolve(increaseVoteResult));
            var id = 0, index = 1, expectedServiceResult = null;

            return request(server)
                .get(`/aya/api/vote/${id}/${index}`)
                .then(res => expect(res.body).to.equal(expectedServiceResult));
        });

        it('increments votes with given poll ID and index', function() {
            var increaseVoteResult = {pollID : 1, question: "question", options : ["a", "b", "c"], votes : [0, 1, 0], owner : "123.456.789.123", active : true};
            sinon.stub(service, 'increaseVote').returns(Promise.resolve(increaseVoteResult));
            var id = 1, index = 1, expectedNumVotes = 1;

            return request(server)
                .get(`/aya/api/vote/${id}/${index}`)
                .then(res => expect(res.body.votes[1]).to.equal(expectedNumVotes));
        });
    });

    describe('DELETE /aya/api/remove-poll/:id', function() {
        afterEach(function() {
            service.removePoll.restore();
        });

        it('returns null when poll ID does not exist', function() {
            var removePollResult = null;
            sinon.stub(service, 'removePoll').returns(Promise.resolve(removePollResult));
            var id = 0, expectedServiceResult = null;

            return request(server)
                .delete(`/aya/api/remove-poll/${id}`)
                .then(res => expect(res.body).to.equal(expectedServiceResult));
        });

        it('returns poll with poll ID and non-active status', function() {
            var removePollResult = {pollID : 1, question: "question", options : ["a", "b", "c"], votes : [0, 1, 0], owner : "123.456.789.123", active : false};
            sinon.stub(service, 'removePoll').returns(Promise.resolve(removePollResult));
            var id = 1, expectedPollID = 1, expectedStatus = false;

            return request(server)
                .delete(`/aya/api/remove-poll/${id}`)
                .then(res => expect(res.body.pollID).to.equal(expectedPollID) && expect(res.body.active).to.equal(expectedStatus));
        });
    });

    describe('POST /aya/api/register', function() {
        var requestBody = {
            username : "bob1",
            password : "password",
            displayName : "Bob"
        }
        var requestBody2 = {
            username : "joe1",
            password : "password",
            displayName : "Jonathon"
        }

        afterEach(function() {
            service.newProfile.restore();
        });

        it('sends profileID 1 on first profile created', function() {
            var expectedServiceResult = expectedServerResult = 1;
            sinon.stub(service, 'newProfile').returns(Promise.resolve(expectedServiceResult));

            return request(server)
                .post('/aya/api/register')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body.profileID).to.equal(expectedServerResult));
        });

        it('sends profileID 2 on second profile created', function() {
            var expectedServiceResult = expectedServerResult = 2
            sinon.stub(service, 'newProfile').returns(Promise.resolve(expectedServiceResult));

            return request(server)
                .post('/aya/api/register')
                .type('application/json')
                .send(requestBody2)
                .then(res => expect(res.body.profileID).to.equal(expectedServerResult));
        });

        it('sends null profileID when username already exists', function() {
            var expectedServiceResult = expectedServerResult = null;
            sinon.stub(service, 'newProfile').returns(Promise.resolve(expectedServiceResult));

            return request(server)
                .post('/aya/api/register')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body.profileID).to.equal(expectedServerResult));
        });
    });

    describe('POST /aya/api/authenticate', function() {
        var requestBody = {
            username : "bob1",
            password : "password",
        }
        var requestBody2 = {
            username : "",
            password : "",
        }

        afterEach(function() {
            service.authUser.restore();
        });

        it('returns success with profileID after correctly authenticating', function() {
            var expectedServiceResult = 1;
            sinon.stub(service, 'authUser').returns(Promise.resolve(expectedServiceResult));
            var expectedServerResult = {success: true, profileID: 1};

            return request(server)
                .post('/aya/api/authenticate')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body).to.deep.equal(expectedServerResult));
        });

        it('returns failure with error message after trying incorrect credentials', function() {
            var expectedServiceResult = null;
            sinon.stub(service, 'authUser').returns(Promise.resolve(expectedServiceResult));
            var expectedServerResult = {success: false, message: "Authentication failed. Incorrect username or password."};

            return request(server)
                .post('/aya/api/authenticate')
                .type('application/json')
                .send(requestBody)
                .then(res => expect(res.body).to.deep.equal(expectedServerResult));
        });

        it('returns failure with error message after trying to enter empty credentials', function() {
            var expectedServiceResult = null;
            sinon.stub(service, 'authUser').returns(Promise.resolve(expectedServiceResult));
            var expectedServerResult = {success: false, message: "Authentication failed. Incorrect username or password."};

            return request(server)
                .post('/aya/api/authenticate')
                .type('application/json')
                .send(requestBody2)
                .then(res => expect(res.body).to.deep.equal(expectedServerResult));
        });
    });

    describe('GET /aya/api/get-profile/:id', function() {
        afterEach(function() {
            service.getProfile.restore();
        });

        it('returns null when profile id does not exist', function() {
            var getProfileResult = null;
            sinon.stub(service, 'getProfile').returns(Promise.resolve(getProfileResult));
            var id = 0, expectedServiceResult = null;

            return request(server)
                .get(`/aya/api/get-profiles/${id}`)
                .then(res => expect(res.body).to.equal(expectedServiceResult));
        });

        it('returns profile with asked profile ID', function() {
            var getProfilesResult = { "profiles" : [{profileID : 1, username : "bob1", password : "password", displayName: "Robert", votedPolls: []}]};
            sinon.stub(service, 'getProfile').returns(Promise.resolve(getProfilesResult));
            var id = 1, expectedProfileID = 1;

            return request(server)
                .get(`/aya/api/get-profiles/${id}`)
                .then(res => expect(res.body.profiles[0].profileID).to.equal(expectedProfileID));
        });
    });

    describe('GET /aya/api/user-vote/:profileID/:pollID', function() {
        afterEach(function() {
            service.updateUserVotes.restore();
        });

        it('returns null when profile ID does not exist', function() {
            var updateUserVotesResult = null;
            sinon.stub(service, 'updateUserVotes').returns(Promise.resolve(updateUserVotesResult));
            var profileID = 0, pollID = 20, expectedServiceResult = null;

            return request(server)
                .get(`/aya/api/user-vote/${profileID}/${pollID}`)
                .then(res => expect(res.body).to.equal(expectedServiceResult));
        });

        it('adds poll to the list of polls in profile with ID', function() {
            var updateUserVotesResult = {profileID : 1, username: "bob1", password: "password", displayName: "Robert", votedPolls: [1, 5, 20]};
            sinon.stub(service, 'updateUserVotes').returns(Promise.resolve(updateUserVotesResult));
            var profileID = 1, pollID = 20, expectedVote = 20;

            return request(server)
                .get(`/aya/api/user-vote/${profileID}/${pollID}`)
                .then(res => expect(res.body.votedPolls).to.contain(expectedVote));
        });
    });
});

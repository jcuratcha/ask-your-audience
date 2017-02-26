var Poll = require('../poll.js');
var db = require('../db.js');
var sinon = require('sinon');
var expect = require('chai').expect;

describe('DB', function() {
    describe('insert', function() {
        afterEach(function() {
            Poll.prototype.save.restore();
        });

        it('returns poll data on successful save', function() {
            var id = 1, q = 'question', o = ['a', 'b', 'c'], ip = "123.456.789.123";
            var expectedResults = {pollID : id, question: q, options : o, votes : [0, 0, 0], owner : ip};
            sinon.stub(Poll.prototype, 'save').returns(Promise.resolve(expectedResults));
            
            return db.insert(id, q, o, ip).then(result => expect(result).to.equal(expectedResults));
        }); 
    });

    describe('getPolls', function() {
        var query = {
                limit : function(limit) {},
                sort : function(sort) {},
                exec : function(exec) {}
        };

        beforeEach(function() {
            sinon.stub(Poll, 'find').returns(query);
            sinon.stub(query, 'sort').returns(query);
            sinon.stub(query, 'limit').returns(query);
        });

        afterEach(function() {
            Poll.find.restore();
            query.sort.restore();
            query.limit.restore();
        });

        it('calls find() only once when no options are given', function() {
            db.getPolls();

            sinon.assert.calledOnce(Poll.find);
            sinon.assert.notCalled(query.sort);
            sinon.assert.notCalled(query.limit);
        });

        it('calls only find() twice once when only criteria is given', function() {
            db.getPolls({criteria : {pollID : 1}});

            sinon.assert.calledTwice(Poll.find);
            sinon.assert.notCalled(query.sort);
            sinon.assert.notCalled(query.limit);
        });

        it('calls sort() once when only sort is given', function() {
            db.getPolls({sort : "ascending"});

            sinon.assert.calledOnce(Poll.find);
            sinon.assert.calledOnce(query.sort);
            sinon.assert.notCalled(query.limit);
        });

        it('calls limit() once when only limit is given', function() {
            db.getPolls({limit : 1});

            sinon.assert.calledOnce(Poll.find);
            sinon.assert.notCalled(query.sort);
            sinon.assert.calledOnce(query.limit);
        }); 
    });
});
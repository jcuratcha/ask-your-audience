describe('Voting on a poll', function() {
  it('should increment the selected option', function() {
    browser.get('http://localhost:3000');

    // create a poll
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('a or b?');
    element(by.id('option_0')).sendKeys('a');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('b');
    element(by.id('createPollButton')).click();

    // enter voting dialog
    element(by.id('poll_0')).click();
    expect(element(by.id('displayPoll_0')).getText()).toEqual('a with 0 vote');

    // vote then check if corresponding option increments
    element(by.id('vote_0')).click();
    expect(element(by.id('displayPoll_0')).getText()).toEqual('a with 1 vote');
  });
});
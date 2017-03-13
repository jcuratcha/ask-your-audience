describe('cancelCreatePoll-spec', function() {
  it('cancels a poll being created', function() {
    browser.get('http://localhost:3000');
    // create a poll
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('a or b?');
    element(by.id('option_0')).sendKeys('a');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('b');
    element(by.id('cancelPollButton')).click();

    // it should not exist
    expect(element(by.id('poll_0')).isPresent()).toEqual(false);
  });
});
describe('createAPoll-spec', function() {
  it('creates a poll', function() {
    browser.get('http://localhost:3000');
    // create a poll
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('a or b?');
    element(by.id('option_0')).sendKeys('a');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('b');
    element(by.id('createPollButton')).click();

    // it should exist
    expect(element(by.id('poll_0')).isPresent()).toEqual(true);
  });
});
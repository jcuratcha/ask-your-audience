describe('createPolls-spec', function() {
  it('creates polls', function() {
    browser.get('http://localhost:3000');
    // create poll 1
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('a or b?');
    element(by.id('option_0')).sendKeys('a');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('b');
    element(by.id('createPollButton')).click();

    // create poll 2
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('c or d?');
    element(by.id('option_0')).sendKeys('c');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('d');
    element(by.id('createPollButton')).click();

    // both polls should exist
    expect(element(by.id('poll_0')).isPresent()).toEqual(true);
    expect(element(by.id('poll_1')).isPresent()).toEqual(true);
  });
});
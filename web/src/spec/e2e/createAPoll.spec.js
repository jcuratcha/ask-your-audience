describe('Creating a poll', function() {
  it('should create a single poll', function() {
    browser.get('http://localhost:3000');

    // create a poll
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('a or b?');
    element(by.id('option_0')).sendKeys('a');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('b');
    element(by.id('createPollButton')).click();

    // get number of polls existing already
    let count = element.all(by.id('pollCount')).getAttribute('textContent');
    count.then(expectedID => {
      // the poll should exist
      expect(element(by.id('poll_'+expectedID)).isPresent()).toEqual(true);
    });
  });
});
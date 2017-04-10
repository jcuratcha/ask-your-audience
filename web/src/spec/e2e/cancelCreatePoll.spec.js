describe('Canceling a poll', function() {
  it('should cancel a poll being created', function() {
    browser.get('http://localhost:3000');
    // get number of polls existing already
    let polls = element.all(by.tagName('single-poll')).count();

    polls.then(num => {
      // create a poll
      element(by.id('addAPollButton')).click();
      element(by.id('question')).sendKeys('a or b?');
      element(by.id('option_0')).sendKeys('a');
      element(by.id('addOptionButton')).click();
      element(by.id('option_1')).sendKeys('b');
      element(by.id('cancelPollButton')).click();

      // the poll should not exist
      expect(element(by.id("poll_"+num)).isPresent()).toEqual(false);
    });
  });
});
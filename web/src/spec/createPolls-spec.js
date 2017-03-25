describe('Creating polls', function() {
  it('should create multiple polls', function() {
    browser.get('http://localhost:3000');

    // get number of polls existing already
    let polls = element.all(by.tagName('single-poll')).count();

    // both polls should exist
    polls.then(num => {
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

      expect(element(by.id('poll_'+num)).isPresent()).toEqual(true);
      let num2 = num + 1;
      expect(element(by.id('poll_'+num2)).isPresent()).toEqual(true);
    });
  });
});
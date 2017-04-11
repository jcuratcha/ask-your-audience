describe('Canceling a poll', function() {
  it('should cancel a poll being created', function() {
    browser.get('http://localhost:3000');

    // login
    element(by.id('login_username')).sendKeys('Tester');
    element(by.id('login_password')).sendKeys('123');
    element(by.id('login_button')).click();

    // get number of polls existing already
    let count = element.all(by.id('pollCount')).getAttribute('textContent');

    count.then(num => {
      // create a poll
      element(by.id('addAPollButton')).click();
      element(by.id('question')).sendKeys('a or b?');
      element(by.id('option_0')).sendKeys('a');
      element(by.id('addOptionButton')).click();
      element(by.id('option_1')).sendKeys('b');
      element(by.id('cancelPollButton')).click();

      // the poll should not exist
      let expectedID = num+1;
      expect(element(by.id('poll_'+expectedID)).isPresent()).toEqual(false);
    });
  });
});
describe('Voting on a poll', function() {
  it('should increment the selected option', function() {
    browser.get('http://localhost:3000');

    // login
    element(by.id('login_password')).sendKeys('Tester');
    element(by.id('login_password')).sendKeys('123');
    element(by.id('login_button')).click();

    // create a poll
    element(by.id('addAPollButton')).click();
    element(by.id('question')).sendKeys('a or b?');
    element(by.id('option_0')).sendKeys('a');
    element(by.id('addOptionButton')).click();
    element(by.id('option_1')).sendKeys('b');
    element(by.id('createPollButton')).click();

    // get newest pollID
    let count = element(by.id('pollCount')).getAttribute('textContent');
    count.then(num => {
      let expectedCount = '0';
      // enter voting dialog
      element(by.id('poll_'+num)).click();
      expect(element(by.id('count_0')).getAttribute('textContent')).toEqual(expectedCount);

      // vote then check if corresponding option increments
      expectedCount = '1';
      element(by.id('vote_0')).click();
      expect(element(by.id('count_0')).getAttribute('textContent')).toEqual(expectedCount);
    });
  });
});
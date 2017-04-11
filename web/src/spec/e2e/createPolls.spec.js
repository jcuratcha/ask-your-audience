describe('Creating polls', function() {
  it('should create multiple polls', function() {
    browser.get('http://localhost:3000');

    // login
    element(by.id('login_username')).sendKeys('Tester');
    element(by.id('login_password')).sendKeys('123');
    element(by.id('login_button')).click();

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

    // get number of polls existing already
    let count = element.all(by.id('pollCount')).getAttribute('textContent');
    // both polls should exist
    count.then(expectedID => {
      expect(element(by.id('poll_'+expectedID)).isPresent()).toEqual(true);
      let expectedID2 = expectedID - 1;
      expect(element(by.id('poll_'+expectedID2)).isPresent()).toEqual(true);

      // verify contents of older poll (newest is verified on single poll test)
      element(by.id('poll_'+expectedID2)).click();
      expect(element(by.id('displayPoll_0')).getText()).toEqual('Vote for: a vote');
      expect(element(by.id('displayPoll_1')).getText()).toEqual('Vote for: b vote');
    });
  });
});
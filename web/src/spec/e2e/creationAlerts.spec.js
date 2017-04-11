describe('Creating a poll', function() {
  it('should throw an alert for no question and less than two options', function() {
    browser.get('http://localhost:3000');

    // login
    element(by.id('login_username')).sendKeys('Tester');
    element(by.id('login_password')).sendKeys('123');
    element(by.id('login_button')).click();

    // no question input
    element(by.id('addAPollButton')).click();
    element(by.id('createPollButton')).click();
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('Please enter a question!');
    alert.dismiss();

    // send question input
    element(by.id('question')).sendKeys('a or b?');

    // no option input
    element(by.id('createPollButton')).click();
    alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('Please enter at least two options');
    alert.dismiss();

    // send option input
    element(by.id('option_0')).sendKeys('a');

    // only one option input
    element(by.id('createPollButton')).click();
    alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('Please enter at least two options');
    alert.dismiss();
  });
});
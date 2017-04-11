describe('Invalid login page actions', function() {
  it('causes error messages', function() {
    browser.get('http://localhost:3000');

    // no username
    element(by.id('login_button')).click();
    expect(element(by.id('login_error_message')).getText()).toEqual('Please enter a username.');

    // no password
    element(by.id('login_username')).sendKeys('FAIL_TEST');
    element(by.id('login_button')).click();
    expect(element(by.id('login_error_message')).getText()).toEqual('Please enter a password.');

    // invalid username password
    element(by.id('login_password')).sendKeys('FAIL_TEST');
    element(by.id('login_button')).click();
    expect(element(by.id('login_error_message')).getText()).toEqual('You have entered an incorrect username or password.');
  });
});
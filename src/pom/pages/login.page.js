import Page from "./base.page";
class LoginPage extends Page {
  get loginButton () {
    return $('#login-button');
  }
get usernameField () {
  return $('#user-name');
}
get passwordField () {
  return $('#password');
}
get errorMessage() {
  return $('form .error-message-container h3');
}
async clickOnlogin () {
  await this.loginButton.click();
}
async fillWithoutCredentials () {
  await this.clickOnlogin();
}
async fillWithoutPassword () {
  await this.usernameField.setValue('pablo')
  await this.clickOnlogin();
}
async fillCredentials () {
  await this.usernameField.setValue('visual_user')
  await this.passwordField.setValue('secret_sauce')
  await this.clickOnlogin();
}
async getNoUsernameError () {
  const errorText = await this.errorMessage.getText(); 
  await expect(errorText).toContain("Epic sadface: Username is required");
}
async getNoPasswordError () {
  const errorText = await this.errorMessage.getText(); 
  await expect(errorText).toContain("Epic sadface: Password is required");
}
async closeErrorMessage () {
  await $('form button svg').click();
}
async noErrorMessage () {
  await expect(this.errorMessage).not.toBeDisplayed();
}

  async open () {
    await super.open('https://www.saucedemo.com/');
  }
}
export default new LoginPage()
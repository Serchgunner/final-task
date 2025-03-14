import LoginPage from "../pom/pages/login.page";
import dashboardPage from "../pom/pages/dashboard.page";
describe('final test', () =>{

  beforeEach( async () => {
    await LoginPage.open();
  });

  it('Should test Login form with empty credentials', async ()=> {
  await LoginPage.fillWithoutCredentials();
  await LoginPage.getNoUsernameError();
  await LoginPage.closeErrorMessage();
  await LoginPage.noErrorMessage();
  });

  it('should test Login form with credentials by passing Username', async ()=> {
    await LoginPage.fillWithoutPassword();
    await LoginPage.getNoPasswordError();
    await LoginPage.closeErrorMessage();
    await LoginPage.noErrorMessage();
  });

  it('Should test Login form with credentials by passing Username & Password', async ()=> {
    await LoginPage.fillCredentials();
    await LoginPage.noErrorMessage();
    await dashboardPage.VerifyDashboardTitle();

  })
})
  
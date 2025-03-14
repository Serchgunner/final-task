import Page from "./base.page";
class DashBoardPage extends Page {
  async VerifyDashboardTitle () {
    await expect(browser).toHaveTitle('Swag Labs')
  }
}
export default new DashBoardPage()
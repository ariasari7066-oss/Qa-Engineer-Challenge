import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator("[data-test='error']");
  }

  async goTo() {
    await this.page.goto("/");
  }

  async loginComplete(user: { username: string, password: string }) {
    await this.usernameInput.fill(user.username)
    await this.passwordInput.fill(user.password)
    await this.loginButton.click()
    }
  
  async validateError(message: string){
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(message)
  }
}
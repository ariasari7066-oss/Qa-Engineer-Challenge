import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from '../data/data.user'


test.describe("Login-smoke test", ()=>{

  test("Login exitoso", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.loginComplete(users.success);

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator(".title")).toHaveText("Products");
});

  test("Login credenciales inválidas", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.loginComplete(users.bad_credential);

    await loginPage.validateError("do not match");

});

  test("Login user vacio", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.loginComplete(users.empty_user);

    await loginPage.validateError("Username is required");

});

  test("Login password vacio", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.loginComplete(users.empty_password);

    await loginPage.validateError("Password is required");

});

  test("Login ambos campos vacíos", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.loginComplete(users.empty_credential);

    await loginPage.validateError("Username is required");
});

});






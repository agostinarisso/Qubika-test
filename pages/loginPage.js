const {request} = require('playwright');
const {test, expect} = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = "input[formcontrolname='email']";
        this.passwordInput = "input[formcontrolname='password']";
        this.submitButton = "button[type='submit']";
    }

    async navigate() {
        await this.page.goto('https://club-administration.qa.qubika.com/#/auth/login');
        await expect(this.page).toHaveURL(/login/);
    }

    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }

    async validateLogin() {
        await expect(this.page).toHaveURL(/dashboard/);
        await expect(this.page.locator("app-dashboard[class='ng-star-inserted']")).toBeVisible();
    }
}

module.exports = { LoginPage };

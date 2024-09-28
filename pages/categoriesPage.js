const {request} = require('playwright');
const {test, expect} = require('@playwright/test');

class CategoryPage {
    constructor(page) {
        this.page = page;
        this.categoryMenu = "a[href='#/category-type']";
        this.newCategoryButton = "button[class='btn btn-primary']";
        this.categoryNameInput = "input[formcontrolname='name']";
        this.submitButton = "button[type='submit']";
        this.toastContainer = "div[id='toast-container']";
    }

    async navigateToCategoryPage() {
        await this.page.click(this.categoryMenu);
    }

    async createCategory(categoryName) {
        await this.page.click(this.newCategoryButton);
        await this.page.fill(this.categoryNameInput, categoryName);
        await this.page.click(this.submitButton);
        await this.page.waitForSelector(this.toastContainer, { state: 'visible' });
        await expect(this.page.locator(this.toastContainer)).toBeVisible();
        await this.page.waitForSelector(this.toastContainer, { state: 'hidden' });
    }

    async createSubCategory(subCategoryName, parentCategory) {
        await this.page.click(this.newCategoryButton);
        await this.page.fill(this.categoryNameInput, subCategoryName);
        await this.page.locator("label[for='customCheckMain']").check();
        await this.page.keyboard.type(parentCategory);
        await this.page.keyboard.press('Enter');
        await this.page.click(this.submitButton);
    }

    async validateCategoryExists(categoryName) {
        await this.page.locator("ul[class='pagination justify-content-end mb-0']>li:nth-last-of-type(2)").click();
        await expect(this.page.locator("//table[contains(@class,'table-flush')]")).toContainText(categoryName);
    }
}

module.exports = { CategoryPage };

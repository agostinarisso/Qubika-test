const { test, expect } = require('@playwright/test');
const { createUser } = require('../utils/createUser');
const { LoginPage } = require('../pages/loginPage');
const { CategoryPage } = require('../pages/categoriesPage');

test.describe('Qubika Sport Club e2e Test', () => {

    test('Create a new user, login, and manage categories', async ({ page }) => {
        const userData = await createUser();
        
        // Usar Page Object para la página de login
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(userData.email, "Test1234");
        await loginPage.validateLogin();
        
        // Usar Page Object para la página de categorías
        const categoryPage = new CategoryPage(page);
        await categoryPage.navigateToCategoryPage();
        await categoryPage.createCategory("Test creating a new category");
        await categoryPage.createSubCategory("A child category", "Test creating a new category");
        await categoryPage.validateCategoryExists("A child category");
    });
});

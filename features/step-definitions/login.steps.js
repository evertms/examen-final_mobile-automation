import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageObjects/loginPage";
import InventoryPage from "../pageObjects/inventoryPage";

Given("que estoy en la pantalla de login", async () => {
    // Verificamos el botón de login para asegurar que estamos en la pantalla correcta
    await LoginPage.loginButton.waitForDisplayed();
})

When("el usuario ingresa user={string}", async (user) => {
    await LoginPage.typeUser(user);
})

When("el usuario ingresa password={string}", async (password) => {
    await LoginPage.typePassword(password);
})

When("el usuario hace click en el boton de login", async () => {
    await LoginPage.loginButton.click();
})

Then("el usuario debe estar en la pantalla de inventario", async () => {
    await InventoryPage.inventoryTitle.waitForDisplayed();    
})

When("el usuario abre el menu lateral", async () => {
    await InventoryPage.clickMenu();
})

When("el usuario hace click en logout", async () => {
    await InventoryPage.clickLogout();
})

Then("el usuario debe estar en la pantalla de login", async () => {
    await LoginPage.loginButton.waitForDisplayed();
})


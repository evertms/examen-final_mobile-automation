import { When, Then } from "@cucumber/cucumber";
import InventoryPage from "../pageObjects/inventoryPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";

When("el usuario agrega dos productos al carrito", async () => {
    await InventoryPage.addFirstItem();
    await InventoryPage.addSecondItem();
})

When("el usuario procede al checkout", async () => {
    await CartPage.clickCheckout();
})

When("el usuario ingresa sus datos personales", async () => {
    await CheckoutPage.fillInformation("evert", "moreno", "0000");
    await CheckoutPage.clickContinue();
})

When("el usuario finaliza la compra", async () => {
    await CheckoutPage.clickFinish();
})

Then("el usuario debe ver la confirmacion de la orden", async () => {
    await CheckoutPage.orderComplete.waitForDisplayed();
})

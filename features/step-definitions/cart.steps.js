import { Given, When, Then } from "@cucumber/cucumber";
import InventoryPage from "../pageObjects/inventoryPage";
import CartPage from "../pageObjects/cartPage";

When("el usuario agrega el primer producto al carrito", async () => {
    await InventoryPage.addFirstItem();
})

When("el usuario va al carrito de compras", async () => {
    await InventoryPage.openCart();
})

Then("el usuario debe ver la pantalla del carrito", async () => {
    await CartPage.cartTitle.waitForDisplayed();
})

When("el usuario quita el producto del carrito", async () => {
    await CartPage.clickRemove();
})

Then("el producto ya no debe estar en el carrito", async () => {
    await CartPage.removeButton.waitForDisplayed({ reverse: true });
})

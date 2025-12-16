import { $ } from "@wdio/globals";
import { androidScrollIntoView } from "../../utils/scroll"; // Updated import

class CartPage {
    get cartTitle() {
        return $("android=new UiSelector().text(\"YOUR CART\")")
    }

    get removeButton() {
        return $("android=new UiSelector().description(\"test-REMOVE\")")
    }

    get checkoutButton() {
        return $("~test-CHECKOUT") // hay que scrollear para ver el boton, está con accesibility id
    }

    async clickRemove() {
        await this.removeButton.click();
    }

    async clickCheckout() {
        await androidScrollIntoView('new UiSelector().description("test-CHECKOUT")');
        await this.checkoutButton.click();
    }
}

export default new CartPage();
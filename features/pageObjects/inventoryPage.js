import { $ } from "@wdio/globals";
import { androidScrollIntoView } from "../../utils/scroll"; // Updated import

class InventoryPage {
    get inventoryTitle() {
        return $("android=new UiSelector().text(\"PRODUCTS\")")
    }

    get menuButton() {
        return $("~test-Menu")
    }

    get logoutButton() {
        return $("android=new UiSelector().text(\"LOGOUT\")")
    }

    get firstItem() {
        return $("android=new UiSelector().description(\"test-ADD TO CART\").instance(0)")
    }

    get secondItem() {
        // Al agregar el primer item, su botón cambia a "REMOVE", por lo que el segundo item
        // pasa a ser el primero en la lista de "ADD TO CART".
        return $("android=new UiSelector().description(\"test-ADD TO CART\").instance(0)")
    }

    get cartButton() {
        return $("android=new UiSelector().className(\"android.widget.ImageView\").instance(3)")
    }
    

    async clickMenu() {
        await this.menuButton.waitForDisplayed({ timeout: 5000 });
        await this.menuButton.click();
    }

    async clickLogout() {
        await this.logoutButton.waitForDisplayed({ timeout: 5000 });
        await this.logoutButton.click();
    }

    async addFirstItem() {
        await this.firstItem.waitForDisplayed({ timeout: 5000 });
        await this.firstItem.click();
    }

    async addSecondItem() {
        // Usamos scroll nativo para asegurar que el item es visible sin pasarnos
        await androidScrollIntoView('new UiSelector().text("Sauce Labs Bike Light")');
        
        await this.secondItem.waitForDisplayed({ timeout: 5000 });
        await this.secondItem.click();
    }

    async openCart() {
        await this.cartButton.waitForDisplayed({ timeout: 5000 });
        await this.cartButton.click();
    }
}

export default new InventoryPage();
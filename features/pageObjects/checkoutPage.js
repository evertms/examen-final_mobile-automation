import { $ } from "@wdio/globals";
import { androidScrollIntoView } from "../../utils/scroll"; // Updated import

class CheckoutPage {
    get firstNameInput() {
        return $("~test-First Name")
    }

    get lastNameInput() {
        return $("~test-Last Name")
    }

    get zipCodeInput() {
        return $("~test-Zip/Postal Code")
    }

    get continueButton() {
        return $("~test-CONTINUE") // hay que scrollear para ver el boton
    }

    get finishButton() {
        return $("~test-FINISH") // hay que scrollear para ver el boton
    }

    get orderComplete() {
        return $("android=new UiSelector().text(\"THANK YOU FOR YOU ORDER\")")
    }

    async fillInformation(firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.setValue(zipCode);
    }

    async clickContinue() {
        await androidScrollIntoView('new UiSelector().description("test-CONTINUE")');
        await this.continueButton.click();
    }

    async clickFinish() {
        await androidScrollIntoView('new UiSelector().description("test-FINISH")');
        await this.finishButton.click();
    }
}

export default new CheckoutPage();

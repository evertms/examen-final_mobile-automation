import { $ } from "@wdio/globals";

class LoginPage {
    get loginImage() {
        return $("android=new UiSelector().className(\"android.widget.ImageView\").instance(0)")
    }

    get userInput() {
        return $("~test-Username")
    }

    get passwordInput() {
        return $("~test-Password")
    }

    get loginButton() {
        return $("~test-LOGIN")
    }

    async typeUser(user) {
        await this.userInput.setValue(user);
    }

    async typePassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

export default new LoginPage();
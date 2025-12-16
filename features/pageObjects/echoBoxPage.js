import { $ } from "@wdio/globals";

class EchoBoxPage {
    get echoTitle() {
        return $('android=new UiSelector().text("Echo Screen")');
    }
    
    get echoInput() {
        //return $('android=new UiSelector().resourceId("messageInput")');
        return $('~messageInput')
    }

    get echoButton() {
        return $('android=new UiSelector().resourceId("messageSaveBtn")');
    }

    get echoOutput() {
        return $('android=new UiSelector().resourceId("savedMessage")');
    }

    async typeText(text) {
        await this.echoInput.setValue(text);
    }

    async clickButton() {
        await this.echoButton.click();
    }
}

export default new EchoBoxPage();

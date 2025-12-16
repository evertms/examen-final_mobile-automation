import { $ } from "@wdio/globals";

class MainPage {
    get echoBoxPage() {
        return $('android=new UiSelector().resourceId("RNE__LISTITEM__padView").instance(0)');
    }
}

export default new MainPage();
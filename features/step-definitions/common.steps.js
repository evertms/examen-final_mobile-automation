import { Given, When, Then } from "@cucumber/cucumber";
import MainPage from "../pageObjects/mainPage";

Given('que el usuario está en la pantalla de {screen}', async function(screen) {
    if (screen === 'login') {
        await MainPage.echoBoxPage.click();
    }
});


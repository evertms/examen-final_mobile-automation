import { Given, When, Then } from "@cucumber/cucumber";
import EchoBoxPage from "../pageObjects/echoBoxPage";

When('The user types {string} in the echo box', async function(text) {
    await EchoBoxPage.typeText(text);
});

Then('The echo should be {string}', async function(text) {
    await expect(EchoBoxPage.echoOutput).toHaveText(text);
});

When('The user clicks the echo button', async function() {
    await EchoBoxPage.clickButton();
});

Then('The section should have the title {string}', async function(title) {
    await expect(EchoBoxPage.echoTitle).toHaveText(title);
});
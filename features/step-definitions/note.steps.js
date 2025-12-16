import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import NoteListPage from '../pageObjects/notePage.js';

Given("que agrego una nota con el titulo {string} y la descripcion {string}", async (title, description) => {
    await NoteListPage.newNoteButton.click();
    await NoteListPage.titleInput.setValue(title);
    await NoteListPage.descriptionInput.setValue(description);
    await NoteListPage.saveButton.click();    
});

When("modifico el titulo de la nota a {string}", async (newTitle) => {
    await NoteListPage.noteTitle.waitForDisplayed({ timeout: 5000 });
    await NoteListPage.noteTitle.click();
    
    await NoteListPage.titleInput.waitForDisplayed();
    await NoteListPage.titleInput.clearValue();
    await NoteListPage.titleInput.setValue(newTitle);
    await NoteListPage.saveButton.click();
});

Then("el título de la nota debe ser {string}", async (expectedTitle) => {
    // Instead of checking the first item, we check if a note with the expected title exists and is visible.
    // This handles cases where the list order might vary (e.g. sorted by creation date vs modification).
    const note = NoteListPage.getNoteByTitle(expectedTitle);
    await note.waitForDisplayed({ timeout: 10000 });
    await expect(note).toBeDisplayed();
});

Given("que agrego una nota rapida con titulo {string} y descripcion {string}", async (title, description) => {
    await NoteListPage.newNoteButton.click();
    await NoteListPage.titleInput.setValue(title);
    await NoteListPage.descriptionInput.setValue(description);
    await NoteListPage.saveAndNewButton.click();
});

Given("continuo agregando una nota normal con titulo {string} y descripcion {string}", async (title, description) => {
    await NoteListPage.titleInput.setValue(title);
    await NoteListPage.descriptionInput.setValue(description);
    await NoteListPage.saveButton.click();
});

When("modifico la nota {string} a {string}", async (oldTitle, newTitle) => {
    const note = NoteListPage.getNoteByTitle(oldTitle);
    await note.waitForDisplayed();
    await note.click();
    await NoteListPage.titleInput.waitForDisplayed();
    await NoteListPage.titleInput.clearValue();
    await NoteListPage.titleInput.setValue(newTitle);
    await NoteListPage.saveButton.click();
});


Then("existe una nota con el titulo {string}", async (expectedTitle) => {
    const note = NoteListPage.getNoteByTitle(expectedTitle);
    await expect(note).toBeDisplayed();
});
Given("continuo agregando una nota rapida con titulo {string} y descripcion {string}", async (title, description) => {
    await NoteListPage.titleInput.setValue(title);
    await NoteListPage.descriptionInput.setValue(description);
    await NoteListPage.saveAndNewButton.click();
});

Given("agrego una nota nueva con titulo {string} y descripcion {string}", async (title, description) => {
    await NoteListPage.newNoteButton.click();
    await NoteListPage.titleInput.setValue(title);
    await NoteListPage.descriptionInput.setValue(description);
    await NoteListPage.saveButton.click();
});

Then("elimino la nota con titulo {string}", async (title) => {
    const note = NoteListPage.getNoteByTitle(title);
    await note.waitForDisplayed();
    await note.click();
    
    // Check if we are in the edit view or if the click failed (sometimes happens)
    await NoteListPage.deleteButton.waitForDisplayed();
    await NoteListPage.deleteButton.click();
    
    await NoteListPage.confirmDelete.waitForDisplayed();
    await NoteListPage.confirmDelete.click();
    
    // Wait for the list to be back
    await NoteListPage.newNoteButton.waitForDisplayed();
});

Then("la nota con titulo {string} no debe existir", async (title) => {
    const note = NoteListPage.getNoteByTitle(title);
    // waitForDisplayed({ reverse: true }) waits for the element to NOT be displayed
    await note.waitForDisplayed({ reverse: true, timeout: 5000 });
});

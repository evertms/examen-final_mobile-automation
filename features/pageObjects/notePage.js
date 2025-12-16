import { $ } from "@wdio/globals";

class NoteListPage {    
    get newNoteButton() {
        return $('android=new UiSelector().resourceId("com.vrproductiveapps.whendo:id/fab")')
    } 

    get titleInput() {
        return $('android=new UiSelector().resourceId("com.vrproductiveapps.whendo:id/noteTextTitle")')
    }

    get descriptionInput() {
        return $('android=new UiSelector().resourceId("com.vrproductiveapps.whendo:id/noteTextNotes")')
    }

    get saveButton() {
        return $('~Save') 
    }

    get saveAndNewButton() {
        return $('~Save And New')
    }

    get noteTitle() {
        return $('android=new UiSelector().resourceId("com.vrproductiveapps.whendo:id/home_list_item_text")')
    }

    getNoteByTitle(title) {
        return $(`android=new UiSelector().text("${title}")`);
    }

    get itemNote() {
        // Fallback or specific use, though finding by text is preferred
        return $('android=new UiSelector().resourceId("com.vrproductiveapps.whendo:id/home_list_item_text").instance(0)')
    }

    get deleteButton() {
        return $('~Delete')
    }

    get confirmDelete() {
        return $('android=new UiSelector().resourceId("android:id/button1")')
    }
}

export default new NoteListPage();
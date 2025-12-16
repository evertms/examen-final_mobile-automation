import { browser } from "@wdio/globals";

/**
 * Realiza un scroll nativo de Android usando UiScrollable.
 * Esta es la forma más robusta de buscar elementos fuera de la vista en Android.
 * Evita el problema de "overshoot" (pasarse) ya que se detiene apenas encuentra el elemento.
 * 
 * @param {string} selectorString - El string del UiSelector del elemento a buscar. 
 *                                  Ej: 'new UiSelector().text("Sauce Labs Bike Light")'
 *                                  Ej: 'new UiSelector().description("test-CHECKOUT")'
 */
export async function androidScrollIntoView(selectorString) {
    try {
        const element = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(${selectorString})`);
        return element;
    } catch (error) {
        console.error("Error en androidScrollIntoView:", error);
        throw error;
    }
}

/**
 * (Legacy) Scroll manual usando swipes
 */
export async function scrollToElement(scrollableElement, elementIdentifier, maxScrolls, percentage, direction) {
    for(let scroll = 1; scroll <= maxScrolls; scroll += 1) {
        const elements = await $$(elementIdentifier);

        if(elements.length > 0) {
            return true;
        }

        await browser.swipe({
            direction: direction,
            duration: 500, // Aumenté un poco la duración para que sea más controlado
            percent: percentage,
            scrollableElement: scrollableElement
        });
    }

    return false;
}
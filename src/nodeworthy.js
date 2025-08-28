`use strict`;

/**
 * @description A class that streamlines the creation of HTML elements.
 * @class
 */
export default class Nodeworthy {
    constructor() {}

    /**
     * @description Applies the specified class list and ID to the given element.
     * @param element - The element to apply the class list and ID to.
     * @param classList - An array of class names to apply to the element.
     * @param id - The ID to assign to the element.
     * @returns {*} - The modified element.
     */
    #createElement(element, classList, id) {
        if (typeof id === `string` && id !== ``) {
            element.id = id;
        }

        if (Array.isArray(classList) && classList.length > 0) {
            classList.forEach(className => {
                if (typeof className === `string` && className !== ``
                    && className.includes(` `) === false) {
                    element.classList.add(className);
                }
            });
        }

        return element;
    }

    /**
     * @description Creates and returns an anchor element.
     * @param href - The URL to link to.
     * @param text - The text to display on the link.
     * @param classList - An array of class names to apply to the link.
     * @param id - The ID to assign to the link.
     * @returns {*} - The created anchor element.
     */
    createA(href = ``, text = ``, classList = [], id = ``) {
        const a = document.createElement('a');
        if (typeof href === `string` && href !== ``) {
            a.href = href;
        }

        a.textContent = text;

        return this.#createElement(
            a, classList, id
        );
    }

    /**
     * @description Creates and returns a button element.
     * @param text - The text to display on the button.
     * @param callback - The function to call when the button is clicked.
     * @param classList - An array of class names to apply to the button.
     * @param id - The ID to assign to the button.
     * @returns {*} - The created button element.
     */
    createButton(text = ``, callback = () => {}, classList = [], id = ``) {
        const button = this.#createElement(
            document.createElement('button'), classList, id
        )

        button.innerText = text;
        button.onclick = callback;
        return button;
    }

    /**
     * @description Creates and returns a div element.
     * @param classList - An array of class names to apply to the div.
     * @param id - The ID to assign to the div.
     * @returns {*} - The created div element.
     */
    createDiv(classList = [], id = ``) {
        return this.#createElement(
            document.createElement('div'), classList, id
        );
    }

    /**
     * @description Creates and returns an 'h' element of the specified level (h1 - h6).
     * @param text - The text to display in the 'h' element.
     * @param level - The level of the 'h' element (1-6).
     * @param classList - An array of class names to apply to the 'h' element.
     * @param id - The ID to assign to the 'h' element.
     * @returns {*} - The created 'h' element.
     */
    createH(text = ``, level = 1, classList = [], id = ``) {
        if (typeof level !== `number` || !Number.isInteger(level) || level < 1 || level > 6) {
            level = 1;
        }

        const h = this.#createElement(
            document.createElement(`h${level}`), classList, id
        )

        h.innerText = text;
        return h;
    }

    /**
     * @description Creates and returns an img element.
     * @param src - The source of the image.
     * @param alt - The alt text for the image.
     * @param classList - An array of class names to apply to the img element.
     * @param id - The ID to assign to the img element.
     * @returns {*} - The created img element.
     */
    createImg(src, alt = ``, classList = [], id = ``) {
        const img = this.#createElement(
            document.createElement('img'), classList, id
        )

        img.src = src;

        if (typeof alt === `string` && alt !== ``)
        {
            img.alt = alt;
        }

        return img;
    }

    /**
     * @description Creates and returns a paragraph element.
     * @param text - The text to display in the paragraph.
     * @param classList - An array of class names to apply to the paragraph.
     * @param id - The ID to assign to the paragraph.
     * @returns {*} - The created paragraph element.
     */
    createP(text = ``, classList = [], id = ``) {
        const p = this.#createElement(
            document.createElement('p'), classList, id
        )

        p.innerText = text;
        return p;
    }
}

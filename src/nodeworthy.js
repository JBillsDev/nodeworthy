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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the element.
     * @returns {*} - The modified element.
     */
    #createElement(element, classList, id) {
        if (typeof id === `string` && id !== ``) {
            element.id = id;
        }

        if (typeof classList === `string` && classList !== ``) {
            classList = classList.trim().split(` `);

            classList.forEach(className => {
                if (typeof className === `string` && className !== `` && !className.includes(` `)) {
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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the link.
     * @returns {*} - The created anchor element.
     */
    createA(href = ``, text = ``, classList = ``, id = ``) {
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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the button.
     * @returns {*} - The created button element.
     */
    createButton(text = ``, callback = () => {}, classList = ``, id = ``) {
        const button = this.#createElement(
            document.createElement('button'), classList, id
        )

        button.innerText = text;
        button.onclick = callback;
        return button;
    }

    /**
     * @description Creates and returns a div element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the div.
     * @returns {*} - The created div element.
     */
    createDiv(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('div'), classList, id
        );
    }

    /**
     * @description Creates and returns a footer element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the footer.
     * @returns {*} - The created footer element.
     */
    createFooter(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('footer'), classList, id
        );
    }

    /**
     * @description Creates and returns an 'h' element of the specified level (h1 - h6).
     * @param text - The text to display in the 'h' element.
     * @param level - The level of the 'h' element (1-6).
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the 'h' element.
     * @returns {*} - The created 'h' element.
     */
    createH(text = ``, level = 1, classList = ``, id = ``) {
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
     * @description Creates and returns a header element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the header.
     * @returns {*} - The created header element.
     */
    createHeader(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('header'), classList, id
        );
    }

    /**
     * @description Creates and returns an img element.
     * @param src - The source of the image.
     * @param alt - The alt text for the image.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the img element.
     * @returns {*} - The created img element.
     */
    createImg(src, alt = ``, classList = ``, id = ``) {
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
     * @description Creates and returns a main element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the main element.
     * @returns {*} - The created main element.
     */
    createMain(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('main'), classList, id
        );
    }

    /**
     * @description Creates and returns a nav element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the nav.
     * @returns {*} - The created nav element.
     */
    createNav(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('nav'), classList, id
        );
    }

    /**
     * @description Creates and returns a paragraph element.
     * @param text - The text to display in the paragraph.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the paragraph.
     * @returns {*} - The created paragraph element.
     */
    createP(text = ``, classList = ``, id = ``) {
        const p = this.#createElement(
            document.createElement('p'), classList, id
        )

        p.innerText = text;
        return p;
    }

    createSpan(innerHtml = ``, classList = ``, id = ``) {
        const span = this.#createElement(
            document.createElement('span'), classList, id
        )

        span.innerHTML = innerHtml;
        return span;
    }

    /**
     * @description Creates and returns a table element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the table.
     * @returns {*} - The created table element.
     */
    createTable(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('table'), classList, id
        );
    }

    /**
     * @description Creates and returns a tbody element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the tbody.
     * @returns {*} - The created tbody element.
     */
    createTbody(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('tbody'), classList, id
        );
    }

    /**
     * @description Creates and returns a td element.
     * @param innerHtml - The inner HTML content of the td element.
     * @param colspan - The number of columns to span.
     * @param rowspan - The number of rows to span.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the td element.
     * @returns {*} - The created td element.
     */
    createTd(innerHtml = ``, colspan = 0, rowspan = 0, classList = ``, id = ``) {
        const td = document.createElement('td');

        if (typeof colspan === `number` && Number.isInteger(colspan) && colspan > 0) {
            td.colSpan = colspan;
        }

        if (typeof rowspan === `number` && Number.isInteger(rowspan) && rowspan > 0) {
            td.rowSpan = rowspan;
        }

        td.innerHTML = innerHtml;

        return this.#createElement(td, classList, id);
    }

    /**
     * @description Creates and returns a th element.
     * @param innerHtml - The inner HTML content of the th element.
     * @param colspan - The number of columns to span.
     * @param rowspan - The number of rows to span.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the th element.
     * @returns {*} - The created th element.
     */
    createTh(innerHtml = ``, colspan = 0, rowspan = 0, classList = ``, id = ``) {
        const th = document.createElement('th');

        if (typeof colspan === `number` && Number.isInteger(colspan) && colspan > 0) {
            th.colSpan = colspan;
        }

        if (typeof rowspan === `number` && Number.isInteger(rowspan) && rowspan > 0) {
            th.rowSpan = rowspan;
        }

        th.innerHTML = innerHtml;

        return this.#createElement(th, classList, id);
    }

    /**
     * @description Creates and returns a thead element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the thead.
     * @returns {*} - The created thead element.
     */
    createThead(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('thead'), classList, id
        );
    }

    /**
     * @description Creates and returns a 'tr' element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the 'tr' element.
     * @returns {*} - The created 'tr' element.
     */
    createTr(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('tr'), classList, id
        );
    }
}

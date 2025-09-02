`use strict`;

/**
 * @description A class that streamlines the creation of HTML elements.
 * @class
 */
export default class Nodeworthy {
    constructor() {}

    /**
     * @description Applies the specified class list and ID to the given element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the element.
     * @param element - The element to apply the class list and ID to.
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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the link.
     * @param href - The URL to link to.
     * @param text - The text to display on the link.
     * @returns {*} - The created anchor element.
     */
    createA(classList = ``, id = ``, href = ``, text = ``) {
        const a = this.#createElement(
            document.createElement('a'), classList, id
        );

        if (typeof href === `string` && href !== ``) {
            a.href = href;
        }

        a.textContent = text;

        return a;
    }

    /**
     * @description Creates and returns an article element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the section.
     * @returns {*} - The created article element.
     */
    createArticle(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('article'), classList, id
        );
    }

    /**
     * @description Creates and returns a button element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the button.
     * @param text - The text to display on the button.
     * @param callback - The function to call when the button is clicked.
     * @returns {*} - The created button element.
     */
    createButton(classList = ``, id = ``, text = ``, callback = () => {}) {
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
     * description Creates and returns a form element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the form.
     * @param name - The name of the form.
     * @param action - The action URL of the form.
     * @param method - The HTTP method of the form.
     * @param target - The target attribute of the form.
     * @param autocomplete - The autocomplete attribute of the form.
     * @param acceptCharset - The acceptCharset attribute of the form.
     * @param novalidate - Whether to disable form validation.
     * @param enctype - The enctype attribute of the form.
     * @returns {*} - The created form element.
     */
    createForm(classList = ``, id = ``,
               name = ``, action = ``, method = ``, target = `_self`,
               autocomplete = `off`, acceptCharset = `UTF-8`, novalidate = false,
               enctype = `application/x-www-form-urlencoded`) {
        const form = document.createElement('form');

        if (typeof name === `string` && name !== ``) {
            form.name = name;
        }

        if (typeof action === `string` && action !== ``) {
            form.action = action;
        }

        if (typeof method === `string` && method !== ``) {
            form.method = method;
        }

        if (typeof target === `string` && target !== ``) {
            form.target = target;
        }

        if (typeof autocomplete === `string` &&
            (autocomplete === `on` || autocomplete === `off`)) {
            form.autocomplete = autocomplete;
        }

        if (typeof acceptCharset === `string` && acceptCharset !== ``) {
            form.acceptCharset = acceptCharset;
        }

        if (typeof novalidate === `boolean`) {
            form.noValidate = novalidate;
        }

        if (typeof enctype === `string` && enctype !== ``) {
            form.enctype = enctype;
        }

        return this.#createElement(
            form, classList, id
        );
    }

    /**
     * @description Creates and returns an 'h' element of the specified level (h1 - h6).
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the 'h' element.
     * @param level - The level of the 'h' element (1-6).
     * @param text - The text to display in the 'h' element.
     * @returns {*} - The created 'h' element.
     */
    createH(classList = ``, id = ``, level = 1, text = ``) {
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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the img element.
     * @param src - The source of the image.
     * @param alt - The alt text for the image.
     * @returns {*} - The created img element.
     */
    createImg(classList = ``, id = ``, src, alt = ``) {
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
     * @description Creates and returns an input element of type 'email'.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the img element.
     * @param value - The value of the email.
     * @param name - The name of the email.
     * @param placeholder - The placeholder text for the email.
     * @param minlength - The minimum length of the input.
     * @param maxlength - The maximum length of the input.
     * @param multiple - Whether the input allows multiple email values.
     * @param autocomplete - The autocomplete attribute of the input.
     * @param size - The size (width in characters) of the input.
     * @param pattern - The regex pattern to match against the input.
     * @param list - The list ID to associate with the input.
     * @param readonly - Whether the input is read-only.
     * @param required - Whether the input is required.
     * @param disabled - Whether the input is disabled.
     * @returns {*} - The created input element.
     */
    createInputEmail(classList = ``, id = ``,
                     value = ``, name = ``, placeholder = ``,
                     minlength = 0, maxlength = 0, multiple = false,
                     autocomplete = ``, size = 0, pattern = ``, list = ``,
                     readonly = false, required = false, disabled = false) {
        const input = this.#createElement(
            document.createElement('input'), classList, id
        )

        input.type = `email`;

        if (typeof value === `string` && value !== ``) {
            input.value = value;
        }

        if (typeof name === `string` && name !== ``) {
            input.name = name;
        }

        if (typeof placeholder === `string` && placeholder !== ``) {
            input.placeholder = placeholder;
        }

        if (typeof minlength === `number` && Number.isInteger(minlength) && minlength >= 0) {
            input.minLength = minlength;
        }

        if (typeof maxlength === `number` && Number.isInteger(maxlength) && maxlength > 0) {
            input.maxLength = maxlength;
        }

        if (typeof multiple === `boolean`) {
            input.multiple = multiple;
        }

        if (typeof autocomplete === `string` && autocomplete !== ``) {
            input.autocomplete = autocomplete;
        }

        if (typeof size === `number` && Number.isInteger(size) && size > 0) {
            input.size = size;
        }

        if (typeof pattern === `string` && pattern !== ``) {
            input.pattern = pattern;
        }

        if (typeof list === `string` && list !== ``) {
            input.list = list;
        }

        if (typeof readonly === `boolean`) {
            input.readOnly = readonly;
        }

        if (typeof required === `boolean`) {
            input.required = required;
        }

        if (typeof disabled === `boolean`) {
            input.disabled = disabled;
        }

        return input;
    }

    /**
     * @description Creates and returns an input element of type 'number'.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the img element.
     * @param value - The value of the number.
     * @param step - The step value of the number.
     * @param name - The name of the number.
     * @param placeholder - The placeholder text for the number.
     * @param min - The minimum length of the input.
     * @param max - The maximum length of the input.
     * @param autocomplete - The autocomplete attribute of the input.
     * @param size - The size (width in characters) of the input.
     * @param pattern - The regex pattern to match against the input.
     * @param list - The list ID to associate with the input.
     * @param readonly - Whether the input is read-only.
     * @param required - Whether the input is required.
     * @param disabled - Whether the input is disabled.
     * @returns {*} - The created input element.
     */
    createInputNumber(classList = ``, id = ``,
                      value = 0, step = 1, name = ``, placeholder = 0,
                      min = 0, max = 0,
                      autocomplete = ``, size = 0, pattern = ``, list = ``,
                      readonly = false, required = false, disabled = false) {
        const input = this.#createElement(
            document.createElement('input'), classList, id
        )

        input.type = `number`;

        if (typeof value === `number` && value !== 0) {
            input.value = value;
        }

        if (typeof step === `number` && Number.isInteger(step)) {
            input.step = step;
        }

        if (typeof name === `string` && name !== ``) {
            input.name = name;
        }

        if (typeof placeholder === `number` && placeholder !== 0) {
            input.placeholder = placeholder;
        }

        if (typeof min === `number`) {
            input.minLength = min;
        }

        if (typeof max === `number`) {
            input.maxLength = max;
        }

        if (typeof autocomplete === `string` && autocomplete !== ``) {
            input.autocomplete = autocomplete;
        }

        if (typeof size === `number` && Number.isInteger(size) && size > 0) {
            input.size = size;
        }

        if (typeof pattern === `string` && pattern !== ``) {
            input.pattern = pattern;
        }

        if (typeof list === `string` && list !== ``) {
            input.list = list;
        }

        if (typeof readonly === `boolean`) {
            input.readOnly = readonly;
        }

        if (typeof required === `boolean`) {
            input.required = required;
        }

        if (typeof disabled === `boolean`) {
            input.disabled = disabled;
        }

        return input;
    }

    /**
     * @description Creates and returns an input element of type 'text'.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the img element.
     * @param value - The value of the text.
     * @param name - The name of the text.
     * @param placeholder - The placeholder text for the text.
     * @param minlength - The minimum length of the input.
     * @param maxlength - The maximum length of the input.
     * @param autocomplete - The autocomplete attribute of the input.
     * @param size - The size (width in characters) of the input.
     * @param pattern - The regex pattern to match against the input.
     * @param list - The list ID to associate with the input.
     * @param readonly - Whether the input is read-only.
     * @param required - Whether the input is required.
     * @param disabled - Whether the input is disabled.
     * @returns {*} - The created input element.
     */
    createInputText(classList = ``, id = ``,
                    value = ``, name = ``, placeholder = ``,
                    minlength = 0, maxlength = 0,
                    autocomplete = ``, size = 0, pattern = ``, list = ``,
                    readonly = false, required = false, disabled = false) {
        const input = this.#createElement(
            document.createElement('input'), classList, id
        )

        input.type = `text`;

        if (typeof value === `string` && value !== ``) {
            input.value = value;
        }

        if (typeof name === `string` && name !== ``) {
            input.name = name;
        }

        if (typeof placeholder === `string` && placeholder !== ``) {
            input.placeholder = placeholder;
        }

        if (typeof minlength === `number` && Number.isInteger(minlength) && minlength >= 0) {
            input.minLength = minlength;
        }

        if (typeof maxlength === `number` && Number.isInteger(maxlength) && maxlength > 0) {
            input.maxLength = maxlength;
        }

        if (typeof autocomplete === `string` && autocomplete !== ``) {
            input.autocomplete = autocomplete;
        }

        if (typeof size === `number` && Number.isInteger(size) && size > 0) {
            input.size = size;
        }

        if (typeof pattern === `string` && pattern !== ``) {
            input.pattern = pattern;
        }

        if (typeof list === `string` && list !== ``) {
            input.list = list;
        }

        if (typeof readonly === `boolean`) {
            input.readOnly = readonly;
        }

        if (typeof required === `boolean`) {
            input.required = required;
        }

        if (typeof disabled === `boolean`) {
            input.disabled = disabled;
        }

        return input;
    }

    /**
     * @description Creates and returns a label element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the label.
     * @param text - The text to display in the label.
     * @param labelFor - The ID of the element the label is associated with.
     * @returns {*} - The created label element.
     */
    createLabel(classList = ``, id = ``, text = ``, labelFor = ``) {
        const label = this.#createElement(
            document.createElement('label'), classList, id
        )

        if (typeof text === `string` && text !== ``) {
            label.innerText = text;
        }

        if (typeof labelFor === `string` && labelFor !== ``) {
            label.htmlFor = labelFor;
        }

        return label;
    }

    /**
     * description Creates and returns an 'li' element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the 'li' element.
     * @param innerHtml - The inner HTML content of the 'li' element.
     * @returns {*} - The created main element.
     */
    createLi(classList = ``, id = ``, innerHtml = ``) {
        const li = this.#createElement(
            document.createElement('li'), classList, id
        );

        li.innerHTML = innerHtml;

        return li;
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
     * @description Creates and returns an 'ol' element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the 'ol' element.
     * @returns {*} - The created 'ol' element.
     */
    createOl(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('ol'), classList, id
        );
    }

    /**
     * @description Creates and returns a paragraph element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the paragraph.
     * @param text - The text to display in the paragraph.
     * @returns {*} - The created paragraph element.
     */
    createP(classList = ``, id = ``, text = ``) {
        const p = this.#createElement(
            document.createElement('p'), classList, id
        )

        p.innerText = text;
        return p;
    }

    createSpan(classList = ``, id = ``, innerHtml = ``) {
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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the td element.
     * @param innerHtml - The inner HTML content of the td element.
     * @param colspan - The number of columns to span.
     * @param rowspan - The number of rows to span.
     * @returns {*} - The created td element.
     */
    createTd(classList = ``, id = ``, innerHtml = ``, colspan = 0, rowspan = 0) {
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
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the th element.
     * @param innerHtml - The inner HTML content of the th element.
     * @param colspan - The number of columns to span.
     * @param rowspan - The number of rows to span.
     * @returns {*} - The created th element.
     */
    createTh(classList = ``, id = ``, innerHtml = ``, colspan = 0, rowspan = 0) {
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

    /**
     * @description Creates and returns a 'ul' element.
     * @param classList - A space-separated string of class names to apply to the element, (e.g. 'class1 class2').
     * @param id - The ID to assign to the 'tr' element.
     * @returns {*} - The created 'ul' element.
     */
    createUl(classList = ``, id = ``) {
        return this.#createElement(
            document.createElement('ul'), classList, id
        );
    }
}

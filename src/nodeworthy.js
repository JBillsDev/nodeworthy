
export default class Nodeworthy {
    constructor() {}

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

    createDiv(classList = [], id = ``) {
        return this.#createElement(
            document.createElement('div'), classList, id
        );
    }

    createP(text = ``, classList = [], id = ``) {
        const p = this.#createElement(
            document.createElement('p'), classList, id
        )

        p.innerText = text;
        return p;
    }
}

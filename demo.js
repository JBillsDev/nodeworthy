'use strict';

import Nodeworthy from './src/nodeworthy.js';

class App {
    constructor() {
        this.nodeworthy = new Nodeworthy();
    }

    #waitSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    async #createHeader() {
        const header = this.nodeworthy.createHeader();
        const div1 = this.nodeworthy.createDiv('background-dark border-bottom flex-row', `div-h1`);
        div1.appendChild(
            this.nodeworthy.createH(`This is an H1...`)
        );
        header.appendChild(div1);
        document.body.appendChild(header);

        await this.#waitSeconds(0.5);
        const div2 = this.nodeworthy.createDiv('background-dark border-bottom flex-row');
        div2.appendChild(
            this.nodeworthy.createH(`While this is an H6`, 6)
        );

        header.appendChild(div2);

        await this.#waitSeconds(0.5);
        header.appendChild(
            this.#createNav()
        );
    }

    #createMain() {
        const main = this.nodeworthy.createMain(`flex-center flex-column`);
        main.appendChild(
            this.nodeworthy.createH(`Title`, 2)
        );
        main.appendChild(
            this.nodeworthy.createP(
                `A paragraph of text...`, `text-highlight`)
        );

        this.#waitSeconds(0.5).then();

        const buttonClass = `button-img`;
        main.appendChild(
            this.nodeworthy.createButton(
                `Click me!`,
                () => {
                    const main = document.querySelector(`main`);
                    main.removeChild(document.getElementById(buttonClass));

                    const div = this.nodeworthy.createDiv(`flex-center flex-row`, `div-img`);
                    const img = this.nodeworthy.createImg(`https://picsum.photos/200`, `A Picsum Image`);
                    const a = this.nodeworthy.createA(`https://picsum.photos/`);

                    a.appendChild(img);
                    div.appendChild(a);
                    main.appendChild(div);
                },
                ``,
                buttonClass
            )
        );

        document.body.appendChild(main);
    }

    #createNav() {
        const nav = this.nodeworthy.createNav(`flex-row`);
        nav.appendChild(
            this.nodeworthy.createA(`https://google.com`, `Google`)
        );
        nav.appendChild(
            this.nodeworthy.createA(`https://duckduckgo.com`, `DuckDuckGo`)
        );
        nav.appendChild(
            this.nodeworthy.createA(`https://github.com`, `GitHub`)
        );

        return nav;
    }

    async login() {
        document.body.removeChild(document.getElementById(`login`));

        await this.#waitSeconds(1);
        await this.#createHeader();
        await this.#waitSeconds(0.5);
        this.#createMain();
    }
}

const app = new App();

window.onload = () => {
    const nodeworthy = new Nodeworthy();
    const div = nodeworthy.createDiv(
        `flex-column`, `login`
    );
    const button = nodeworthy.createButton(
        `Login`,
        () => {
            app.login().then();
        },
        ``,
        `button-login`
    );

    div.appendChild(button);
    document.body.appendChild(div);
}

'use strict';

import Nodeworthy from './src/nodeworthy.js';

class App {
    constructor() {
        this.nodeworthy = new Nodeworthy();
    }

    #waitSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    async login() {
        document.body.removeChild(document.getElementById(`login`));

        await this.#waitSeconds(1);

        const div1 = this.nodeworthy.createDiv('background-dark border-bottom flex-row', `div-h1`);
        div1.appendChild(
            this.nodeworthy.createH(`This is an H1...`)
        );
        document.body.appendChild(div1);

        await this.#waitSeconds(0.5);
        const div2 = this.nodeworthy.createDiv('background-dark border-bottom flex-row', 2);
        div2.appendChild(
            this.nodeworthy.createH(`While this is an H6`, 6)
        );

        document.body.appendChild(div2);

        const div3 = this.nodeworthy.createDiv(`flex-center flex-column`);
        div3.appendChild(
            this.nodeworthy.createH(`Title`, 2)
        );
        div3.appendChild(
            this.nodeworthy.createP(
                `A paragraph of text...`, `text-highlight`)
        );

        document.body.appendChild(div3);

        await this.#waitSeconds(0.5);

        const buttonClass = `button-img`;
        div3.appendChild(
            this.nodeworthy.createButton(
                `Click me!`,
                () => {
                    document.getElementById(buttonClass).parentElement.removeChild(document.getElementById(buttonClass));

                    const div = this.nodeworthy.createDiv(`flex-center flex-row`, `div-img`);
                    const img = this.nodeworthy.createImg(`https://picsum.photos/200`, `A Picsum Image`);
                    const a = this.nodeworthy.createA(`https://picsum.photos/`);

                    a.appendChild(img);
                    div.appendChild(a);
                    document.body.appendChild(div);
                },
                ``,
                buttonClass
            )
        );
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

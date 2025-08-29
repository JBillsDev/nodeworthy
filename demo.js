'use strict';

import Nodeworthy from './src/nodeworthy.js';

class App {
    constructor() {
        this.nodeworthy = new Nodeworthy();
    }

    #waitSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    #createFooter() {
        const footer = this.nodeworthy.createFooter(`flex-center`);
        footer.append(
            this.nodeworthy.createP(`©2025 - Some Company`)
        );

        document.body.appendChild(footer);
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

    async #createMain() {
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

        this.#waitSeconds(0.5).then();
        this.#createTableHead();
        await this.#createTableBody();
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

    async #createTableBody() {
        const data = [
            { name: `John`, age: 25, country: `USA`, email: `john@fakemail.com` },
            { name: `Jake`, age: 30, country: `Canada`, email: `jake@fakemail.com` },
            { name: `Jenny`, age: 42, country: `France`, email: `jenny@fakemail.com` },
        ];

        const tbody = this.nodeworthy.createTbody();
        document.body.querySelector(`table`).appendChild(tbody);

        for (let i = 0; i < data.length; i++) {
            await this.#createRow(i, data[i]);
        }
    }

    #createTableHead() {
        const table = this.nodeworthy.createTable();
        const thead = this.nodeworthy.createThead();
        const headRowTop = this.nodeworthy.createTr();
        headRowTop.appendChild(
            this.nodeworthy.createTh(`#`, 0, 2)
        );
        headRowTop.appendChild(
            this.nodeworthy.createTh(`Name`)
        );
        headRowTop.appendChild(
            this.nodeworthy.createTh(`Age`)
        );
        headRowTop.appendChild(
            this.nodeworthy.createTh(`Country`)
        );

        const headRowBottom = this.nodeworthy.createTr();
        headRowBottom.appendChild(
            this.nodeworthy.createTh(`Email`, 3)
        );

        thead.appendChild(headRowTop);
        thead.appendChild(headRowBottom);
        table.appendChild(thead);

        document.querySelector(`main`).appendChild(table);
    }

    async #createRow(index, row) {
        await this.#waitSeconds(0.25).then();

        const trTop = this.nodeworthy.createTr();
        trTop.appendChild(
            this.nodeworthy.createTd(index.toString(), 0, 2, `text-center`)
        );
        trTop.appendChild(
            this.nodeworthy.createTd(row[`name`])
        );
        trTop.appendChild(
            this.nodeworthy.createTd(row[`age`])
        );
        trTop.appendChild(
            this.nodeworthy.createTd(row[`country`])
        );

        const trBottom = this.nodeworthy.createTr();
        trBottom.appendChild(
            this.nodeworthy.createTd(row[`email`], 3, 0, `text-center`)
        );

        const tbody = document.querySelector(`tbody`);
        tbody.appendChild(trTop);
        tbody.appendChild(trBottom);
    }

    async login() {
        document.body.removeChild(document.getElementById(`login`));

        await this.#waitSeconds(1);
        await this.#createHeader();
        await this.#waitSeconds(0.5);
        await this.#createMain();
        await this.#waitSeconds(0.5);
        this.#createFooter();
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

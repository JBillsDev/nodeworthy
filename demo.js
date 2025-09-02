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

    #createForm() {
        const form = this.nodeworthy.createForm(
            `flex-column`, `dummy-form`,
            `dummy-form`, ``, ``, `_self`,
            `off`
        );

        const name = this.nodeworthy.createDiv(`flex-row`);
        name.appendChild(
            this.nodeworthy.createLabel(`Name:`, `input-name`, `text-right`)
        );
        name.appendChild(
            this.nodeworthy.createInputText(
                ``, `input-name`, `John Doe`, ``, `input-name`,
                0, 0, ``, 0, ``,
                ``, false, true
            )
        );
        form.appendChild(name);

        const age = this.nodeworthy.createDiv(`flex-row`);
        age.appendChild(
            this.nodeworthy.createLabel(`Age:`, `input-age`, `text-right`)
        );
        age.appendChild(
            this.nodeworthy.createInputNumber(
                0, 1, `input-age`, 21, ``,  `input-age`,
                0, 0, ``, 0, `/^[0-9]+$/`,
                ``, false, true
            )
        );
        form.appendChild(age);

        const countryCode = this.nodeworthy.createDiv(`flex-row`);
        countryCode.appendChild(
            this.nodeworthy.createLabel(`CC:`, `input-cc`, `text-right`)
        );
        countryCode.appendChild(
            this.nodeworthy.createInputText(
                ``, `input-cc`, `US`, ``, `input-cc`,
                2, 2, ``, 0, `/^[A-Za-z]+$/`,
                ``, false, true
            )
        );
        form.appendChild(countryCode);

        const email = this.nodeworthy.createDiv(`flex-row`);
        email.appendChild(
            this.nodeworthy.createLabel(`Email:`, `input-email`, `text-right`)
        );
        email.appendChild(
            this.nodeworthy.createInputEmail(
                ``, `input-email`, `john@fakemail.com`, ``, `input-email`,
                0, 0, false, ``, 0, ``,
                ``, false, true
            )
        );
        form.appendChild(email);

        const button = this.nodeworthy.createButton(
            ``,
            ``,
            `Submit`,
            (e) => {
                e.preventDefault();

                const name = document.getElementById(`input-name`);
                const age = document.getElementById(`input-age`);
                let ageValue = 0;
                const countryCode = document.getElementById(`input-cc`);
                const email = document.getElementById(`input-email`);

                if (typeof name.value !== `string` || name.value === `` ) {
                    alert(`Please enter a valid name...`);
                    return;
                }

                if (typeof age.value === `string` && age.value !== ``) {
                    ageValue = parseInt(age.value);

                    if (ageValue < 1) {
                        alert(`Please enter a valid age...`);
                        return;
                    }
                } else {
                    alert(`Please enter a valid age...`);
                    return;
                }

                if (typeof countryCode.value !== `string` || countryCode.value.length !== 2) {
                    alert(`Please enter a valid country code...`);
                    return;
                }

                if (typeof email.value !== `string` || email.value.length < 5 ||
                    !email.value.includes(`@`) || !email.value.includes(`.`)) {
                    alert(`Please enter a valid email address...`);
                    return;
                }

                this.#createRow(
                    document.querySelectorAll(`tbody tr`).length / 2 + 1,
                    {
                        name: name.value, age: age.value, country: countryCode.value.toUpperCase(), email: email.value
                    }
                ).then();

                name.value = ``;
                age.value = ``;
                countryCode.value = ``;
                email.value = ``;
            }
        );
        form.appendChild(button);

        document.querySelector(`main`).appendChild(form);
    }

    async #createHeader() {
        const header = this.nodeworthy.createHeader();
        const div1 = this.nodeworthy.createDiv('background-dark border-bottom flex-row', `div-h1`);
        div1.appendChild(
            this.nodeworthy.createH(``, ``, 1, `This is an H1...`)
        );
        header.appendChild(div1);
        document.body.appendChild(header);

        await this.#waitSeconds(0.5);
        const div2 = this.nodeworthy.createDiv('background-dark border-bottom flex-row');
        div2.appendChild(
            this.nodeworthy.createH(``, ``, 6, `While this is an H6`)
        );

        header.appendChild(div2);
    }

    #createLists() {
        const div = this.nodeworthy.createDiv(`flex-column`, `div-lists`);
        div.appendChild(
            this.nodeworthy.createH(`border-bottom text-center`, ``, 2, `Lists`)
        );

        const flexRow = this.nodeworthy.createDiv(`flex-row`);
        const ol = this.nodeworthy.createOl();
        for (let i = 0; i < 5; i++) {
            ol.appendChild(
                this.nodeworthy.createLi(`Ordered list item`)
            );
        }

        const ul = this.nodeworthy.createUl();
        for (let i = 0; i < 5; i++) {
            ul.appendChild(
                this.nodeworthy.createLi(`Unordered list item`)
            );
        }

        flexRow.appendChild(ol);
        flexRow.appendChild(ul);
        div.appendChild(flexRow);
        document.querySelector(`main`).appendChild(div);
    }

    async #createMain() {
        const main = this.nodeworthy.createMain(`flex-center flex-column`);
        main.appendChild(
            this.nodeworthy.createH(``, ``, 2, `Title`)
        );

        const p = this.nodeworthy.createP();
        p.innerHTML = `This is a paragraph with a`;
        const span = this.nodeworthy.createSpan(` span that highlights text!`, `text-highlight`);
        p.appendChild(span);
        main.appendChild(p);

        document.body.appendChild(main);

        this.#createForm();

        this.#waitSeconds(0.5).then();

        const buttonID = `button-img`;
        main.appendChild(
            this.nodeworthy.createButton(
                ``,
                buttonID,
                `Click me!`,
                () => {
                    const main = document.querySelector(`main`);
                    main.removeChild(document.getElementById(buttonID));

                    const div = this.nodeworthy.createDiv(`flex-center flex-row`, `div-img`);
                    const img = this.nodeworthy.createImg(`https://picsum.photos/200`, `A Picsum Image`);
                    const a = this.nodeworthy.createA(``, ``, `https://picsum.photos/`);

                    a.appendChild(img);
                    div.appendChild(a);
                    main.appendChild(div);
                }
            )
        );

        this.#waitSeconds(0.5).then();
        this.#createLists();
        this.#waitSeconds(0.5).then();
        this.#createTableHead();
        await this.#createTableBody();
    }

    #createNav() {
        const nav = this.nodeworthy.createNav(`flex-row`);
        nav.appendChild(
            this.nodeworthy.createA(``, ``, `https://google.com`, `Google`)
        );
        nav.appendChild(
            this.nodeworthy.createA(``, ``, `https://duckduckgo.com`, `DuckDuckGo`)
        );
        nav.appendChild(
            this.nodeworthy.createA(``, ``, `https://github.com`, `GitHub`)
        );

        document.body.appendChild(nav);
    }

    async #createTableBody() {
        const data = [
            { name: `John Johnnies`, age: 25, country: `US`, email: `john@fakemail.com` },
            { name: `Jake Jacobson`, age: 30, country: `CA`, email: `jake@fakemail.com` },
            { name: `Jenny Jennette`, age: 42, country: `FR`, email: `jenny@fakemail.com` },
            { name: `John Johnnies`, age: 25, country: `US`, email: `john@fakemail.com` },
            { name: `Jake Jacobson`, age: 30, country: `CA`, email: `jake@fakemail.com` },
            { name: `Jenny Jennette`, age: 42, country: `FR`, email: `jenny@fakemail.com` },
            { name: `John Johnnies`, age: 25, country: `US`, email: `john@fakemail.com` },
            { name: `Jake Jacobson`, age: 30, country: `CA`, email: `jake@fakemail.com` },
            { name: `Jenny Jennette`, age: 42, country: `FR`, email: `jenny@fakemail.com` },
            { name: `John Johnnies`, age: 25, country: `US`, email: `john@fakemail.com` },
            { name: `Jake Jacobson`, age: 30, country: `CA`, email: `jake@fakemail.com` },
            { name: `Jenny Jennette`, age: 42, country: `FR`, email: `jenny@fakemail.com` },
        ];

        const tbody = this.nodeworthy.createTbody();
        document.body.querySelector(`table`).appendChild(tbody);

        for (let i = 0; i < data.length; i++) {
            await this.#createRow(i + 1, data[i]);
        }
    }

    #createTableHead() {
        const container = this.nodeworthy.createDiv(``, `table-container`);
        const table = this.nodeworthy.createTable();
        const thead = this.nodeworthy.createThead();
        const headRowTop = this.nodeworthy.createTr();
        headRowTop.appendChild(
            this.nodeworthy.createTh(`#`, 0, 2, `table-index text-center`)
        );
        headRowTop.appendChild(
            this.nodeworthy.createTh(`Name`, `text-center`)
        );
        headRowTop.appendChild(
            this.nodeworthy.createTh(`Age`, 0, 0, `table-age text-center`)
        );
        headRowTop.appendChild(
            this.nodeworthy.createTh(`CC`, 0, 0, `table-cc text-center`)
        );

        const headRowBottom = this.nodeworthy.createTr();
        headRowBottom.appendChild(
            this.nodeworthy.createTh(`Email`, 3)
        );

        thead.appendChild(headRowTop);
        thead.appendChild(headRowBottom);
        table.appendChild(thead);
        container.appendChild(table);

        document.querySelector(`main`).appendChild(container);
    }

    async #createRow(index, row) {
        await this.#waitSeconds(0.25).then();

        const trTop = this.nodeworthy.createTr();
        trTop.appendChild(
            this.nodeworthy.createTd(index.toString(), 0, 2, `table-index text-center`)
        );
        trTop.appendChild(
            this.nodeworthy.createTd(row[`name`], 0, 0, `text-center`)
        );
        trTop.appendChild(
            this.nodeworthy.createTd(row[`age`], 0, 0, `table-age text-center`)
        );
        trTop.appendChild(
            this.nodeworthy.createTd(row[`country`], 0, 0, `table-cc text-center`)
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
        this.#createFooter();
        await this.#createHeader();
        await this.#waitSeconds(0.5);
        this.#createNav();
        await this.#waitSeconds(0.5);
        await this.#createMain();
    }
}

const app = new App();

window.onload = () => {
    const nodeworthy = new Nodeworthy();
    const div = nodeworthy.createDiv(
        `flex-column`, `login`
    );
    const button = nodeworthy.createButton(
        ``,
        `button-login`,
        `Login`,
        () => {
            app.login().then();
        }
    );

    div.appendChild(button);
    document.body.appendChild(div);
}

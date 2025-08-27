'use strict';

import Nodeworthy from './src/nodeworthy.js';

window.onload = function() {
    const nodeworthy = new Nodeworthy();
    const div1 = nodeworthy.createDiv(['flex-row'], 'div-id');
    div1.appendChild(
        nodeworthy.createH(`This is an H1...`)
    );

    document.body.appendChild(div1);

    const div2 = nodeworthy.createDiv(['flex-row'], 2);
    div2.appendChild(
        nodeworthy.createH(`White this is an H6`, 6)
    );

    document.body.appendChild(div2);

    const div3 = nodeworthy.createDiv(
        [1, `  `, 3, `flex-column`, 5, `flex row`, 7, `flex column`, 9, ``], 'div-id');
    div3.appendChild(
        nodeworthy.createH(`Title`, 2)
    );
    div3.appendChild(
        nodeworthy.createP(
            `A paragraph of text...`, [`text-highlight`])
    );
    div3.appendChild(
        nodeworthy.createButton(`Click me!`, () => {
            document.body.appendChild(
                nodeworthy.createP(`The button was clicked!`)
            )
        })
    );

    document.body.appendChild(div3);
}

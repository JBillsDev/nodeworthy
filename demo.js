'use strict';

import Nodeworthy from './src/nodeworthy.js';

window.onload = function() {
    const nodeworthy = new Nodeworthy();
    const div1 = nodeworthy.createDiv(['flex-row'], 'div-id');
    document.body.appendChild(div1);

    const div2 = nodeworthy.createDiv(['flex-row'], 2);
    document.body.appendChild(div2);

    const div3 = nodeworthy.createDiv(
        [1, `  `, 3, `flex-column`, 5, `flex row`, 7, `flex column`, 9, ``], 'div-id');
    document.body.appendChild(div3);
}

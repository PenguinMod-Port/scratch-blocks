const fs = require('fs');
const path = require('path');
const glob = require('glob');

let output = `// This file was automatically generated.  Do not modify.

'use strict';

goog.provide('Blockly.ScratchMsgs.pmLocales');

goog.require('Blockly.ScratchMsgs');
`

glob.sync(path.resolve(__dirname, '../../msg/json/pm/*.json')).forEach(function (uri) {
    const name = path.parse(uri).name;
    if (name !== 'qqq' && name !== 'synonyms') {
        let body = fs.readFileSync(uri, 'utf-8');
        // Convert file body into an object (let this throw if invalid JSON)
        body = JSON.parse(body);
        output += '\n';
        output += `Blockly.ScratchMsgs.pmLocales["${name}"] = `;
        output += JSON.stringify(body, null, 4);
        output += ';\n';
    }
});

fs.writeFileSync(path.resolve(__dirname, '../../msg/pm_msgs.js'), output, 'utf-8')
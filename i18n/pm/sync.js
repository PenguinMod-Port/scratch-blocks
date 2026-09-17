const fs = require('fs');
const path = require('path');
const assert = require('assert');
const {txPull, txPush, txAvailableLanguages} = require('scratch-l10n/lib/transifex.js');

const PROJECT = 'penguinmod-editor';
const RESOURCE = 'scratch-blocks';

(async () => {
    // sync msg/json/pm/en.json
    let en = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../msg/json/pm/en.json'), 'utf-8'));
    await txPush(PROJECT, RESOURCE, en);

    let languages = (await txAvailableLanguages(PROJECT)).map(v => v.toLowerCase().replaceAll("_", "-"));

    // TODO: pushing
})()
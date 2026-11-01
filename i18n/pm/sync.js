const fs = require('fs');
const path = require('path');
const {txPull, txPush, txAvailableLanguages} = require('scratch-l10n/lib/transifex.js');

const PROJECT = 'penguinmod-editor';
const RESOURCE = 'scratch-blocks';

(async () => {
    let languages = await txAvailableLanguages(PROJECT);

    // sync msg/json/pm/en.json
    let en = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../msg/json/pm/en.json'), 'utf-8'));
    console.log(`[0/${languages.length}] en`);
    await txPush(PROJECT, RESOURCE, en);

    // sync the other languages
    for (let [i, language] of Object.entries(languages)) {
        let languageCode = language.toLowerCase().replaceAll("_", "-");
        console.log(`[${Number(i)+1}/${languages.length}] ${languageCode}`);
        let languageData = await txPull(PROJECT, RESOURCE, language);
        fs.writeFileSync(path.resolve(__dirname, `../../msg/json/pm/${languageCode}.json`), JSON.stringify(languageData, null, 4), 'utf-8');
    }
})()
const fs = require("fs")
const path = require("path")

const goog = {
    provide: _ => {},
    require: _ => {}
}

const Blockly = {
    Msg: {}
}

eval(fs.readFileSync(path.resolve(__dirname, '../../msg/messages.js'), 'utf-8'));

Blockly.Msg = Object.fromEntries(Object.entries(Blockly.Msg).filter(v => v[0].startsWith("PM_")))

fs.writeFileSync(path.resolve(__dirname, '../../msg/json/pm/en.json'), JSON.stringify(Blockly.Msg, null, 4), 'utf8')
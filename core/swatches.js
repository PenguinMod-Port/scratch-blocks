goog.provide('Blockly.Swatches');
goog.require('Blockly.Xml')

Blockly.Swatches.swatchList = [
    // motion
    [
        {
            opcode: "motion_gotoxy",
            remapInputs: {X: ["DX"], Y: ["DY"]}
        },
        {
            opcode: "motion_changebyxy",
            remapInputs: {DX: ["X"], DY: ["Y"]}
        }
    ],

    // control
    [
        {
            opcode: "control_wait",
            fillIn: {DURATION: '<shadow type="math_number"><field name="NUM">1</field></shadow>'}
        },
        {
            opcode: "control_waitsecondsoruntil",
            fillIn: {DURATION: '<shadow type="math_number"><field name="NUM">1</field></shadow>', CONDITION:'<shadow type="checkbox" />'}
        },
        {
            opcode: "control_wait_until",
            fillIn: {CONDITION: '<shadow type="checkbox" />'}
        }
    ],
    [
        {
            opcode: "control_forever"
        },
        {
            opcode: "control_while",
            fillIn: {CONDITION: '<shadow type="checkbox" />'}
        },
        {
            opcode: "control_do_while",
            fillIn: {CONDITION: '<shadow type="checkbox" />'}
        }
    ]
]

Blockly.Swatches.getSwatches = function(blockId) {
    return Blockly.Swatches.swatchList.filter(v => v.find(v => v.opcode == blockId)).flat();
}

Blockly.Swatches.applySwatch = function(block, swatch) {
    let workspace = block.workspace;

    let pos = block.getRelativeToSurfaceXY();

    let previousConnection = block.previousConnection && block.previousConnection.targetConnection;
    if (previousConnection) previousConnection.disconnect();

    let nextConnection = block.nextConnection && block.nextConnection.targetConnection;
    if (nextConnection) nextConnection.disconnect();

    let inputs = {};
    for (let i = 0; i < block.inputList.length; i++) {
        let input = block.inputList[i];
        let connection = input.connection && input.connection.targetConnection;
        if (connection) {
            let name = input.name;

            // remap inputs
            if (swatch.remapInputs) {
                for (let [remappedName, names] of Object.entries(swatch.remapInputs)) {
                    if (names.includes(name)) {
                        name = remappedName;
                        break;
                    }
                }
            }

            inputs[name] = connection;
            connection.disconnect();
        }
    }

    block.dispose();

    let newBlock = workspace.newBlock(swatch.opcode);

    for (let [name, connection] of Object.entries(inputs)) {
        let input = newBlock.getInput(name);
        if (input) {
            input.connection.connect(connection);
            connection.sourceBlock_.render();
        } else if (connection.sourceBlock_.isShadow()) {
            connection.sourceBlock_.dispose();
        }
    }

    // fillIn
    for (let [inputName, v] of Object.entries(swatch.fillIn || {})) {
        let input = newBlock.getInput(inputName);
        if (input && !input.connection.targetConnection) {
            let fillInBlock = Blockly.Xml.domToBlock(Blockly.Xml.textToDom(`<xml>${v}</xml>`).firstChild, workspace);
            input.connection.connect(fillInBlock.outputConnection ?? fillInBlock.previousConnection);
            fillInBlock.initSvg();
            fillInBlock.render();
        }
    }

    if (previousConnection && newBlock.previousConnection) {
        previousConnection.connect(newBlock.previousConnection);
    }

    if (nextConnection && newBlock.nextConnection) {
        nextConnection.connect(newBlock.nextConnection);
    }

    newBlock.moveBy(pos.x, pos.y);

    newBlock.initSvg();
    newBlock.render(true);
}
goog.provide('Blockly.Swatches');
goog.require('Blockly.Xml')

Blockly.Swatches.swatchList = [
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
            inputs[input.name] = connection;
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
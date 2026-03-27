goog.provide('Blockly.Swatches');

Blockly.Swatches.swatchList = [
    [
        {
            opcode: "control_while"
        },
        {
            opcode: "control_do_while"
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

    for (let i = 0; i < newBlock.inputList.length; i++) {
        let input = newBlock.inputList[i];
        let connection = input && inputs[input.name];
        if (connection) {
            input.connection.connect(connection);
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
goog.provide('Blockly.Swatches');
goog.require('Blockly.Xml')

Blockly.Swatches.swatchList = [
    // motion
    [
        {
            opcode: "motion_turnleft"
        },
        {
            opcode: "motion_turnright"
        }
    ],
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
    [
        {
            opcode: "motion_changexby",
            remapInputs: {DX: ["X", "DY", "Y"]}
        },
        {
            opcode: "motion_setx",
            remapInputs: {X: ["DX", "DY", "Y"]}
        },
        {
            opcode: "motion_changeyby",
            remapInputs: {DY: ["DX", "X", "Y"]}
        },
        {
            opcode: "motion_sety",
            remapInputs: {Y: ["DX", "X", "DY"]}
        }
    ],

    // event
    [
        {
            opcode: "event_whenflagclicked"
        },
        {
            opcode: "event_whenstopclicked"
        }
    ],
    [
        {
            opcode: "event_always"
        },
        {
            opcode: "event_whenanything",
            fillIn: {ANYTHING: '<shadow type="checkbox" />'}
        }
    ],
    [
        {
            opcode: "event_whenkeypressed"
        },
        {
            opcode: "event_whenkeyhit"
        }
    ],
    [
        {
            opcode: "event_broadcast"
        },
        {
            opcode: "event_broadcastandwait"
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
            fillIn: {
                DURATION: '<shadow type="math_number"><field name="NUM">1</field></shadow>',
                CONDITION:'<shadow type="checkbox" />'
            }
        },
        {
            opcode: "control_wait_until",
            fillIn: {CONDITION: '<shadow type="checkbox" />'}
        }
    ],
    [
        {
            opcode: "control_repeat",
            fillIn: {TIMES: '<shadow type="math_whole_number"><field name="NUM">10</field></shadow>'},
            remapInputs: {TIMES: ["TO"]}
        },
        {
            opcode: "control_from_to",
            fillIn: {
                SHADOW: '<shadow type="control_from_to_index" />',
                FROM: '<shadow type="math_integer"><field name="NUM">1</field></shadow>',
                TO: '<shadow type="math_integer"><field name="NUM">10</field></shadow>'
            },
            remapInputs: {
                TO: ["TIMES"]
            }
        },
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
    ],
    [
        {
            opcode: "control_exitLoop"
        },
        {
            opcode: "control_continueLoop"
        }
    ],
    [
        {
            opcode: "control_switch"
        },
        {
            opcode: "control_switch_default"
        }
    ],
    [
        {
            opcode: "control_incr_counter"
        },
        {
            opcode: "control_decr_counter"
        },
        {
            opcode: "control_set_counter",
            fillIn: {VALUE: '<shadow type="math_integer"><field name="NUM">0</field></shadow>'}
        },
        {
            opcode: "control_clear_counter"
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
            input.connection.connect(fillInBlock.outputConnection || fillInBlock.previousConnection);
            fillInBlock.initSvg();
            fillInBlock.render();
        } else if (input && input.connection.targetBlock().type.startsWith("math_")) {
            let value = input.connection.targetBlock().getFieldValue("NUM");
            let fillInBlock = Blockly.Xml.domToBlock(Blockly.Xml.textToDom(`<xml>${v}</xml>`).firstChild, workspace);
            input.connection.connect(fillInBlock.outputConnection || fillInBlock.previousConnection);
            fillInBlock.setFieldValue(value, "NUM");
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
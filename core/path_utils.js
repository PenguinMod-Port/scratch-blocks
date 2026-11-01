goog.provide('Blockly.pathUtils');

Blockly.pathUtils.supportedCommands = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };
Blockly.pathUtils.commandXpos = { m: [1], l: [1], h: [1], v: [], c: [1, 3, 5], s: [1, 3], q: [1, 3], t: [1], a: [], z: [] };
Blockly.pathUtils.commandYpos = { m: [2], l: [2], h: [], v: [1], c: [2, 4, 6], s: [2, 4], q: [2, 4], t: [2], a: [], z: [] };

/**
 * @typedef {[string, ...number[]]} PathTokens
 */

/**
 * @param {string} path 
 * @returns {PathTokens}
 */
Blockly.pathUtils.tokenize = function (path) {
    const match = path.match(/[A-z]|-?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
    const output = [];
    for (const v of match) {
        if (isNaN(v)) { // letter
            output.push([v]);
        } else {
            output[output.length - 1].push(Number(v));
        }
    }
    return output;
}

/**
 * @param {PathTokens} tokens
 * @returns {string}
 */
Blockly.pathUtils.detokenize = function (tokens) {
    return tokens.map(token => token.join(" ")).join(" ");
}

/**
 * @param {string} path 
 * @param {number} x 
 * @param {number} y 
 * @returns {string}
 */
Blockly.pathUtils.scale = function (path, x, y) {
    const tokens = Blockly.pathUtils.tokenize(path);

    for (const token of tokens) {
        const cmd = token[0].toLowerCase();

        if (cmd === "a") { // arcs are special
            token[1] *= x;
            token[2] *= y;

            token[6] *= x;
            token[7] *= y;

            token[5] ^= (Math.sign(x) < 0) ^ (Math.sign(y) < 0); // sweep

            // i really really do not want to implement x-axis-rotation

            continue;
        }

        for (const xIndex of Blockly.pathUtils.commandXpos[cmd]) {
            token[xIndex] *= x;
        }
        for (const yIndex of Blockly.pathUtils.commandYpos[cmd]) {
            token[yIndex] *= y;
        }
    }

    return Blockly.pathUtils.detokenize(tokens);
}

/**
 * @param {string} path 
 * @param {number} x 
 * @param {number} y 
 * @returns {string}
 */
Blockly.pathUtils.translate = function (path, x, y) {
    const tokens = Blockly.pathUtils.tokenize(path);

    for (const token of tokens) {
        const cmd = token[0].toLowerCase();
        if (token[0] === cmd) continue;

        if (cmd === "a") { // arcs are special
            token[6] += x;
            token[7] += y;

            continue;
        }

        for (const xIndex of Blockly.pathUtils.commandXpos[cmd]) {
            token[xIndex] += x;
        }
        for (const yIndex of Blockly.pathUtils.commandYpos[cmd]) {
            token[yIndex] += y;
        }
    }

    return Blockly.pathUtils.detokenize(tokens);
}
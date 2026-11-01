goog.provide('Blockly.pathUtils');

Blockly.pathUtils.supportedCommands = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 };
Blockly.pathUtils.commandXpos = { m: [1], l: [1], h: [1], v: [], c: [1, 3, 5], s: [1, 3], q: [1, 3], t: [1], a: [1, 6] };
Blockly.pathUtils.commandYpos = { m: [2], l: [2], h: [], v: [1], c: [2, 4, 6], s: [2, 4], q: [2, 4], t: [2], a: [2, 7] };

/**
 * @typedef {[string, ...number[]]} PathTokens
 */

/**
 * @param {string} path 
 * @returns {PathTokens}
 */
Blockly.pathUtils.tokenize = function (path) {
    const match = path.match(/[a-z]|-?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
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

        for (const xIndex of Blockly.pathUtils.commandXpos[cmd]) {
            token[xIndex] *= x;
        }
        for (const yIndex of Blockly.pathUtils.commandYpos[cmd]) {
            token[yIndex] *= y;
        }

        if (cmd === "a") { // special
            token[5] ^= (Math.sign(x) < 0) ^ (Math.sign(y) < 0); // sweep

            // i really really do not want to implement x-axis-rotation
        }
    }

    return Blockly.pathUtils.detokenize(tokens);
}

// mostly just used this for dual input stuff because evil
/**
 * @param {string} path
 * @returns {{dx: number, dy: number, minY: number, maxY: number}}
 */
Blockly.pathUtils.measure = function (path) {
    let x = 0, y = 0, minY = 0, maxY = 0;
    for (const token of Blockly.pathUtils.tokenize(path)) {
        switch (token[0]) {
            case "h": x += token[1]; break;
            case "v": y += token[1]; break;
            case "m": case "l": case "t": x += token[1]; y += token[2]; break;
            case "q": case "s": x += token[3]; y += token[4]; break;
            case "c": x += token[5]; y += token[6]; break;
            case "a": x += token[6]; y += token[7]; break;
        }
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }
    return { dx: x, dy: y, minY: minY, maxY: maxY };
};

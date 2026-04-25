/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.operators');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['operator_add'] = {
  /**
   * Block for adding two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_ADD,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_subtract'] = {
  /**
   * Block for subtracting two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_SUBTRACT,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_multiply'] = {
  /**
   * Block for multiplying two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_MULTIPLY,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_divide'] = {
  /**
   * Block for dividing two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_DIVIDE,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_random'] = {
  /**
   * Block for picking a random number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_RANDOM,
      "args0": [
        {
          "type": "input_value",
          "name": "FROM"
        },
        {
          "type": "input_value",
          "name": "TO"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_lt'] = {
  /**
   * Block for less than comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_LT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_equals'] = {
  /**
   * Block for equals comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_EQUALS,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_gt'] = {
  /**
   * Block for greater than comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_GT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_and'] = {
  /**
   * Block for "and" boolean comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_AND,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_or'] = {
  /**
   * Block for "or" boolean comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_OR,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_not'] = {
  /**
   * Block for "not" unary boolean operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_NOT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_join'] = {
  /**
   * Block for string join operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_JOIN,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_letter_of'] = {
  /**
   * Block for "letter _ of _" operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_LETTEROF,
      "args0": [
        {
          "type": "input_value",
          "name": "LETTER"
        },
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_length'] = {
  /**
   * Block for string length operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_LENGTH,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_contains'] = {
  /**
   * Block for _ contains _ operator
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_CONTAINS,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_mod'] = {
  /**
   * Block for mod two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_MOD,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_round'] = {
  /**
   * Block for rounding a numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_ROUND,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks['operator_mathop'] = {
  /**
   * Block for "advanced" math ops on a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_MATHOP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OPERATOR",
          "options": [
            [Blockly.Msg.OPERATORS_MATHOP_ABS, 'abs'],
            [Blockly.Msg.OPERATORS_MATHOP_FLOOR, 'floor'],
            [Blockly.Msg.OPERATORS_MATHOP_CEILING, 'ceiling'],
            [Blockly.Msg.PM_OPERATORS_MATHOP_SIGN, 'sign'],
            [Blockly.Msg.OPERATORS_MATHOP_SQRT, 'sqrt'],
            [Blockly.Msg.OPERATORS_MATHOP_SIN, 'sin'],
            [Blockly.Msg.OPERATORS_MATHOP_COS, 'cos'],
            [Blockly.Msg.OPERATORS_MATHOP_TAN, 'tan'],
            [Blockly.Msg.OPERATORS_MATHOP_ASIN, 'asin'],
            [Blockly.Msg.OPERATORS_MATHOP_ACOS, 'acos'],
            [Blockly.Msg.OPERATORS_MATHOP_ATAN, 'atan'],
            [Blockly.Msg.OPERATORS_MATHOP_LN, 'ln'],
            [Blockly.Msg.OPERATORS_MATHOP_LOG, 'log'],
            [Blockly.Msg.PM_OPERATORS_MATHOP_LOG2, 'log2'],
            [Blockly.Msg.OPERATORS_MATHOP_EEXP, 'e ^'],
            [Blockly.Msg.OPERATORS_MATHOP_10EXP, '10 ^']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};


Blockly.Blocks["operator_stringify"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "message0": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "ONE"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks["operator_boolify"] = {
  init: function () {
    this.jsonInit({
      "inputsInline": true,
      "message0": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "ONE"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_checkboxBoolean'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "CHECKBOX"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_nand'] = {
  /**
   * pm: Block for "nand" boolean comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_NAND,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_nor'] = {
  /**
   * pm: Block for "nor" boolean comparator.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_NOR,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_xor'] = {
  /**
   * pm: Block for "xor" boolean comparator.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_XOR,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_xnor'] = {
  /**
   * pm: Block for "nor" boolean comparator.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_XNOR,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks["operator_trueBoolean"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "message0": "true",
      "args0": [],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks["operator_falseBoolean"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "message0": "false",
      "args0": [],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_valid_type'] = {
  /**
   * Block for "advanced" math ops on a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_VALID_TYPE,
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            [Blockly.Msg.PM_OPERATORS_TYPE_NUMBER, 'number'],
            [Blockly.Msg.PM_OPERATORS_TYPE_BOOLEAN, 'boolean'],
            [Blockly.Msg.PM_OPERATORS_TYPE_STRING, 'string']
          ]
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_power'] = {
  /**
   * pm: Block for getting a ^ b.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_POWER,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

Blockly.Blocks["operator_constrainnumber"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "message0": Blockly.Msg.PM_OPERATORS_CONSTRAIN,
      "args0": [
        {
          "type": "input_value",
          "name": "inp"
        },
        {
          "type": "input_value",
          "name": "min"
        },
        {
          "type": "input_value",
          "name": "max"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks["operator_lerpFunc"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "message0": Blockly.Msg.PM_OPERATORS_INTERPOLATE,
      "args0": [
        {
          "type": "input_value",
          "name": "ONE"
        },
        {
          "type": "input_value",
          "name": "TWO"
        },
        {
          "type": "input_value",
          "name": "AMOUNT"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_join3'] = {
  /**
   * pm: Block for joining 3 strings together.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_JOIN3,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        },
        {
          "type": "input_value",
          "name": "STRING3"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_gtorequal'] = {
  /**
   * pm: Block for greater than or equal comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_GTE,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_ltorequal'] = {
  /**
   * pm: Block for less than or equal comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_LTE,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_notequal'] = {
  /**
   * pm: Block for not equal comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_NOTEQUAL,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  }
};

Blockly.Blocks['operator_null'] = {
  /**
   * pm: Block for null value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_NULL,
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks["operator_newLine"] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_CHAR_NEWLINE,
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks["operator_tabCharacter"] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_CHAR_TAB,
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_expandablejoininputs'] = {
  /**
   * pm: Block for joining n number of strings together
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_JOINE,
      "args0": [
        {
          "type": "field_expandable",
          "name": "EXPANDABLE",
          "value": 2
        },
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });

    this.possibleStrings = [
      Blockly.Msg.OPERATORS_JOIN_APPLE,
      Blockly.Msg.OPERATORS_JOIN_BANANA,
      Blockly.Msg.PM_OPERATORS_JOIN_PEAR
    ];
  },

  expandableCallback(field, oldValue, newValue, createShadows) {
    if (oldValue < newValue) {
      for (let i = oldValue; i < newValue; i++) {
        let input = this.appendValueInput('INPUT' + (i + 1));
        input.setAlign(Blockly.ALIGN_RIGHT);
        
        if (createShadows) {
          let shadow = this.workspace.newBlock('text');
          shadow.setShadow(true);
          shadow.setFieldValue(this.possibleStrings[i] || "...", 'TEXT');
          shadow.initSvg();
          shadow.render();
          shadow.outputConnection.connect(input.connection);
        }
      }
    } else {
      for (let i = newValue; i < oldValue; i++) {
        this.removeInput('INPUT' + (i + 1));
      }
    }

    this.initSvg();
    if (this.rendered) this.render();
  }
};

Blockly.Blocks['operator_range_expandable'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_RANGE_EXPANDABLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "RANGE",
          "options": [
            [Blockly.Msg.PM_OPERATORS_MAXIMUM, 'maximum'],
            [Blockly.Msg.PM_OPERATORS_AVERAGE, 'average'],
            [Blockly.Msg.PM_OPERATORS_MINIMUM, 'minimum'],
            [Blockly.Msg.PM_OPERATORS_RANGE, 'range']
          ]
        },
        {
          "type": "field_expandable",
          "name": "EXPANDABLE",
          "value": 2
        },
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  },

  expandableCallback(field, oldValue, newValue, createShadows) {
    if (oldValue < newValue) {
      for (let i = oldValue; i < newValue; i++) {
        let input = this.appendValueInput('INPUT' + (i + 1));

        if (createShadows) {
          let shadow = this.workspace.newBlock('math_number');
          shadow.setShadow(true);
          shadow.setFieldValue(i + 1, 'NUM');
          shadow.initSvg();
          shadow.render();
          shadow.outputConnection.connect(input.connection);
        }
      }
    } else {
      for (let i = newValue; i < oldValue; i++) {
        this.removeInput('INPUT' + (i + 1));
      }
    }

    this.initSvg();
    if (this.rendered) this.render();
  }
};

Blockly.Blocks['operator_expandableMath'] = {
  /**
   * pm: Block for performing multiple math operations (determined by user)
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": '%1',
      "args0": [
        {
          "type": "field_expandable",
          "name": "EXPANDABLE",
          "value": 2
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_number"]
    });
  },

  expandableCallback(field, oldValue, newValue, createShadows) {
    if (oldValue < newValue) {
      for (let i = oldValue; i < newValue; i++) {
        let input = this.appendValueInput('NUM' + (i + 1));

        if (createShadows) {
          let shadow = this.workspace.newBlock('math_number');
          shadow.setShadow(true);
          shadow.setFieldValue(i + 1, 'NUM');
          shadow.initSvg();
          shadow.render();
          shadow.outputConnection.connect(input.connection);
        }

        if (i > 0) {
          input.appendField(new Blockly.FieldDropdown([
            ["+", "+"],
            ["-", "-"],
            ["*", "*"],
            ["/", "/"],
            ["^", "^"]
          ]), 'OP' + (i + 1));
          Blockly.Events.fire(new Blockly.Events.BlockChange(this, 'field', 'OP' + (i + 1), "-", "+")); // tell vm it updated
        }
      }
    } else {
      for (let i = newValue; i < oldValue; i++) {
        this.removeInput('NUM' + (i + 1));
      }
    }

    this.initSvg();
    if (this.rendered) this.render();
  }
};

Blockly.Blocks["operator_toUpperLowerCase"] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_OPERATORS_CASE_TO,
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "field_dropdown",
          "name": "OPTION",
          "options": [
            [Blockly.Msg.PM_OPERATORS_CASE_UPPER, "upper"],
            [Blockly.Msg.PM_OPERATORS_CASE_LOWER, "lower"]
          ]
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_string"]
    });
  }
};

Blockly.Blocks['operator_expandableBool'] = {
  /**
   * pm: Block for performing multiple truth operations (determined by user)
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": '%1',
      "args0": [
        {
          "type": "field_expandable",
          "name": "EXPANDABLE",
          "value": 2
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  },

  expandableCallback(field, oldValue, newValue, createShadows) {
    if (oldValue < newValue) {
      for (let i = oldValue; i < newValue; i++) {
        let input = this.appendValueInput('BOOL' + (i + 1));
        input.setCheck('Boolean');

        if (createShadows) {
          let shadow = this.workspace.newBlock('checkbox');
          shadow.setShadow(true);
          shadow.initSvg();
          shadow.render();
          shadow.outputConnection.connect(input.connection);
        }

        if (i > 0) {
          input.appendField(new Blockly.FieldDropdown([
            [Blockly.Msg.PM_OPERATORS_EXPANDABLEBOOL_AND, "a"],
            [Blockly.Msg.PM_OPERATORS_EXPANDABLEBOOL_OR, "o"],
            [Blockly.Msg.PM_OPERATORS_EXPANDABLEBOOL_XOR, "x"],
            [Blockly.Msg.PM_OPERATORS_EXPANDABLEBOOL_NAND, "n"],
            [Blockly.Msg.PM_OPERATORS_EXPANDABLEBOOL_NOR, "N"],
            [Blockly.Msg.PM_OPERATORS_EXPANDABLEBOOL_XNOR, "X"]
          ]), 'OP' + (i + 1));
          Blockly.Events.fire(new Blockly.Events.BlockChange(this, 'field', 'OP' + (i + 1), "o", "a")); // tell vm it updated
        }
      }
    } else {
      for (let i = newValue; i < oldValue; i++) {
        this.removeInput('BOOL' + (i + 1));
      }
    }

    this.initSvg();
    if (this.rendered) this.render();
  }
};

Blockly.Blocks['operator_expandableCompare'] = {
  /**
   * pm: Block for performing multiple truth operations (determined by user)
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": '%1',
      "args0": [
        {
          "type": "field_expandable",
          "name": "EXPANDABLE",
          "value": 2
        }
      ],
      "category": Blockly.Categories.operators,
      "extensions": ["colours_operators", "output_boolean"]
    });
  },

  expandableCallback(field, oldValue, newValue, createShadows) {
    if (oldValue < newValue) {
      for (let i = oldValue; i < newValue; i++) {
        let input = this.appendValueInput('INPUT' + (i + 1));

        if (createShadows) {
          let shadow = this.workspace.newBlock('text');
          shadow.setShadow(true);
          shadow.initSvg();
          shadow.render();
          shadow.outputConnection.connect(input.connection);
        }

        if (i > 0) {
          input.appendField(new Blockly.FieldDropdown([
            ["=", "e"],
            ["≠", "n"],
            [">", "m"],
            ["≥", "M"],
            ["<", "l"],
            ["≤", "L"]
          ]), 'OP' + (i + 1));
          Blockly.Events.fire(new Blockly.Events.BlockChange(this, 'field', 'OP' + (i + 1), "n", "e")); // tell vm it updated
        }
      }
    } else {
      for (let i = newValue; i < oldValue; i++) {
        this.removeInput('INPUT' + (i + 1));
      }
    }

    this.initSvg();
    if (this.rendered) this.render();
  }
};
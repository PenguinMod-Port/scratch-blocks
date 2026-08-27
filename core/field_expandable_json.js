'use strict';

goog.provide('Blockly.FieldExpandableJSON');

goog.require('Blockly.FieldExpandable');
goog.require('Blockly.BlockSvg');
goog.require('Blockly.BlockSvg.render');

/**
 * Class for a button field.
 * @param {object} state Unused.
 * @param {Function=} opt_validator A function that is executed.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldExpandableJSON = function(value, sep, json = [], opt_min = 1, opt_max = Infinity) {
  this.size_ = new goog.math.Size(
    Blockly.BlockSvg.FIELD_WIDTH,
    Blockly.BlockSvg.FIELD_HEIGHT);
  this.setText('0');
  this.showWhenCollapsed_ = false;

  this.arrowWidth_ = 0;
  this.addArgType('button');
  this.min = opt_min;
  this.max = opt_max;

  this.json_ = json;
  this.sep_ = sep;
  this.tempValue_ = value;
};
goog.inherits(Blockly.FieldExpandableJSON, Blockly.FieldExpandable);

/**
 * Construct a FieldExpandable from a JSON arg object.
 * @param {!Object} options A JSON object with options.
 * @returns {!Blockly.FieldExpandableJSON} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldExpandableJSON.fromJson = function(options) {
  return new Blockly.FieldExpandableJSON(options['value'], options['sep'], options['args'], options['min'], options['max']);
};

Blockly.FieldExpandableJSON.prototype.setValue = function(value, firstRun = false) {
  if (value == null) {
    return;
  }

  let oldValue = Number(this.getValue());
  let newValue = Math.max(Math.min(this.max, value), this.min);
  if (oldValue == newValue) {
    return;
  }

  Blockly.Events.setGroup(true);

  Blockly.Field.prototype.setValue.call(this, newValue);

  if (this.sourceBlock_ && this.json_.length > 0) {
    // expandable callback
    let createShadows = !firstRun;

    let parentInput;
    for (let input of this.sourceBlock_.inputList) {
      if (input.fieldRow.includes(this)) {
        parentInput = input;
        break;
      }
    }

    if (oldValue < newValue) {
      let previousInput;
      for (let i = oldValue; i < newValue; i++) {
        let nameIndex = i + 1;
        let inputs = this.sourceBlock_.interpolateElements_(((nameIndex > 1 && this.sep_) ? [{type: 'field_label', text: this.sep_}, ...this.json_] : this.json_).map(v => {
          if (typeof v !== "object") return v;
          let newV = {...v};
          if (v.name) newV.name = `${this.name}.${nameIndex}.${v.name}`;
          return newV;
        }), null, createShadows);
        let previousInput = (nameIndex - 1) == 0 ? parentInput : this.sourceBlock_.getInput(`${this.name}.${nameIndex-1}.${inputs[inputs.length-1].name.split(".").pop()}`);
        inputs.forEach(input => {
          this.sourceBlock_.moveInputAfter(input, previousInput);
          previousInput = input;
        })
      }
    } else {
      for (let i = newValue; i < oldValue; i++) {
        let nameIndex = i + 1;
        for (let input of Object.values(this.sourceBlock_.inputList)) {
          if (input.name.startsWith(`${this.name}.${nameIndex}.`)) {
            this.sourceBlock_.removeInput(input.name);
          }
        }
      }
    }

    this.sourceBlock_.initSvg();
    if (this.sourceBlock_.rendered) this.sourceBlock_.render();
  }

  Blockly.Events.setGroup(false);
};

Blockly.Field.register('field_expandable_json', Blockly.FieldExpandableJSON);

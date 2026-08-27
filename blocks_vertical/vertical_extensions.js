/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
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

/**
 * @fileoverview Extensions for vertical blocks in scratch-blocks.
 * The following extensions can be used to describe a block in Scratch terms.
 * For instance, a block in the operators colour scheme with a number output
 * would have the "colours_operators" and "output_number" extensions.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.ScratchBlocks.VerticalExtensions');

goog.require('Blockly.Colours');
goog.require('Blockly.constants');


/**
 * Helper function that generates an extension based on a category name.
 * The generated function will set primary, secondary, tertiary, and quaternary
 * colours based on the category name.
 * @param {String} category The name of the category to set colours for.
 * @return {function} An extension function that sets colours based on the given
 *     category.
 */
Blockly.ScratchBlocks.VerticalExtensions.colourHelper = function(category) {
  return function() {
    this.setColourFromRawValues_(Blockly.Colours[category]);
  };
};

/**
 * Extension to set the colours of a text field, which are all the same.
 */
Blockly.ScratchBlocks.VerticalExtensions.COLOUR_TEXTFIELD = function() {
  this.setColourFromRawValues_(Blockly.Colours.textField);
  this.setShadowColour(Blockly.Colours.textField);
  this.setTextColour(Blockly.Colours.textFieldText);
};

/**
 * Extension to make a block fit into a stack of statements, regardless of its
 * inputs.  That means the block should have a previous connection and a next
 * connection and have inline inputs.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.SHAPE_STATEMENT = function() {
  this.setPreviousStatement(true, "normal");
  this.setNextStatement(true, "normal");
};

Blockly.ScratchBlocks.VerticalExtensions.SHAPE_CASE = function() {
  this.setPreviousStatement(true, "switchCase");
  this.setNextStatement(true, "switchCase");
};

/**
 * Extension to make a block be shaped as a hat block, regardless of its
 * inputs.  That means the block should have a next connection and have inline
 * inputs, but have no previous connection.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.SHAPE_HAT = function() {
  this.setNextStatement(true, "normal");
};

/**
 * Extension to make a block be shaped as an end block, regardless of its
 * inputs.  That means the block should have a previous connection and have
 * inline inputs, but have no next connection.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.SHAPE_END = function() {
  this.setPreviousStatement(true, "normal");
};

/**
 * Extension to make represent a number reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Number'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_NUMBER = function() {
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true, 'Number');
};

/**
 * Extension to make represent a string reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'String'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_STRING = function() {
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true, 'String');
};

/**
 * Extension to make represent a boolean reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Boolean'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_BOOLEAN = function() {
  this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
  this.setOutput(true, 'Boolean');
};


Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_ANY = function() {
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true);
};

Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_RETURNS = function () {
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true);
  this.setOnChange(function() {
    let returnType = Blockly.Procedures.getBlockReturnType(this, true);
    this.setOutput(true, returnType[0]);
    this.setOutputShape(returnType[1]);
  });
};

Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_INPUTS = function () {
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true);
  this.setOnChange(function() {
    let returnTypes = new Set();
    let returnShapes = new Set();
    for (let input of this.inputList.filter(v =>
      v.type == Blockly.INPUT_VALUE &&
      v.connection.check_ === null &&
      v.connection.targetConnection
    )) {
      let reporter = input.connection.targetConnection.getSourceBlock();
      if (reporter.outputConnection.check_ == null) returnTypes.add(null);
      else reporter.outputConnection.check_.forEach(v => returnTypes.add(v));
      returnShapes.add(reporter.getOutputShape());
    }
    
    returnTypes = Array.from(returnTypes)
    returnTypes = returnTypes.includes(null) ? null : (returnTypes.length > 0 ? returnTypes : null)

    returnShapes = Array.from(returnShapes)
    returnShapes = returnShapes.length === 1 ? returnShapes[0] : Blockly.OUTPUT_SHAPE_ROUND

    this.setOutput(true, returnTypes);
    this.setOutputShape(returnShapes);
  });
};

/**
 * Mixin to add a context menu for a procedure definition block.
 * It adds the "edit" option and removes the "duplicate" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_DEF_CONTEXTMENU = {
  /**
   * Add the "edit" option and removes the "duplicate" option from the context
   * menu.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    // Add the edit option at the end.
    menuOptions.push(Blockly.Procedures.makeEditOption(this));

    // Find the delete option and update its callback to be specific to
    // functions.
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DELETE_BLOCK) {
        var input = this.getInput('custom_block');
        // this is the root block, not the shadow block.
        if (input && input.connection && input.connection.targetBlock()) {
          var procCode = input.connection.targetBlock().getProcCode();
        } else {
          return;
        }
        var rootBlock = this;
        option.callback = function() {
          var didDelete = Blockly.Procedures.deleteProcedureDefCallback(
              procCode, rootBlock);
          if (!didDelete) {
            alert(Blockly.Msg.PROCEDURE_USED);
          }
        };
      }
    }
    // Find and remove the duplicate option
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DUPLICATE) {
        menuOptions.splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Mixin to add a context menu for a procedure call block.
 * It adds the "edit" option and the "define" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_CALL_CONTEXTMENU = {
  /**
   * Add the "edit" option to the context menu.
   * @todo Add "go to definition" option once implemented.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    menuOptions.push(Blockly.Procedures.makeEditOption(this));
    if (
      !this.isInFlyout &&
      Blockly.Procedures.USER_CAN_CHANGE_CALL_TYPE &&
      this.workspace.procedureReturnsEnabled
    ) {
      menuOptions.push(Blockly.Procedures.makeChangeTypeOption(this));
    }
  }
};

Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_CUSTOM_COLOR = function() {
  if (!Blockly.Procedures.COLOR_EXTENSION_ENABLED) return;
  if (this.isInsertionMarker()) return;

  const isProcedureBlock = (block) => {
    const type = block.type;
    return (
      (type.startsWith("procedures_") && type !== "procedures_call") ||
      type.startsWith("argument_reporter_")
    );
  };

  const resetColor = (block) => {
    Blockly.Extensions.apply("colours_more", block);

    // Fix inner shadow blocks not reseting their color
    for (const child of block.childBlocks_) {
      if (child.isShadow()) {
        Blockly.Extensions.apply("colours_textfield", child);
      } else if (isProcedureBlock(child)) {
        resetColor(child);
      }
    }
  };

  const setColor = (block, target, ignoreChildren) => {
    if (Blockly.Extensions.ALL_[`colours_${target.procColour_}`]) {
      Blockly.Extensions.apply(`colours_${target.procColour_}`, block);
    } else if (target.procColour_ !== null) {
      block.setColour(target.procColour_);
    }

    // Fix inner shadow blocks using the default color
    for (const child of block.childBlocks_) {
      if (
        child.isShadow() &&
        (child.type === "procedures_prototype" ? true : !isProcedureBlock(child))
      ) {
        child.setColour(
          child.colour_,
          child.colourSecondary_,
          target.colour_,
        );
      } else if (!ignoreChildren) {
        // Shallow change the color to children
        updateInProcedureStack(child);
      }
    }
  };

  const updateInProcedureStack = (block) => {
    const type = block.type;

    if (type === "procedures_definition") {
      const proto = block.getInput("custom_block").connection.targetBlock();
      if (proto) setColor(block, proto, block._updateStackColorTick ? false : true);
      delete block._updateStackColorTick;
    } else if (isProcedureBlock(block)) {
      let topBlock = block;
      while (topBlock !== null) {
        const parent = topBlock.getParent();
        if (parent === null) break;
        if (type === "procedures_return" && topBlock.outputShape_ !== null) {
          // This return block is part of some inline-reporter... abort!
          resetColor(block);
          return;
        }

        topBlock = parent;
      }

      if (topBlock && topBlock.type === "procedures_definition") {
        const proto = topBlock.getInput("custom_block").connection.targetBlock();
        if (proto) setColor(block, proto);
      } else {
        resetColor(block);
      }
    }
  };

  var onDropChain = this._onDrop;
  this._onDrop = () => {
    if (onDropChain) onDropChain.call(this);
    queueMicrotask(() => updateInProcedureStack(this));
  }
  queueMicrotask(() => updateInProcedureStack(this));
};

Blockly.ScratchBlocks.VerticalExtensions.FROM_EXTENSION = function() {
  this.isFromExtension = true;
};

Blockly.ScratchBlocks.VerticalExtensions.DEFAULT_EXTENSION_COLORS = function() {
  this.usesDefaultExtensionColors = true;
};

Blockly.ScratchBlocks.VerticalExtensions.SCRATCH_EXTENSION = function() {
  this.isScratchExtension = true;
};

/**
 * Register all extensions for scratch-blocks.
 * @package
 */
Blockly.ScratchBlocks.VerticalExtensions.registerAll = function() {
  var categoryNames =
      ['control', 'data', 'data_lists', 'sounds', 'motion', 'looks', 'event',
        'sensing', 'pen', 'operators', 'more'];
  // Register functions for all category colours.
  for (var i = 0; i < categoryNames.length; i++) {
    var name = categoryNames[i];
    Blockly.Extensions.register('colours_' + name,
        Blockly.ScratchBlocks.VerticalExtensions.colourHelper(name));
  }

  // Text fields transcend categories.
  Blockly.Extensions.register('colours_textfield',
      Blockly.ScratchBlocks.VerticalExtensions.COLOUR_TEXTFIELD);

  // Register extensions for common block shapes.
  Blockly.Extensions.register('shape_statement',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_STATEMENT);
  Blockly.Extensions.register('shape_case',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_CASE);
  Blockly.Extensions.register('shape_hat',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_HAT);
  Blockly.Extensions.register('shape_end',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_END);

  // Output shapes and types are related.
  Blockly.Extensions.register('output_number',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_NUMBER);
  Blockly.Extensions.register('output_string',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_STRING);
  Blockly.Extensions.register('output_boolean',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_BOOLEAN);
  Blockly.Extensions.register('output_any',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_ANY);
  Blockly.Extensions.register('output_returns',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_RETURNS);
  Blockly.Extensions.register('output_inputs',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_INPUTS);

  // Custom procedures have interesting context menus.
  Blockly.Extensions.registerMixin('procedure_def_contextmenu',
      Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_DEF_CONTEXTMENU);
  Blockly.Extensions.registerMixin('procedure_call_contextmenu',
      Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_CALL_CONTEXTMENU);

  // Given to procedure blocks to follow their custom colors.
  Blockly.Extensions.register('procedure_custom_color',
      Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_CUSTOM_COLOR);
  
  // Given to all blocks from an extension.
  Blockly.Extensions.register('from_extension',
      Blockly.ScratchBlocks.VerticalExtensions.FROM_EXTENSION);

  // Given to blocks that use the default extension colors ("pen")
  Blockly.Extensions.register('default_extension_colors',
      Blockly.ScratchBlocks.VerticalExtensions.DEFAULT_EXTENSION_COLORS);

  // Misleading name. Given to blocks that have an extension icon.
  Blockly.Extensions.register('scratch_extension',
      Blockly.ScratchBlocks.VerticalExtensions.SCRATCH_EXTENSION);
};

Blockly.ScratchBlocks.VerticalExtensions.registerAll();

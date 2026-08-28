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

/**
 * @fileoverview Procedure blocks for Scratch.
 */
'use strict';

goog.provide('Blockly.ScratchBlocks.ProcedureUtils');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

// settings

Blockly.ScratchBlocks.ProcedureUtils.REARRANGEABLE_INPUTS = true;

Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS = ['n', 's', 'a', 'C', 'p', 'c', 'b', 'e'];

Blockly.ScratchBlocks.ProcedureUtils.ARGUMENT_BLOCK_MAPPINGS =  {
  n: 'math_number',
  s: 'text',
  a: 'math_angle',
  C: 'colour_picker',
  p: 'note',
  b: 'checkbox',
  e: null
};

Blockly.ScratchBlocks.ProcedureUtils.ARGUMENTS = {
  "boolean": {
    getDefault: () => 'false',
    displayName: 'boolean',
    procCodeId: ' %b',
    argumentIdKey: ''
  },
  "number or text": {
    getDefault: () => '',
    displayName: 'number or text',
    procCodeId: ' %s',
    argumentIdKey: ''
  },
  "number": {
    getDefault: () => '0',
    displayName: 'number',
    procCodeId: ' %n',
    argumentIdKey: ''
  },
  "angle": {
    getDefault: () => '90',
    displayName: 'angle',
    procCodeId: ' %a',
    argumentIdKey: ''
  },
  "color": {
    getDefault: () => goog.color.hslArrayToHex([Math.random() * 360, 1, 0.5]),
    displayName: 'color',
    procCodeId: ' %C',
    argumentIdKey: ''
  },
  "piano": {
    getDefault: () => '60',
    displayName: 'piano',
    procCodeId: ' %p',
    argumentIdKey: ''
  },
  "empty": {
    getDefault: () => '',
    displayName: 'empty',
    procCodeId: ' %e',
    argumentIdKey: ''
  },
  "branch": {
    getDefault: () => '',
    displayName: 'branch',
    procCodeId: ' %c',
    argumentIdKey: 'SUBSTACK'
  },
};

// Serialization and deserialization.

/**
 * Parses the return type of a mutation.
 * @param {!Element} xmlElement XML storage element.
 * @param {Blockly.Block} block If provided, will check extra block properties for return data
 * @returns Return info array
 */
Blockly.ScratchBlocks.ProcedureUtils.parseReturnMutation = function(xmlElement, block) {
  var x;
  if (xmlElement.hasAttribute('forceoutput')) {
    try {
      x = JSON.parse(xmlElement.getAttribute('forceoutput'));

      if (x instanceof Array) return x;
      else if (x !== null) return [null, typeof x === 'number' ? x : Blockly.OUTPUT_SHAPE_ROUND];
    } catch {}
  }

  if (xmlElement.hasAttribute('return')) {
    try {
      x = JSON.parse(xmlElement.getAttribute('return'));

      if (x instanceof Array) return x;
      else if (x !== null) return [null, x instanceof Number ? x : Blockly.OUTPUT_SHAPE_ROUND];
    } catch {}
  }
  return [[], Blockly.PROCEDURES_CALL_TYPE_STATEMENT];
};

/**
 * Create XML to represent the (non-editable) name and arguments of a procedure
 * call block.
 * @return {!Element} XML storage element.
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.callerMutationToDom = function() {
  var container = document.createElement('mutation');
  container.setAttribute('proccode', this.procCode_);
  container.setAttribute('argumentids', JSON.stringify(this.argumentIds_));
  container.setAttribute('warp', JSON.stringify(this.warp_));
  container.setAttribute('global', JSON.stringify(this.global_));
  if (this.return_[1] !== Blockly.PROCEDURES_CALL_TYPE_STATEMENT) {
    container.setAttribute('return', JSON.stringify(this.return_));
  }
  container.setAttribute('terminal', JSON.stringify(this.isTerminal_));
  container.setAttribute('colour', this.procColour_);
  return container;
};

/**
 * Parse XML to restore the (non-editable) name and arguments of a procedure
 * call block.
 * @param {!Element} xmlElement XML storage element.
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.callerDomToMutation = function(xmlElement) {
  this.procCode_ = xmlElement.getAttribute('proccode');
  this.argumentIds_ = JSON.parse(xmlElement.getAttribute('argumentids'));
  this.warp_ = JSON.parse(xmlElement.getAttribute('warp'));
  this.global_ = JSON.parse(xmlElement.getAttribute('global'));
  this.isTerminal_ = JSON.parse(xmlElement.getAttribute('terminal'));
  this.generateShadows_ = this.global_ && this.isInFlyout
    ? true
    : JSON.parse(xmlElement.getAttribute('generateshadows'));

  this.return_ = Blockly.ScratchBlocks.ProcedureUtils.parseReturnMutation(
    xmlElement,
    this
  );
  this.procColour_ = xmlElement.getAttribute('colour') ?? "more";
  this.updateDisplay_();
};

/**
 * Create XML to represent the (non-editable) name and arguments of a
 * procedures_prototype block or a procedures_declaration block.
 * @param {boolean=} opt_generateShadows Whether to include the generateshadows
 *     flag in the generated XML.  False if not provided.
 * @return {!Element} XML storage element.
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.definitionMutationToDom = function(
    opt_generateShadows) {
  var container = document.createElement('mutation');

  if (opt_generateShadows) {
    container.setAttribute('generateshadows', true);
  }

  container.setAttribute('proccode', this.procCode_);
  container.setAttribute('argumentids', JSON.stringify(this.argumentIds_));
  container.setAttribute('argumentnames', JSON.stringify(this.displayNames_));
  container.setAttribute('argumentdefaults',
      JSON.stringify(this.argumentDefaults_));
  container.setAttribute('warp', JSON.stringify(this.warp_));
  container.setAttribute('global', JSON.stringify(this.global_));
  container.setAttribute('forceoutput', this.forceOutput_);
  container.setAttribute('terminal', JSON.stringify(this.isTerminal_));
  container.setAttribute('colour', this.procColour_);
  return container;
};

/**
 * Parse XML to restore the (non-editable) name and arguments of a
 * procedures_prototype block or a procedures_declaration block.
 * @param {!Element} xmlElement XML storage element.
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.definitionDomToMutation = function(xmlElement) {
  this.procCode_ = xmlElement.getAttribute('proccode');
  this.warp_ = JSON.parse(xmlElement.getAttribute('warp'));
  this.global_ = JSON.parse(xmlElement.getAttribute('global'));
  if (this.global_) {
    Blockly.Procedures.GLOBAL_BLOCKS.set(this.procCode_, xmlElement);
  } else {
    if (Blockly.Procedures.GLOBAL_BLOCKS.has(this.procCode_)) {
      Blockly.Procedures.GLOBAL_BLOCKS.delete(this.procCode_);
    }
  }

  var prevArgIds = this.argumentIds_;
  var prevDisplayNames = this.displayNames_;

  this.argumentIds_ = JSON.parse(xmlElement.getAttribute('argumentids'));
  this.displayNames_ = JSON.parse(xmlElement.getAttribute('argumentnames'));
  this.argumentDefaults_ = JSON.parse(xmlElement.getAttribute('argumentdefaults'));
  if (xmlElement.hasAttribute('forceoutput')) {
    this.forceOutput_ = parseInt(xmlElement.getAttribute('forceoutput'));
  }
  this.isTerminal_ = JSON.parse(xmlElement.getAttribute('terminal'));
  this.procColour_ = xmlElement.getAttribute('colour') ?? "more";
  this.updateDisplay_();
  if (this.updateArgumentReporterNames_) {
    this.updateArgumentReporterNames_(prevArgIds, prevDisplayNames);
  }

  if (this.type === "procedures_declaration" && this.procColour_ !== "more") {
    // For declaration editors, we will call 'updateDisplay_' again, after rendering, to
    // fix shadow outline colors and other weird quirks with custom colors.
    queueMicrotask(() => this.updateDisplay_());
  }
};

// End of serialization and deserialization.

// Shared by all three procedure blocks (procedures_declaration,
// procedures_call, and procedures_prototype).
/**
 * Returns the name of the procedure this block calls, or the empty string if
 * it has not yet been set.
 * @return {string} Procedure name.
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.getProcCode = function() {
  return this.procCode_;
};

/**
 * Update the block's structure and appearance to match the internally stored
 * mutation.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.updateDisplay_ = function() {
  var postRenderCallback = null;
  var wasRendered = this.rendered;
  this.rendered = false;

  var connectionMap = this.disconnectOldBlocks_();
  this.removeAllInputs_();

  if (!this.getReturn && this.type === 'procedures_prototype') {
    postRenderCallback = this.updateProtoShape_();
  }

  this.createAllInputs_(connectionMap);
  this.deleteShadows_(connectionMap);

  if (this.getReturn) {
    // This is a caller block.
    if (this.getReturn()[1] === Blockly.PROCEDURES_CALL_TYPE_STATEMENT) {
      if (this.outputConnection) {
        this.setOutput(true, null)
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND)
      } else {
        if (this.isTerminal_ && this.nextConnection && this.nextConnection.targetConnection) this.nextConnection.disconnect();
        this.setPreviousStatement(true, "normal");
        this.setNextStatement(!this.isTerminal_, "normal");
      }
    } else {
      if (this.previousConnection) {
        if (this.isTerminal_ && this.nextConnection && this.nextConnection.targetConnection) this.nextConnection.disconnect();
        this.setPreviousStatement(true, "normal");
        this.setNextStatement(!this.isTerminal_, "normal");
      } else {
        let output = this.getReturn()[0];
        if (this.outputConnection && this.outputConnection.targetConnection && output !== null) {
          let check = this.outputConnection.targetConnection.check_;
          if (check !== null && !check.some(v => output.includes(v))) {
            output = this.outputConnection.check_;
          }
        }
        this.setOutput(true, output)
        this.setOutputShape(this.getReturn()[1])
      }
    }
  }

  if (this.updateProcColour) this.updateProcColour();

  this.rendered = wasRendered;
  if (wasRendered && !this.isInsertionMarker()) {
    this.initSvg();
    this.render();

    if (postRenderCallback) postRenderCallback();
  }
};

/**
 * Disconnect old blocks from all value inputs on this block, but hold onto them
 * in case they can be reattached later.  Also save the shadow DOM if it exists.
 * The result is a map from argument ID to information that was associated with
 * that argument at the beginning of the mutation.
 * @return {!Object.<string, {shadow: Element, block: Blockly.Block}>} An object
 *     mapping argument IDs to blocks and shadow DOMs.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.disconnectOldBlocks_ = function() {
  // Remove old stuff
  var connectionMap = {};
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.connection) {
      var target = input.connection.targetBlock();
      var saveInfo = {
        shadow: input.connection.getShadowDom(),
        block: target
      };
      connectionMap[input.name] = saveInfo;

      // Remove the shadow DOM, then disconnect the block.  Otherwise a shadow
      // block will respawn instantly, and we'd have to remove it when we remove
      // the input.
      input.connection.setShadowDom(null);
      if (target) {
        input.connection.disconnect();
      }
    }
  }
  return connectionMap;
};

/**
 * Remove all inputs on the block, including dummy inputs.
 * Assumes no input has shadow DOM set.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.removeAllInputs_ = function() {
  // Delete inputs directly instead of with block.removeInput to avoid splicing
  // out of the input list at every index.
  for (var i = 0, input; input = this.inputList[i]; i++) {
    input.dispose();
  }
  this.inputList = [];
  this.appendDummyInput("DUMMY")
};

/**
 * Create all inputs specified by the new procCode, and populate them with
 * shadow blocks or reconnected old blocks as appropriate.
 * @param {!Object.<string, {shadow: Element, block: Blockly.Block}>}
 *     connectionMap An object mapping argument IDs to blocks and shadow DOMs.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.createAllInputs_ = function(connectionMap) {
  const REARRANGEABLE_INPUTS = Blockly.ScratchBlocks.ProcedureUtils.REARRANGEABLE_INPUTS;
  const VALID_ARGS = Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS;

  // Split the proc into components, by %n, %b, and %s (ignoring escaped)
  var procComponents = this.procCode_.split(REARRANGEABLE_INPUTS ? /(?=[^\\]%[bsnaCpcel])/ : /(?=[^\\]%[bsnaCpcel])/);
  procComponents = procComponents.map(function(c) {
    return c.trim(); // Strip whitespace.
  });
  // Create arguments and labels as appropriate.
  var argumentCount = 0;
  var hasAnyField = false;
  for (var i = 0, component; component = procComponents[i]; i++) {
    var labelText;
    var argumentType = component.substring(1, 2);
    var id = this.argumentIds_[argumentCount];
    if (component.substring(0, 1) == '%' && (VALID_ARGS.includes(argumentType)) && id) {
      labelText = component.substring(2).trim();
      
      if (argumentType == 'c') {
        var input = this.appendStatementInput(id).setCheck("argumentReporterCommand");
      } else {
        var input = this.appendValueInput(id);
      }
      if (argumentType == 'b') {
        input.setCheck('Boolean');
      }

      this.populateArgument_(
        argumentType,
        argumentCount,
        connectionMap,
        id,
        input
      );
      hasAnyField = true;
      argumentCount++;
    } else {
      if (REARRANGEABLE_INPUTS) {
        labelText = component == "%l" ? " " : component.replace("%l", "").trim();
      } else {
        labelText = component.trim();
      }
    }
    this.addProcedureLabel_(labelText.replace(/\\%/, "%"));
  }

  if (REARRANGEABLE_INPUTS) {
    // remove all traces of %l at the earliest possible time
    this.procCode_ = this.procCode_.replace(/%l /g, "");
  }
};

/**
 * Delete all shadow blocks in the given map.
 * @param {!Object.<string, Blockly.Block>} connectionMap An object mapping
 *     argument IDs to the blocks that were connected to those IDs at the
 *     beginning of the mutation.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.deleteShadows_ = function(connectionMap) {
  // Get rid of all of the old shadow blocks if they aren't connected.
  if (connectionMap) {
    for (var id in connectionMap) {
      var saveInfo = connectionMap[id];
      if (saveInfo) {
        var block = saveInfo['block'];
        if (block && block.isShadow()) {
          block.dispose();
          connectionMap[id] = null;
          // At this point we know which shadow DOMs are about to be orphaned in
          // the VM.  What do we do with that information?
        }
      }
    }
  }
};
// End of shared code.

/**
 * Add a label field with the given text to a procedures_call or
 * procedures_prototype block.
 * @param {string} text The label text.
 * @private
 */
Blockly.ScratchBlocks.ProcedureUtils.addLabelField_ = function(text) {
  if (text) {
    this.appendDummyInput().appendField(text);
  }
};

/**
 * Add a label editor with the given text to a procedures_declaration
 * block.  Editing the text in the label editor updates the text of the
 * corresponding label fields on function calls.
 * @param {string} text The label text.
 * @private
 */
Blockly.ScratchBlocks.ProcedureUtils.addLabelEditor_ = function(text) {
  if (text) {
    this.appendDummyInput(Blockly.utils.genUid()).
        appendField(new Blockly.FieldTextInputRemovable(text));
  }
};

/**
 * Build a DOM node representing a shadow block of the given type.
 * @param {string} type One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @return {!Element} The DOM node representing the new shadow block.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.buildShadowDom_ = function(type) {
  if (type === 'e') return;

  var ARGUMENTS = Blockly.ScratchBlocks.ProcedureUtils.ARGUMENTS;
  var shadowDom = goog.dom.createDom('shadow');
  switch (type) {
    case 'n':
      var shadowType = 'math_number';
      var fieldName = 'NUM';
      var fieldValue = ARGUMENTS['number'].getDefault();
      break;
    case 's':
      var shadowType = 'text';
      var fieldName = 'TEXT';
      var fieldValue = ARGUMENTS['number or text'].getDefault();
      break;
    case 'a':
      var shadowType = 'math_angle';
      var fieldName = 'NUM';
      var fieldValue = ARGUMENTS['angle'].getDefault();
      break;
    case 'C':
      var shadowType = 'colour_picker';
      var fieldName = 'COLOUR';
      var fieldValue = ARGUMENTS['color'].getDefault();
      break;
    case 'p':
      var shadowType = 'note';
      var fieldName = 'NOTE';
      var fieldValue = ARGUMENTS['piano'].getDefault();
      break;
    case 'b':
      var shadowType = 'checkbox';
      var fieldName = 'CHECKBOX';
      var fieldValue = false;
      break;
  }

  shadowDom.setAttribute('type', shadowType);
  var fieldDom = goog.dom.createDom('field', null, fieldValue);
  fieldDom.setAttribute('name', fieldName);
  shadowDom.appendChild(fieldDom);
  return shadowDom;
};

/**
 * Create a new shadow block and attach it to the given input.
 * @param {!Blockly.Input} input The value input to attach a block to.
 * @param {string} argumentType One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.attachShadow_ = function(input,
    argumentType) {
  var ARGUMENTS = Blockly.ScratchBlocks.ProcedureUtils.ARGUMENTS;
  var blockType = Blockly.ScratchBlocks.ProcedureUtils.ARGUMENT_BLOCK_MAPPINGS[argumentType];
  if (blockType) {
    Blockly.Events.disable();
    try {
      var newBlock = this.workspace.newBlock(blockType);
      switch (argumentType) {
        case 'n':
          newBlock.setFieldValue(ARGUMENTS['number'].getDefault(), 'NUM');
          break;
        case 's':
          newBlock.setFieldValue(ARGUMENTS['number or text'].getDefault(), 'TEXT');
          break;
        case 'a':
          newBlock.setFieldValue(ARGUMENTS['angle'].getDefault(), 'NUM');
          break;
        case 'C':
          newBlock.setFieldValue(ARGUMENTS['color'].getDefault(), 'COLOUR');
          break;
        case 'p':
          newBlock.setFieldValue(ARGUMENTS['piano'].getDefault(), 'NOTE');
          break;
        case 'b':
          newBlock.setFieldValue(false, 'CHECKBOX');
          break;
      }

      newBlock.setShadow(true);
      if (!this.isInsertionMarker()) {
        newBlock.initSvg();
        newBlock.render(false);
      }
    } finally {
      Blockly.Events.enable();
    }
    if (Blockly.Events.isEnabled()) {
      Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
    }
    newBlock.outputConnection.connect(input.connection);
  }
};

/**
 * Create a new argument reporter block.
 * @param {string} argumentType One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @param {string} displayName The name of the argument as provided by the
 *     user, which becomes the text of the label on the argument reporter block.
 * @return {!Blockly.BlockSvg} The newly created argument reporter block.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.createArgumentReporter_ = function(
    argumentType, displayName) {
  switch (argumentType) {
    case 'n':
    case 'a':
    case 'C':
    case 'p':
    case 'e':
    case 's':
      var blockType = 'argument_reporter_string_number';
      break;
    case 'b':
      var blockType = 'argument_reporter_boolean';
      break;
    case 'c':
      var blockType = 'argument_reporter_command';
      break;
  }
  Blockly.Events.disable();
  try {
    var newBlock = this.workspace.newBlock(blockType);
    newBlock.setShadow(true);
    newBlock.setFieldValue(displayName, 'VALUE');
    if (!this.isInsertionMarker()) {
      newBlock.initSvg();
      newBlock.render(false);
    }
    if (argumentType === 'c') {
      newBlock.setPreviousStatement(true, 'argumentReporterCommand')
      newBlock.setNextStatement(true, 'argumentReporterCommand')
    }
  } finally {
    Blockly.Events.enable();
  }
  if (Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
  }
  return newBlock;
};

/**
 * Populate the argument by attaching the correct child block or shadow to the
 * given input.
 * @param {string} type One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @param {number} index The index of this argument into the argument id array.
 * @param {!Object.<string, {shadow: Element, block: Blockly.Block}>}
 *     connectionMap An object mapping argument IDs to blocks and shadow DOMs.
 * @param {string} id The ID of the input to populate.
 * @param {!Blockly.Input} input The newly created input to populate.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.populateArgumentOnCaller_ = function(type,
    index, connectionMap, id, input) {
  var oldBlock = null;
  var oldShadow = null;
  if (connectionMap && (id in connectionMap)) {
    var saveInfo = connectionMap[id];
    oldBlock = saveInfo['block'];
    oldShadow = saveInfo['shadow'];
  }

  if (connectionMap && oldBlock) {
    // Reattach the old block and shadow DOM.
    connectionMap[input.name] = null;
    if (type == 'c') {
      oldBlock.previousConnection.connect(input.connection);
    } else {
      oldBlock.outputConnection.connect(input.connection);
    }
    if (type != 'c' && this.generateShadows_) {
      var shadowDom = oldShadow || this.buildShadowDom_(type);
      console.log("setting shadow dom: " + shadowDom);
      input.connection.setShadowDom(shadowDom);
    }
  } else if (this.generateShadows_) {
    this.attachShadow_(input, type);
  }
};

/**
 * Populate the argument by attaching the correct argument reporter to the given
 * input.
 * @param {string} type One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @param {number} index The index of this argument into the argument ID and
 *     argument display name arrays.
 * @param {!Object.<string, {shadow: Element, block: Blockly.Block}>}
 *     connectionMap An object mapping argument IDs to blocks and shadow DOMs.
 * @param {string} id The ID of the input to populate.
 * @param {!Blockly.Input} input The newly created input to populate.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.populateArgumentOnPrototype_ = function(
    type, index, connectionMap, id, input) {
  var oldBlock = null;
  if (connectionMap && (id in connectionMap)) {
    var saveInfo = connectionMap[id];
    oldBlock = saveInfo['block'];
  }

  var oldTypeMatches =
    Blockly.ScratchBlocks.ProcedureUtils.checkOldTypeMatches_(oldBlock, type);
  var displayName = this.displayNames_[index];

  // Decide which block to attach.
  if (connectionMap && oldBlock && oldTypeMatches) {
    // Update the text if needed. The old argument reporter is the same type,
    // and on the same input, but the argument's display name may have changed.
    var argumentReporter = oldBlock;
    argumentReporter.setFieldValue(displayName, 'VALUE');
    connectionMap[input.name] = null;
  } else {
    var argumentReporter = this.createArgumentReporter_(type, displayName);
  }

  // Attach the block.
  input.connection.connect(argumentReporter.outputConnection || argumentReporter.previousConnection);
};

/**
 * Populate the argument by attaching the correct argument editor to the given
 * input.
 * @param {string} type One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @param {number} index The index of this argument into the argument id and
 *     argument display name arrays.
 * @param {!Object.<string, {shadow: Element, block: Blockly.Block}>}
 *     connectionMap An object mapping argument IDs to blocks and shadow DOMs.
 * @param {string} id The ID of the input to populate.
 * @param {!Blockly.Input} input The newly created input to populate.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.populateArgumentOnDeclaration_ = function(
    type, index, connectionMap, id, input) {

  var oldBlock = null;
  if (connectionMap && (id in connectionMap)) {
    var saveInfo = connectionMap[id];
    oldBlock = saveInfo['block'];
  }

  // TODO: This always returns false, because it checks for argument reporter
  // blocks instead of argument editor blocks.  Create a new version for argument
  // editors.
  var oldTypeMatches =
    Blockly.ScratchBlocks.ProcedureUtils.checkOldTypeMatches_(oldBlock, type);
  var displayName = this.displayNames_[index];

  // Decide which block to attach.
  if (oldBlock && oldTypeMatches) {
    var argumentEditor = oldBlock;
    oldBlock.setFieldValue(displayName, 'TEXT');
    connectionMap[input.name] = null;
  } else {
    var argumentEditor = this.createArgumentEditor_(type, displayName);
  }

  if (
    oldBlock && oldBlock.type === 'argument_editor_command' &&
    oldBlock.id !== argumentEditor?.id
  ) {
    // Always scrap the old branch
    oldBlock.dispose();
  }

  // Attach the block.
  input.connection.connect(argumentEditor.outputConnection || argumentEditor.previousConnection);
};

/**
 * Check whether the type of the old block corresponds to the given argument
 * type.
 * @param {Blockly.BlockSvg} oldBlock The old block to check.
 * @param {string} type The argument type. Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS.
 * @return {boolean} True if the type matches, false otherwise.
 */
Blockly.ScratchBlocks.ProcedureUtils.checkOldTypeMatches_ = function(oldBlock,
    type) {
  if (!oldBlock) {
    return false;
  }
  if (
    (
      type == 'n' || type == 's' || type == 'a' ||
      type == 'C' || type == 'p' || type == 'e'
    ) &&
    oldBlock.type == 'argument_reporter_string_number'
  ) {
    return true;
  }
  if (type == 'b' && oldBlock.type == 'argument_reporter_boolean') {
    return true;
  }
  if (type == 'c' && oldBlock.type == 'argument_reporter_command') {
    return true;
  }
  return false;
};

/**
 * Create an argument editor.
 * An argument editor is a shadow block with a single text field, which is used
 * to set the display name of the argument.
 * @param {string} argumentType One of Blockly.ScratchBlocks.ProcedureUtils.VALID_ARGUMENTS
 * @param {string} displayName The display name  of this argument, which is the
 *     text of the field on the shadow block.
 * @return {!Blockly.BlockSvg} The newly created argument editor block.
 * @private
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.createArgumentEditor_ = function(
    argumentType, displayName) {
  Blockly.Events.disable();
  try {
    switch (argumentType) {
      case 'n':
      case 'a':
      case 'C':
      case 'p':
      case 'e':
      case 's':
        var newBlock = this.workspace.newBlock('argument_editor_string_number');
        newBlock._argType = "%" + argumentType;
        break;
      case 'b':
        var newBlock = this.workspace.newBlock('argument_editor_boolean');
        break;
      case 'c':
        var newBlock = this.workspace.newBlock('argument_editor_command')
    }
    newBlock.setFieldValue(displayName, 'TEXT');

    if (argumentType === 'c') {
      newBlock.setShadow(false);
      newBlock.setMovable(false);
      newBlock.setDeletable(false);
      newBlock.setTextColour("#ffffff");
      newBlock.setColour(this.colour_);
    } else {
      newBlock.setShadow(true);
    }

    if (!this.isInsertionMarker()) {
      newBlock.initSvg();
      newBlock.render(false);
    }
  } finally {
    Blockly.Events.enable();
  }
  if (Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
  }
  return newBlock;
};

/**
 * Update the serializable information on the block based on the existing inputs
 * and their text.
 */
Blockly.ScratchBlocks.ProcedureUtils.updateDeclarationProcCode_ = function(prefixLabels = false) {
  const REARRANGEABLE_INPUTS = Blockly.ScratchBlocks.ProcedureUtils.REARRANGEABLE_INPUTS;

  this.procCode_ = '';
  this.displayNames_ = [];
  this.argumentIds_ = [];
  for (var i = 0; i < this.inputList.length; i++) {
    if (i != 0) {
      this.procCode_ += ' ';
    }
    var input = this.inputList[i];
    if (input.type == Blockly.DUMMY_INPUT) {
      if (input.fieldRow[0]) {
        if (REARRANGEABLE_INPUTS) this.procCode_ += (prefixLabels ? "%l " : "") + input.fieldRow[0].getValue(); // modified to prepend %l delimiter, which prevents label merging
        else this.procCode_ += input.fieldRow[0].getValue();
      }
    } else if (input.type == Blockly.INPUT_VALUE || input.type == Blockly.NEXT_STATEMENT) {
      // Inspect the argument editor.
      var target = input.connection.targetBlock();
      this.displayNames_.push(target.getFieldValue('TEXT'));
      this.argumentIds_.push(input.name);
      switch (target.type) {
        case 'argument_editor_string_number':
          this.procCode_ += target._argType ?? '%s';
          break;
        case 'argument_editor_boolean':
          this.procCode_ += '%b';
          break;
        case 'argument_editor_command':
          this.procCode_ += "%c";
          break;
      }
    } else {
      throw new Error(
          'Unexpected input type on a procedure mutator root: ' + input.type);
    }
  }
};

/**
 * Focus on the last argument editor or label editor on the block.
 * @private
 */
Blockly.ScratchBlocks.ProcedureUtils.focusLastEditor_ = function() {
  if (this.inputList.length > 0) {
    var newInput = this.inputList[this.inputList.length - 1];
    if (newInput.type == Blockly.DUMMY_INPUT) {
      if (newInput.fieldRow[0]) newInput.fieldRow[0].showEditor_();
    } else if (
      newInput.type == Blockly.INPUT_VALUE ||
      newInput.type == Blockly.NEXT_STATEMENT
    ) {
      // Inspect the argument editor.
      var target = newInput.connection.targetBlock();
      target.getField('TEXT').showEditor_();
    }
  }
};

/**
 * Externally-visible function to add a label to the procedure declaration.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.addLabelExternal = function() {
  Blockly.WidgetDiv.hide(true);
  this.procCode_ = this.procCode_ + ' label text';
  this.updateDisplay_();
  this.focusLastEditor_();
};

/**
 * Externally-visible function to add an specified argument to the procedure declaration.
 * @this {BlockSvg} Declaration block
 * @param {String} type The type of argument to add (ProcedureUtils.ARGUMENTS.*)
 * @private
 */
Blockly.ScratchBlocks.ProcedureUtils._addExternalArgument = function(type) {
  const argInfo = Blockly.ScratchBlocks.ProcedureUtils.ARGUMENTS[type];
  if (!argInfo) return;

  Blockly.WidgetDiv.hide(true);
  this.procCode_ = this.procCode_ + argInfo.procCodeId;
  this.displayNames_.push(argInfo.displayName);
  this.argumentIds_.push(argInfo.argumentIdKey + Blockly.utils.genUid());
  this.argumentDefaults_.push(argInfo.getDefault());
  this.updateDisplay_();
  this.focusLastEditor_();
};

/**
 * Externally-visible function to add a boolean argument to the procedure
 * declaration.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.addBooleanExternal = function() {
  Blockly.ScratchBlocks.ProcedureUtils._addExternalArgument.call(this, 'boolean');
};

Blockly.ScratchBlocks.ProcedureUtils.addCommandExternal = function () {
  Blockly.ScratchBlocks.ProcedureUtils._addExternalArgument.call(this, 'branch');
};

/**
 * Externally-visible function to add a specified argument to the procedure
 * declaration.
 * @param {String} type The type of external input to add, defaults to string/number
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.addArgumentExternal = function(type) {
  if (!type) type = 'number or text';
  Blockly.ScratchBlocks.ProcedureUtils._addExternalArgument.call(this, type);
};

/**
 * Externally-visible function to get the warp on procedure declaration.
 * @return {boolean} The value of the warp_ property.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.getWarp = function() {
  return this.warp_;
};

/**
 * Externally-visible function to set the warp on procedure declaration.
 * @param {boolean} warp The value of the warp_ property.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.setWarp = function(warp) {
  this.warp_ = warp;
};

/**
 * Externally-visible function to get the global on procedure declaration.
 * @return {boolean} The value of the global_ property.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.getGlobal = function() {
  return this.global_;
};

/**
 * Externally-visible function to set the global on procedure declaration.
 * @param {boolean} global The value of the global_ property.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.setGlobal = function(global) {
  this.global_ = global;
};

/**
 * @this {BlockSvg}
 * @returns {[Array<string>, number]} types & shape
 */
Blockly.ScratchBlocks.ProcedureUtils.getReturn = function() {
  return this.return_;
};

/**
 * Callback to remove a field, only for the declaration block.
 * @param {Blockly.Field} field The field being removed.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.removeFieldCallback = function(field) {
  // Do not delete if there is only one input
  if (this.inputList.length === 1) {
    return;
  }
  var inputNameToRemove = null;
  const cannotRemove = (i) => i == 0 && this.inputList[1].type == Blockly.NEXT_STATEMENT
  for (var n = 0; n < this.inputList.length; n++) {
    var input = this.inputList[n];
    if (input.connection) {
      var target = input.connection.targetBlock();
      if (target.getField(field.name) == field) {
        if (cannotRemove(n)) return
        inputNameToRemove = input.name;
      }
    } else {
      if (input.fieldRow[0] == field) {
        if (cannotRemove(n)) return
        inputNameToRemove = input.name;
      }
    }
  }
  if (inputNameToRemove) {
    Blockly.WidgetDiv.hide(true);

    // Since the command editor is not a shadow, we must manually remove it.
    var inputToRemove = this.getInput(inputNameToRemove);
    if (inputToRemove && inputToRemove.connection) {
      var inputBlock = inputToRemove.connection.targetBlock();
      if (inputBlock && inputBlock.type === 'argument_editor_command') {
        inputBlock.dispose();
      }
    }

    this.removeInput(inputNameToRemove);
    this.onChangeFn(true);
    this.updateDisplay_();
  }
};

/**
 * Callback to pass removeField up to the declaration block from arguments.
 * @param {Blockly.Field} field The field being removed.
 * @public
 */
Blockly.ScratchBlocks.ProcedureUtils.removeArgumentCallback_ = function(
    field) {
  if (this.parentBlock_ && this.parentBlock_.removeFieldCallback) {
    this.parentBlock_.removeFieldCallback(field);
  }
};

Blockly.ScratchBlocks.ProcedureUtils.shiftFieldCallback = function(field, direction) {
  // Do not shift if there is only one input
  if (this.inputList.length === 1) {
    return;
  }

  //get name and index of field
  let inputNameToShift;
  let index;
  for (const [i, input] of Object.entries(this.inputList)) {
    const isTargetField = input.connection
      ? (input.connection.targetBlock() && input.connection.targetBlock().getField(field.name) === field)
      : input.fieldRow.includes(field);

    if (isTargetField) {
      inputNameToShift = input.name;
      index = Number(i);
      break;
    }
  }

  const newPosition = direction === "left" ? index - 1 : index + 1;
  const initialInputListLength = this.inputList.length;

  // return if inputNameToShift and newPosition are not valid
  if (!(inputNameToShift && newPosition >= 0 && newPosition <= initialInputListLength)) {
    return;
  }

  const original = this.inputList.find((input) => input.name === inputNameToShift);
  const originalPosition = this.inputList.findIndex((input) => input.name === inputNameToShift);

  if (
    (newPosition == 0 && original.type === Blockly.NEXT_STATEMENT) ||
    (originalPosition == 0 && this.inputList[newPosition].type === Blockly.NEXT_STATEMENT)
  ) {
    return;
  }

  const itemToMove = this.inputList.splice(originalPosition, 1)[0];

  this.inputList.splice(newPosition, 0, itemToMove);

  Blockly.Events.disable();
  try {
    this.onChangeFn(true);
    this.updateDisplay_();
  } finally {
    Blockly.Events.enable();
  }

  if (this.inputList[newPosition].type == Blockly.DUMMY_INPUT) {
    this.inputList[newPosition].fieldRow[0].showEditor_();
  } else {
    const target = this.inputList[newPosition].connection.targetBlock();
    target.getField("TEXT").showEditor_();
  }
};

Blockly.ScratchBlocks.ProcedureUtils.shiftArgumentCallback_ = function(field, direction) {
  if (this.parentBlock_ && this.parentBlock_.shiftFieldCallback) {
    this.parentBlock_.shiftFieldCallback(field, direction);
  }
};

/**
 * Update argument reporter field values after an edit to the prototype mutation
 * using previous argument ids and names.
 * Because the argument reporters only store names and not which argument ids they
 * are linked to, it would not be safe to update all argument reporters on the workspace
 * since they may be argument reporters with the same name from a different procedure.
 * Until there is a more explicit way of identifying argument reporter blocks using ids,
 * be conservative and only update argument reporters that are used in the
 * stack below the prototype, ie the definition.
 * @param {!Array<string>} prevArgIds The previous ordering of argument ids.
 * @param {!Array<string>} prevDisplayNames The previous argument names.
 * @this Blockly.Block
 */
Blockly.ScratchBlocks.ProcedureUtils.updateArgumentReporterNames_ = function(prevArgIds, prevDisplayNames) {
  var nameChanges = [];
  var argReporters = [];
  var definitionBlock = this.getParent();
  if (!definitionBlock) return;

  // Create a list of argument reporters that are descendants of the definition stack (see above comment)
  var allBlocks = definitionBlock.getDescendants(false);
  for (var i = 0; i < allBlocks.length; i++) {
    var block = allBlocks[i];
    if ((block.type === 'argument_reporter_string_number' ||
        block.type === 'argument_reporter_boolean') &&
        !block.isShadow()) { // Exclude arg reporters in the prototype block, which are shadows.
      argReporters.push(block);
    }
  }

  // Create a list of "name changes", including the new name and blocks matching the old name
  // Only search over the current set of argument ids, ignore args that have been removed
  for (var i = 0, id; id = this.argumentIds_[i]; i++) {
    // Find the previous index of this argument id. Could be -1 if it is newly added.
    var prevIndex = prevArgIds.indexOf(id);
    if (prevIndex == -1) continue; // Newly added argument, no corresponding previous argument to update.
    var prevName = prevDisplayNames[prevIndex];
    if (prevName != this.displayNames_[i]) {
      nameChanges.push({
        newName: this.displayNames_[i],
        blocks: argReporters.filter(function(block) {
          return block.getFieldValue('VALUE') == prevName;
        })
      });
    }
  }

  // Finally update the blocks for each name change.
  // Do this after creating the lists to avoid cycles of renaming.
  for (var j = 0, nameChange; nameChange = nameChanges[j]; j++) {
    for (var k = 0, block; block = nameChange.blocks[k]; k++) {
      block.setFieldValue(nameChange.newName, 'VALUE');
    }
  }
};

/**
 * Updates a prototype's output shape based on its mutation.
 * @this Blockly.Block
 * @returns {Function} Callback to run after the block renders.
 */
Blockly.ScratchBlocks.ProcedureUtils.updateProtoShape_ = function() {
  if (this.previousConnection) {
    this.setNextStatement(!this.isTerminal_, "normal");
  }

  var parent = this.getParent();
  var wasForceOutput = this.previousConnection === null;
  var isStatement = this.forceOutput_ === 0;
  if (parent) {
    // For forced returns, we must re-connect and change the outer connections
    // before calling 'createAllInputs_'. This fixes shadow and block placement.
    if (
      (!wasForceOutput && !isStatement) ||
      (wasForceOutput && isStatement)
    ) {
      // Only update if we switch between reporter or block, not switch reporter types.
      var parentInput = parent.getInput("custom_block");

      parentInput.connection.setShadowDom();
      if (this.previousConnection) {
        this.previousConnection.disconnect();
        this.previousConnection.dispose();
        this.previousConnection = null;
      } else {
        parentInput.connection.disconnect();
        parentInput.connection.dispose();
      }

      parentInput.connection = parent.makeConnection_(
        isStatement ? Blockly.NEXT_STATEMENT : Blockly.INPUT_VALUE
      );

      if (isStatement) {
        this.previousConnection = this.makeConnection_(Blockly.OPPOSITE_TYPE[Blockly.NEXT_STATEMENT]);
      } else {
        this.outputConnection = this.makeConnection_(Blockly.OPPOSITE_TYPE[Blockly.INPUT_VALUE]);
      }

      if (isStatement) {
        parentInput.connection.connect(this.previousConnection);
        this.previousConnection.connect(parentInput.connection);
      } else {
        parentInput.connection.connect(this.outputConnection);
        this.outputConnection.connect(parentInput.connection);
      }
    }

    this.setNextStatement(isStatement ? !this.isTerminal_ : false, "normal");
    this.setPreviousStatement(isStatement, "normal");

    this.setOutput(!isStatement, this.forceOutput_);
    this.setOutputShape(isStatement ? Blockly.OUTPUT_SHAPE_SQUARE : this.forceOutput_);

    if (!isStatement) {
      return () => {
        // Manually translate the prototype reporter into the define block.
        // This issue for this is related to the fact that the define input type is
        // statement-based, yet changing it to an input breaks the padding.
        // Keeping it as a statement maintains the correct padding, but incorect position.
        // Yes, this is a terrible handler, I know ~SharkPool-SP
        var matrix = this.svgGroup_.transform.baseVal[0].matrix;
        matrix.e = 60;
        matrix.f += this.height / 2 + Blockly.BlockSvg.INLINE_PADDING_Y / 2;
      }
    }
  }

  return null;
}

Blockly.ScratchBlocks.ProcedureUtils.setForceOutput = function(forceOutput) {
  this.forceOutput_ = forceOutput;
}

Blockly.ScratchBlocks.ProcedureUtils.getForceOutput = function() {
  return this.forceOutput_;
}

Blockly.ScratchBlocks.ProcedureUtils.updateProcColour = function() {
  if (Blockly.Extensions.ALL_[`colours_${this.procColour_}`]) {
    Blockly.Extensions.ALL_[`colours_${this.procColour_}`].call(this);
  } else if (this.procColour_ !== null) {
    this.setColour(this.procColour_);
  }
}

Blockly.Blocks['procedures_definition'] = {
  /**
   * Block for defining a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PROCEDURES_DEFINITION,
      "args0": [
        {
          "type": "input_statement",
          "name": "custom_block"
        }
      ],
      "extensions": [
        "colours_more",
        "shape_hat",
        "procedure_def_contextmenu",
        "procedure_custom_color"
      ]
    });

    this._onDrop = () => {
      var protoInput = this.getInput("custom_block");
      if (!protoInput) return;
      var proto = protoInput.connection.targetBlock();
      proto.updateDisplay_();
    }
  }
};

Blockly.Blocks['procedures_call'] = {
  /**
   * Block for calling a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "extensions": ["colours_more", "procedure_call_contextmenu", "procedure_custom_color"]
    });
    this.procCode_ = '';
    this.argumentIds_ = [];
    this.warp_ = false;
    this.global_ = false;
    this.return_ = [[], Blockly.PROCEDURES_CALL_TYPE_STATEMENT];
    this.isTerminal_ = false;
    this.procColour_ = "more";
  },
  // Shared.
  getProcCode: Blockly.ScratchBlocks.ProcedureUtils.getProcCode,
  removeAllInputs_: Blockly.ScratchBlocks.ProcedureUtils.removeAllInputs_,
  disconnectOldBlocks_: Blockly.ScratchBlocks.ProcedureUtils.disconnectOldBlocks_,
  deleteShadows_: Blockly.ScratchBlocks.ProcedureUtils.deleteShadows_,
  createAllInputs_: Blockly.ScratchBlocks.ProcedureUtils.createAllInputs_,
  updateDisplay_: Blockly.ScratchBlocks.ProcedureUtils.updateDisplay_,
  updateProcColour: Blockly.ScratchBlocks.ProcedureUtils.updateProcColour,
  getReturn: Blockly.ScratchBlocks.ProcedureUtils.getReturn,

  // Exist on all three blocks, but have different implementations.
  mutationToDom: Blockly.ScratchBlocks.ProcedureUtils.callerMutationToDom,
  domToMutation: Blockly.ScratchBlocks.ProcedureUtils.callerDomToMutation,
  populateArgument_: Blockly.ScratchBlocks.ProcedureUtils.populateArgumentOnCaller_,
  addProcedureLabel_: Blockly.ScratchBlocks.ProcedureUtils.addLabelField_,

  // Only exists on the external caller.
  attachShadow_: Blockly.ScratchBlocks.ProcedureUtils.attachShadow_,
  buildShadowDom_: Blockly.ScratchBlocks.ProcedureUtils.buildShadowDom_
};

Blockly.Blocks['procedures_prototype'] = {
  /**
   * Block for calling a procedure with no return value, for rendering inside
   * define block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "extensions": ["colours_more", "shape_statement"]
    });

    /* Data known about the procedure. */
    this.procCode_ = '';
    this.displayNames_ = [];
    this.argumentIds_ = [];
    this.argumentDefaults_ = [];
    this.warp_ = false;
    this.global_ = false;
    this.forceOutput_ = 0;
    this.isTerminal_ = false;
    this.procColour_ = "more";

    queueMicrotask(() => {
      // 'updateProtoShape_' might not exist yet, call the factory function.
      const postRenderCallback = Blockly.ScratchBlocks.ProcedureUtils.updateProtoShape_.call(this);
      if (postRenderCallback) postRenderCallback();
    });
  },
  // Shared.
  getProcCode: Blockly.ScratchBlocks.ProcedureUtils.getProcCode,
  removeAllInputs_: Blockly.ScratchBlocks.ProcedureUtils.removeAllInputs_,
  disconnectOldBlocks_: Blockly.ScratchBlocks.ProcedureUtils.disconnectOldBlocks_,
  deleteShadows_: Blockly.ScratchBlocks.ProcedureUtils.deleteShadows_,
  createAllInputs_: Blockly.ScratchBlocks.ProcedureUtils.createAllInputs_,
  updateDisplay_: Blockly.ScratchBlocks.ProcedureUtils.updateDisplay_,
  updateProcColour: Blockly.ScratchBlocks.ProcedureUtils.updateProcColour,

  // Exist on all three blocks, but have different implementations.
  mutationToDom: Blockly.ScratchBlocks.ProcedureUtils.definitionMutationToDom,
  domToMutation: Blockly.ScratchBlocks.ProcedureUtils.definitionDomToMutation,
  populateArgument_: Blockly.ScratchBlocks.ProcedureUtils.populateArgumentOnPrototype_,
  addProcedureLabel_: Blockly.ScratchBlocks.ProcedureUtils.addLabelField_,

  // Only exists on procedures_prototype.
  createArgumentReporter_: Blockly.ScratchBlocks.ProcedureUtils.createArgumentReporter_,
  updateArgumentReporterNames_: Blockly.ScratchBlocks.ProcedureUtils.updateArgumentReporterNames_,
  updateProtoShape_: Blockly.ScratchBlocks.ProcedureUtils.updateProtoShape_,

  //pm
  getForceOutput: Blockly.ScratchBlocks.ProcedureUtils.getForceOutput,
  setForceOutput: Blockly.ScratchBlocks.ProcedureUtils.setForceOutput
};

Blockly.Blocks['procedures_declaration'] = {
  /**
   * The root block in the procedure declaration editor.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "extensions": ["colours_more", "shape_statement"]
    });
    /* Data known about the procedure. */
    this.procCode_ = '';
    this.displayNames_ = [];
    this.argumentIds_ = [];
    this.argumentDefaults_ = [];
    this.warp_ = false;
    this.global_ = false;
    this.forceOutput_ = 0;
    this.isTerminal_ = false;
    this.procColour_ = "more";
  },
  // Shared.
  getProcCode: Blockly.ScratchBlocks.ProcedureUtils.getProcCode,
  removeAllInputs_: Blockly.ScratchBlocks.ProcedureUtils.removeAllInputs_,
  disconnectOldBlocks_: Blockly.ScratchBlocks.ProcedureUtils.disconnectOldBlocks_,
  deleteShadows_: Blockly.ScratchBlocks.ProcedureUtils.deleteShadows_,
  createAllInputs_: Blockly.ScratchBlocks.ProcedureUtils.createAllInputs_,
  updateDisplay_: Blockly.ScratchBlocks.ProcedureUtils.updateDisplay_,
  updateProcColour: Blockly.ScratchBlocks.ProcedureUtils.updateProcColour,

  // Exist on all three blocks, but have different implementations.
  mutationToDom: Blockly.ScratchBlocks.ProcedureUtils.definitionMutationToDom,
  domToMutation: Blockly.ScratchBlocks.ProcedureUtils.definitionDomToMutation,
  populateArgument_: Blockly.ScratchBlocks.ProcedureUtils.populateArgumentOnDeclaration_,
  addProcedureLabel_: Blockly.ScratchBlocks.ProcedureUtils.addLabelEditor_,

  // Exist on declaration and arguments editors, with different implementations.
  removeFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.removeFieldCallback,
  shiftFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.shiftFieldCallback,

  // Only exist on procedures_declaration.
  createArgumentEditor_: Blockly.ScratchBlocks.ProcedureUtils.createArgumentEditor_,
  focusLastEditor_: Blockly.ScratchBlocks.ProcedureUtils.focusLastEditor_,
  getWarp: Blockly.ScratchBlocks.ProcedureUtils.getWarp,
  setWarp: Blockly.ScratchBlocks.ProcedureUtils.setWarp,
  getGlobal: Blockly.ScratchBlocks.ProcedureUtils.getGlobal,
  setGlobal: Blockly.ScratchBlocks.ProcedureUtils.setGlobal,
  addLabelExternal: Blockly.ScratchBlocks.ProcedureUtils.addLabelExternal,
  addBooleanExternal: Blockly.ScratchBlocks.ProcedureUtils.addBooleanExternal,
  addCommandExternal: Blockly.ScratchBlocks.ProcedureUtils.addCommandExternal,
  addArgumentExternal: Blockly.ScratchBlocks.ProcedureUtils.addArgumentExternal,
  onChangeFn: Blockly.ScratchBlocks.ProcedureUtils.updateDeclarationProcCode_,

  //pm
  getForceOutput: Blockly.ScratchBlocks.ProcedureUtils.getForceOutput,
  setForceOutput: Blockly.ScratchBlocks.ProcedureUtils.setForceOutput
};

Blockly.Blocks['argument_reporter_boolean'] = {
  init: function() {
    this.jsonInit({ "message0": " %1",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "VALUE",
          "text": ""
        }
      ],
      "canDragDuplicate": true,
      "extensions": ["colours_more", "output_boolean", "procedure_custom_color"]
    });
  }
};

Blockly.Blocks['argument_reporter_string_number'] = {
  init: function() {
    this.jsonInit({ "message0": " %1",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "VALUE",
          "text": ""
        }
      ],
      "canDragDuplicate": true,
      "extensions": ["colours_more", "output_number", "output_any", "procedure_custom_color"]
    });
  }
};

Blockly.Blocks['argument_reporter_command'] = {
  init: function () {
    this.jsonInit({ "message0": " %1",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "VALUE",
          "text": ""
        }
      ],
      "canDragDuplicate": true,
      "extensions": ["colours_more", "shape_statement", "procedure_custom_color"],
    });
  },
  updateDisplay_: Blockly.ScratchBlocks.ProcedureUtils.argumentReporterUpdateDisplay,
  mutationToDom: Blockly.ScratchBlocks.ProcedureUtils.argumentReporterMutationToDom,
  domToMutation: Blockly.ScratchBlocks.ProcedureUtils.argumentReporterDomToMutation
};

Blockly.Blocks['argument_editor_boolean'] = {
  init: function() {
    this.jsonInit({ "message0": " %1",
      "args0": [
        {
          "type": "field_input_removable",
          "name": "TEXT",
          "text": "foo"
        }
      ],
      "extensions": ["colours_textfield", "output_boolean"]
    });
  },
  // Exist on declaration and arguments editors, with different implementations.
  removeFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.removeArgumentCallback_,
  shiftFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.shiftArgumentCallback_
};

Blockly.Blocks['argument_editor_string_number'] = {
  init: function() {
    this.jsonInit({ "message0": " %1",
      "args0": [
        {
          "type": "field_input_removable",
          "name": "TEXT",
          "text": "foo"
        }
      ],
      "extensions": ["colours_textfield", "output_number", "output_string"]
    });
  },
  // Exist on declaration and arguments editors, with different implementations.
  removeFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.removeArgumentCallback_,
  shiftFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.shiftArgumentCallback_
};

Blockly.Blocks['argument_editor_command'] = {
  init: function () {
    this.jsonInit({ "message0": " %1",
      "args0": [
        {
          "type": "field_input_removable",
          "name": "TEXT",
          "text": "foo"
        }
      ],
      "colour": Blockly.Colours.textField,
      "enableContextMenu": false,
      "extensions": ["colours_more", "shape_statement"],
    });
  },
  // Exist on declaration and arguments editors, with different implementations.
  removeFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.removeArgumentCallback_,
  shiftFieldCallback: Blockly.ScratchBlocks.ProcedureUtils.shiftArgumentCallback_
};

Blockly.Blocks['procedures_set'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_PROCEDURES_SET,
      "args0": [
        {
          "type": "input_value",
          "name": "PARAM"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_more", "shape_statement", "procedure_custom_color"]
    });
  }
};

Blockly.Blocks['procedures_reevaluate'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PM_PROCEDURES_REEVALUATE,
      "args0": [
        {
          "type": "input_value",
          "name": "PARAM"
        }
      ],
      "extensions": ["colours_more", "shape_statement", "procedure_custom_color"]
    });
  }
};

Blockly.Blocks['procedures_return'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PROCEDURES_RETURN,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_more", "shape_end", "procedure_custom_color"]
    });
    this.workspace.enableProcedureReturns();
  }
};

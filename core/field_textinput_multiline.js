'use strict';

goog.provide('Blockly.FieldTextInputMultiline');

goog.require('Blockly.BlockSvg.render');
goog.require('Blockly.FieldTextInput');

Blockly.FieldTextInputMultiline = function(text, opt_validator, opt_restrictor) {
    Blockly.FieldTextInputMultiline.superClass_.constructor.call(this, text, opt_validator);
};
goog.inherits(Blockly.FieldTextInputMultiline, Blockly.FieldTextInput);

Blockly.FieldTextInputMultiline.prototype.init = function() {
    Blockly.FieldTextInputMultiline.superClass_.init.call(this);
    this.textElement_.setAttribute('text-anchor', 'left')
}

Blockly.FieldTextInputMultiline.prototype.showEditor_ = function(
    opt_quietInput, opt_readOnly, opt_withArrow, opt_arrowCallback) {
  this.workspace_ = this.sourceBlock_.workspace;
  var quietInput = opt_quietInput || false;
  var readOnly = opt_readOnly || false;
  Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL,
      this.widgetDispose_(), this.widgetDisposeAnimationFinished_(),
      Blockly.FieldTextInputMultiline.ANIMATION_TIME);
  var div = Blockly.WidgetDiv.DIV;
  // Apply text-input-specific fixed CSS
  div.className += ' fieldTextInput';
  // Create the input.
  var htmlInput =
      goog.dom.createDom(this.sourceBlock_ && this.sourceBlock_.isInFlyout ? goog.dom.TagName.INPUT : goog.dom.TagName.TEXTAREA, 'blocklyHtmlInput');
  htmlInput.setAttribute('spellcheck', this.spellcheck_);
  if (readOnly) {
    htmlInput.setAttribute('readonly', 'true');
  }
  /** @type {!HTMLInputElement} */
  Blockly.FieldTextInput.htmlInput_ = htmlInput;
  div.appendChild(htmlInput);

  if (opt_withArrow) {
    // Move text in input to account for displayed drop-down arrow.
    if (this.sourceBlock_.RTL) {
      htmlInput.style.paddingLeft = (this.arrowSize_ + Blockly.BlockSvg.DROPDOWN_ARROW_PADDING) + 'px';
    } else {
      htmlInput.style.paddingRight = (this.arrowSize_ + Blockly.BlockSvg.DROPDOWN_ARROW_PADDING) + 'px';
    }
    // Create the arrow.
    var dropDownArrow =
        goog.dom.createDom(goog.dom.TagName.IMG, 'blocklyTextDropDownArrow');
    dropDownArrow.setAttribute('src',
        Blockly.mainWorkspace.options.pathToMedia + 'dropdown-arrow-dark.svg');
    dropDownArrow.style.width = this.arrowSize_ + 'px';
    dropDownArrow.style.height = this.arrowSize_ + 'px';
    dropDownArrow.style.top = this.arrowY_ + 'px';
    dropDownArrow.style.cursor = 'pointer';
    // Magic number for positioning the drop-down arrow on top of the text editor.
    var dropdownArrowMagic = '11px';
    if (this.sourceBlock_.RTL) {
      dropDownArrow.style.left = dropdownArrowMagic;
    } else {
      dropDownArrow.style.right = dropdownArrowMagic;
    }
    if (opt_arrowCallback) {
      htmlInput.dropDownArrowMouseWrapper_ = Blockly.bindEvent_(dropDownArrow,
          'mousedown', this, opt_arrowCallback);
    }
    div.appendChild(dropDownArrow);
  }

  htmlInput.value = htmlInput.defaultValue = this.text_;
  htmlInput.oldValue_ = null;
  this.validate_();
  this.resizeEditor_();
  if (!quietInput) {
    htmlInput.focus();
    htmlInput.select();
    // For iOS only
    htmlInput.setSelectionRange(0, 99999);
  }

  this.bindEvents_(htmlInput, quietInput || readOnly);

  // Add animation transition properties
  var transitionProperties = 'box-shadow ' + Blockly.FieldTextInputMultiline.ANIMATION_TIME + 's';
  if (Blockly.BlockSvg.FIELD_TEXTINPUT_ANIMATE_POSITIONING) {
    div.style.transition += ',padding ' + Blockly.FieldTextInputMultiline.ANIMATION_TIME + 's,' +
      'width ' + Blockly.FieldTextInputMultiline.ANIMATION_TIME + 's,' +
      'height ' + Blockly.FieldTextInputMultiline.ANIMATION_TIME + 's,' +
      'margin-left ' + Blockly.FieldTextInputMultiline.ANIMATION_TIME + 's';
  }
  div.style.transition = transitionProperties;
  htmlInput.style.transition = 'font-size ' + Blockly.FieldTextInputMultiline.ANIMATION_TIME + 's';
  // The animated properties themselves
  htmlInput.style.fontSize = Blockly.BlockSvg.FIELD_TEXTINPUT_FONTSIZE_FINAL + 'pt';
  htmlInput.style.overflow = 'hidden';
  htmlInput.style.resize = 'none';
  htmlInput.style.textAlign = 'left';
  if (this.sourceBlock_ && !this.sourceBlock_.isInFlyout) htmlInput.style.paddingTop = '0.375em';
  div.style.boxShadow = '0px 0px 0px 4px ' + Blockly.Colours.fieldShadow;
};

Blockly.FieldTextInputMultiline.prototype.resizeEditor_ = function() {
  var scale = this.sourceBlock_.workspace.scale;
  var div = Blockly.WidgetDiv.DIV;

  var initialWidth;
  if (this.sourceBlock_.isShadow()) {
    initialWidth = this.sourceBlock_.getHeightWidth().width * scale;
  } else {
    initialWidth = this.size_.width * scale;
  }

  var height;
  if (this.sourceBlock_.isShadow()) {
    height = this.sourceBlock_.getHeightWidth().height * scale;
  } else {
    height = this.size_.height * scale;
  }

  var width;
  if (Blockly.BlockSvg.FIELD_TEXTINPUT_EXPAND_PAST_TRUNCATION) {
    // Resize the box based on the measured width of the text, pre-truncation
    var textWidth = Blockly.scratchBlocksUtils.measureText(
        Blockly.FieldTextInput.htmlInput_.style.fontSize,
        Blockly.FieldTextInput.htmlInput_.style.fontFamily,
        Blockly.FieldTextInput.htmlInput_.style.fontWeight,
        Blockly.FieldTextInput.htmlInput_.value
    );
    // Size drawn in the canvas needs padding and scaling
    textWidth += Blockly.FieldTextInput.TEXT_MEASURE_PADDING_MAGIC;
    textWidth *= scale;
    width = textWidth;
  } else {
    // Set width to (truncated) block size.
    width = initialWidth;
  }
  // The width must be at least FIELD_WIDTH and at most FIELD_WIDTH_MAX_EDIT
  width = Math.max(width, Blockly.BlockSvg.FIELD_WIDTH_MIN_EDIT * scale);
  width = Math.min(width, Blockly.BlockSvg.FIELD_WIDTH_MAX_EDIT * scale);
  // Add 1px to width and height to account for border (pre-scale)
  div.style.width = (width / scale + 1) + 'px';
  div.style.height = (height / scale + 1) + 'px';
  div.style.transform = 'scale(' + scale + ')';

  // Use margin-left to animate repositioning of the box (value is unscaled).
  // This is the difference between the default position and the positioning
  // after growing the box.
  div.style.marginLeft = -0.5 * (width - initialWidth) + 'px';

  // Add 0.5px to account for slight difference between SVG and CSS border
  var borderRadius = this.getBorderRadius() + 0.5;
  div.style.borderRadius = borderRadius + 'px';
  Blockly.FieldTextInput.htmlInput_.style.borderRadius = borderRadius + 'px';
  // Pull stroke colour from the existing shadow block
  var strokeColour = this.sourceBlock_.getColourTertiary();
  div.style.borderColor = strokeColour;

  var xy = this.getAbsoluteXY_();
  // Account for border width, post-scale
  xy.x -= scale / 2;
  xy.y -= scale / 2;
  // In RTL mode block fields and LTR input fields the left edge moves,
  // whereas the right edge is fixed.  Reposition the editor.
  if (this.sourceBlock_.RTL) {
    xy.x += width;
    xy.x -= div.offsetWidth * scale;
    xy.x += 1 * scale;
  }
  // Shift by a few pixels to line up exactly.
  xy.y += 1 * scale;
  if (goog.userAgent.GECKO && Blockly.WidgetDiv.DIV.style.top) {
    // Firefox mis-reports the location of the border by a pixel
    // once the WidgetDiv is moved into position.
    xy.x += 2 * scale;
    xy.y += 1 * scale;
  }
  if (goog.userAgent.WEBKIT) {
    xy.y -= 1 * scale;
  }

  // Finally, set the actual style
  div.style.left = xy.x + 'px';
  div.style.top = xy.y + 'px';
  
  if (this.sourceBlock_) {
    let customShape = Blockly.BlockSvg.CUSTOM_SHAPES.get(this.sourceBlock_.getOutputShape());
    if (customShape && !customShape.noEdgeShape) {
      Blockly.FieldTextInput.htmlInput_.style.paddingLeft = (customShape.edgeShapeWidth ? customShape.edgeShapeWidth(this.size_.height / 2) : this.size_.height / 2) / 2 + Blockly.BlockSvg.GRID_UNIT + "px";
    }
  }
};

Blockly.FieldTextInputMultiline.prototype.render_ = function() {
  if (this.visible_ && this.textElement_) {
    // Replace the text.
    this.textElement_.textContent = this.getDisplayText_();
    const old = this.textElement_.innerHTML;
    this.textElement_.innerHTML = this.textElement_.innerHTML.split('\n').map((v, i) => `<tspan x="0" dy="${i === 0 ? '-0.125em' : '1.2em'}">${v || Blockly.Field.NBSP}</tspan>`).join("");
    this.updateHeight();
    this.updateWidth();

    let offset = 0;
    if (this.sourceBlock_) {
      let customShape = Blockly.BlockSvg.CUSTOM_SHAPES.get(this.sourceBlock_.getOutputShape());
      if (customShape && !customShape.noEdgeShape) {
        offset += (customShape.edgeShapeWidth ? customShape.edgeShapeWidth(this.size_.height / 2) : this.size_.height / 2) / 2
      }
    }

    this.textElement_.innerHTML = old.split('\n').map((v, i) => `<tspan x="${offset - Blockly.BlockSvg.GRID_UNIT}" dy="${i === 0 ? '-0.125em' : '1.2em'}">${v || Blockly.Field.NBSP}</tspan>`).join("");
  }

  // Update any drawn box to the correct width and height.
  if (this.box_) {
    this.box_.setAttribute('width', this.size_.width);
    this.box_.setAttribute('height', this.size_.height);
  }
};

Blockly.FieldTextInputMultiline.prototype.updateWidth = function() {
    let output = this.textElement_.getBBox().width;
    if (this.sourceBlock_) {
      let customShape = Blockly.BlockSvg.CUSTOM_SHAPES.get(this.sourceBlock_.getOutputShape());
      if (customShape && !customShape.noEdgeShape) {
        output += (customShape.edgeShapeWidth ? customShape.edgeShapeWidth(this.size_.height / 2) : this.size_.height / 2) - Blockly.BlockSvg.GRID_UNIT * 2
      }
    }
    this.size_.width = output;
}
Blockly.FieldTextInputMultiline.prototype.updateHeight = function() {
    this.size_.height = this.textElement_.getBBox().height + 3 * Blockly.BlockSvg.GRID_UNIT;
}

Blockly.FieldTextInputMultiline.prototype.onHtmlInputKeyDown_ = function(e) {
  var htmlInput = Blockly.FieldTextInput.htmlInput_;
  var tabKey = 9, enterKey = 13, escKey = 27;
  if (e.keyCode == enterKey && this.sourceBlock_ && this.sourceBlock_.isInFlyout) {
    Blockly.WidgetDiv.hide();
    Blockly.DropDownDiv.hideWithoutAnimation();
  } else if (e.keyCode == escKey) {
    htmlInput.value = htmlInput.defaultValue;
    Blockly.WidgetDiv.hide();
    Blockly.DropDownDiv.hideWithoutAnimation();
  } else if (e.keyCode == tabKey) {
    Blockly.WidgetDiv.hide();
    Blockly.DropDownDiv.hideWithoutAnimation();
    this.sourceBlock_.tab(this, !e.shiftKey);
    e.preventDefault();
  }
};

Blockly.FieldTextInputMultiline.prototype.getDisplayText_ = function() {
  var text = this.text_;
  if (!text) {
    // Prevent the field from disappearing if empty.
    return Blockly.Field.NBSP;
  }
  if (text.length > this.maxDisplayLength) {
    // Truncate displayed string and add an ellipsis ('...').
    text = text.substring(0, this.maxDisplayLength - 2) + '\u2026';
  }
  // Replace whitespace with non-breaking spaces so the text doesn't collapse.
  text = text.replace(/[^\S\r\n]/g, Blockly.Field.NBSP);
  if (this.sourceBlock_.RTL) {
    // The SVG is LTR, force text to be RTL unless a number.
    if (this.sourceBlock_.editable_ && this.sourceBlock_.type === 'math_number') {
      text = '\u202A' + text + '\u202C';
    } else {
      text = '\u202B' + text + '\u202C';
    }
  }
  return text;
};

Blockly.FieldTextInputMultiline.prototype.setText = function(newText) {
  if (newText === null) {
    // No change if null.
    return;
  }

  newText = String(newText)
    .replaceAll('\r\n', '\n')
    .replaceAll('\r', '\n');

  Blockly.FieldTextInputMultiline.superClass_.setText.call(this, newText);
};

Blockly.FieldTextInput.prototype.getBorderRadius = function() {
  if (this.sourceBlock_.getOutputShape() == Blockly.OUTPUT_SHAPE_ROUND) {
    return Math.min(this.size_.height / 2, Blockly.BlockSvg.GRID_UNIT * 7.5);
  }
  return Blockly.BlockSvg.TEXT_FIELD_CORNER_RADIUS;
};

Blockly.FieldTextInputMultiline.fromJson = function(options) {
  var text = Blockly.utils.replaceMessageReferences(options['text']) || '';
  var field = new Blockly.FieldTextInputMultiline(text, options['class']);
  if (typeof options['spellcheck'] === 'boolean') {
    field.setSpellcheck(options['spellcheck']);
  }
  return field;
};

Blockly.Field.register('field_input_multiline', Blockly.FieldTextInputMultiline);
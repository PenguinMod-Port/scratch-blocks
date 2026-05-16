goog.provide('Blockly.FieldMatrixExtendable');

goog.require('Blockly.FieldMatrix');

/**
 * @extends {Blockly.FieldMatrix}
 * @constructor
 */
Blockly.FieldMatrixExtendable = function(matrix, width = 5, minWidth = 1, maxWidth = 10, height = 5, minHeight = 1, maxHeight = 10) {
    Blockly.FieldMatrixExtendable.superClass_.constructor.call(this, matrix);

    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
};
goog.inherits(Blockly.FieldMatrixExtendable, Blockly.FieldMatrix);

Blockly.FieldMatrixExtendable.fromJson = function(options) {
  return new Blockly.FieldMatrixExtendable(options['matrix'], options['width'], options['height'], options['minWidth'], options['maxWidth'], options['minHeight'], options['maxHeight']);
};

Blockly.Field.register('field_matrix_extendable', Blockly.FieldMatrixExtendable);
/**
 * @fileoverview Brick blocks for PHOTON.
 * @requires Blockly.Blocks
 * @author Janis
 */
'use strict';

goog.provide('Blockly.Blocks.photonBrick');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

Blockly.Blocks['photonBrick_PHOTON-Brick'] = {
    /**
     * PHOTON brick.
     *
     * @constructs photonBrick_PHOTON_brick
     * @memberof Block
     */

    init : function() {
        this.setColour('#BBBBBB');
        this.setInputsInline(false);
        this.appendDummyInput().appendField(new Blockly.FieldLabel('PHOTON', 'brick_label'));
        this.setTooltip(Blockly.Msg.PHOTONBRICK_TOOLTIP);
        this.setDeletable(false);
    }
};

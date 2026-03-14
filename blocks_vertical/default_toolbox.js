/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

/**
 * NOTE: This is only used in the scratch-blocks development playground!
 * The XML here is overridden by scratch-gui.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="motion_movesteps" id="motion_movesteps">' +
      '<value name="STEPS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_movebacksteps" id="motion_movebacksteps">' +
    '  <value name="STEPS">' +
    '    <shadow type="math_number" />' +
    '  </value>' +
    '</block>' +
    '<block type="motion_moveupdownsteps" id="motion_moveupdownsteps">' +
    '  <value name="STEPS">' +
    '    <shadow type="math_number" />' +
    '  </value>' +
    '</block>' +
    '<block type="motion_turnright" id="motion_turnright">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnleft" id="motion_turnleft">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnrightaroundxy" id="motion_turnrightaroundxy">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="X">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="Y">' +
        '<shadow type="math_number" />' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnleftaroundxy" id="motion_turnleftaroundxy">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="X">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="Y">' +
        '<shadow type="math_number" />' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnaround" />' +
    '<block type="motion_pointindirection" id="motion_pointindirection">' +
      '<value name="DIRECTION">' +
        '<shadow type="math_angle">' +
          '<field name="NUM">90</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointtowards" id="motion_pointtowards">' +
      '<value name="TOWARDS">' +
        '<shadow type="motion_pointtowards_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointtowardsxy" id="motion_pointtowards_xy">' +
      '<value name="X">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointinrandomdirection" />' +
    '<block type="motion_gotoxy" id="motion_gotoxy">' +
      '<value name="X">' +
        '<shadow id="movex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="movey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_goto" id="motion_goto">' +
      '<value name="TO">' +
        '<shadow type="motion_goto_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glidesecstoxy" id="motion_glidesecstoxy">' +
      '<value name="SECS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="X">' +
        '<shadow id="glidex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="glidey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glideto" id="motion_glideto">' +
      '<value name="SECS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="motion_glideto_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glidedirectionstepsinseconds">' +
    '  <value name="STEPS">' +
    '    <shadow type="math_number" />' +
    '  </value>' +
    '  <value name="SECS">' +
    '    <shadow type="math_number" />' +
    '  </value>' +
    '</block>' +
    '<block type="motion_changexby" id="motion_changexby">' +
      '<value name="DX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_setx" id="motion_setx">' +
      '<value name="X">' +
        '<shadow id="setx" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_changeyby" id="motion_changeyby">' +
      '<value name="DY">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_sety" id="motion_sety">' +
      '<value name="Y">' +
        '<shadow id="sety" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_changebyxy" id="motion_changeyby">' +
      '<value name="DX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DY">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_move_sprite_to_scene_side" id="motion_move_sprite_to_scene_side"></block>' +
    '<block type="motion_ifonedgebounce" id="motion_ifonedgebounce"></block>' +
    '<block type="motion_ifonspritebounce" id="motion_ifonspritebounce">' +
      '<value name="SPRITE">' +
        '<shadow type="motion_ifonspritebounce_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_ifonxybounce" id="motion_ifonxybounce">' +
      '<value name="X">' +
        '<shadow id="movex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="movey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_setrotationstyle" id="motion_setrotationstyle"></block>' +
    '<block type="motion_xposition" id="motion_xposition"></block>' +
    '<block type="motion_yposition" id="motion_yposition"></block>' +
    '<block type="motion_direction" id="motion_direction"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">' +
    '<block type="looks_show" id="looks_show"></block>' +
    '<block type="looks_hide" id="looks_hide"></block>' +
    '<block type="looks_changeVisibilityOfSprite">' +
    '<field name="VISIBLE_TYPE">show</field>' +
    '  <value name="VISIBLE_OPTION">' +
    '    <shadow type="looks_changeVisibilityOfSprite_menu"></shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="looks_changeVisibilityOfSpriteShow">' +
    '  <value name="VISIBLE_OPTION">' +
    '    <shadow type="looks_changeVisibilityOfSprite_menu"></shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="looks_changeVisibilityOfSpriteHide">' +
    '  <value name="VISIBLE_OPTION">' +
    '    <shadow type="looks_changeVisibilityOfSprite_menu"></shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="looks_switchcostumeto" id="looks_switchcostumeto">' +
      '<value name="COSTUME">' +
        '<shadow type="looks_costume"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_nextcostume" id="looks_nextcostume"></block>' +
    '<block type="looks_nextbackdrop" id="looks_nextbackdrop"></block>' +
    '<block type="looks_switchbackdropto" id="looks_switchbackdropto">' +
      '<value name="BACKDROP">' +
        '<shadow type="looks_backdrops"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_switchbackdroptoandwait" id="looks_switchbackdroptoandwait">' +
      '<value name="BACKDROP">' +
        '<shadow type="looks_backdrops"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_changeeffectby" id="looks_changeeffectby">' +
      '<value name="CHANGE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_seteffectto" id="looks_seteffectto">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_cleargraphiceffects" id="looks_cleargraphiceffects"></block>' +
    '<block type="looks_changesizeby" id="looks_changesizeby">' +
      '<value name="CHANGE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_setsizeto" id="looks_setsizeto">' +
      '<value name="SIZE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_gotofrontback" id="looks_gotofrontback"></block>' +
    '<block type="looks_goforwardbackwardlayers" id="looks_goforwardbackwardlayers">' +
      '<value name="NUM">' +
        '<shadow type="math_integer">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_costumenumbername" id="looks_costumenumbername"></block>' +
    '<block type="looks_backdropnumbername" id="looks_backdropnumbername"></block>' +
    '<block type="looks_size" id="looks_size"></block>' +
    '<block type="looks_stoptalking" />' +
    '<block type="looks_setStretch">' +
      '<value name="X">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_changeStretch">' +
      '<value name="X">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_stretchGetX" />' +
    '<block type="looks_stretchGetY" />' +
    '<block type="looks_setTintColor">' +
    '  <value name="color">' +
    '    <shadow type="colour_picker" />' +
    '  </value>' +
    '</block>' +
    '<block type="looks_tintColor" />' +
    '<block type="looks_previouscostume" />' +
    '<block type="looks_previousbackdrop" />' +
    '<block type="looks_getOtherSpriteVisible">' +
    '  <value name="VISIBLE_OPTION">' +
    '    <shadow type="looks_getOtherSpriteVisible_menu">' +
    '      <field name="VISIBLE_OPTION">_myself_</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="looks_getinputofcostume">' +
    '  <value name="INPUT">' +
    '    <shadow type="looks_getinput_menu">' +
    '      <field name="INPUT">width</field>' +
    '    </shadow>' +
    '  </value>' +
    '  <value name="COSTUME">' +
    '    <shadow type="looks_costume" />' +
    '  </value>' +
    '</block>' +
    '<block type="looks_goTargetLayer">' +
    '  <value name="VISIBLE_OPTION">' +
    '    <shadow type="looks_getOtherSpriteVisible_menu" />' +
    '  </value>' +
    '</block>' +
    '<block type="looks_layersSetLayer">' +
    '  <value name="NUM">' +
    '    <shadow type="math_number">' +
    '      <field name="NUM">1</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="looks_layersGetLayer" />' +
    '<block type="looks_getEffectValue" />' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">' +
    '<block type="sound_play" id="sound_play">' +
      '<value name="SOUND_MENU">' +
        '<shadow type="sound_sounds_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_playuntildone" id="sound_playuntildone">' +
      '<value name="SOUND_MENU">' +
        '<shadow type="sound_sounds_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_stopallsounds" id="sound_stopallsounds"></block>' +
    '<block type="sound_changeeffectby" id="sound_changeeffectby">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_seteffectto" id="sound_seteffectto">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_cleareffects" id="sound_cleareffects"></block>' +
    '<block type="sound_changevolumeby" id="sound_changevolumeby">' +
      '<value name="VOLUME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">-10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_setvolumeto" id="sound_setvolumeto">' +
      '<value name="VOLUME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_volume" id="sound_volume"></block>' +
    '<block type="sound_stop">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_pause">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_set_stop_fadeout_to">' +
    '  <value name="VALUE">' +
    '    <shadow type="math_number">' +
    '      <field name="NUM">1</field>' +
    '    </shadow>' +
    '  </value>' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_play_at_seconds">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '  <value name="VALUE">' +
    '    <shadow type="math_number">' +
    '      <field name="NUM">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_play_at_seconds_until_done">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '  <value name="VALUE">' +
    '    <shadow type="math_number">' +
    '      <field name="NUM">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_pauseallsounds" />' +
    '<block type="sound_playallsounds" />' +
    '<block type="sound_getEffectValue" />' +
    '<block type="sound_isSoundPlaying">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_getLength">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_getTimePosition">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
    '<block type="sound_getSoundVolume">' +
    '  <value name="SOUND_MENU">' +
    '    <shadow type="sound_sounds_menu">' +
    '      <field name="SOUND_MENU">0</field>' +
    '    </shadow>' +
    '  </value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>' +
    '<block type="event_whenkeypressed" id="event_whenkeypressed"></block>' +
    '<block type="event_whenthisspriteclicked" id="event_whenthisspriteclicked"></block>' +
    '<block type="event_whenbackdropswitchesto" id="event_whenbackdropswitchesto">' +
    '</block>' +
    '<block type="event_whengreaterthan" id="event_whengreaterthan">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_whenbroadcastreceived" id="event_whenbroadcastreceived">' +
    '</block>' +
    '<block type="event_broadcast" id="event_broadcast">' +
      '<value name="BROADCAST_INPUT">' +
        '<shadow type="event_broadcast_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_broadcastandwait" id="event_broadcastandwait">' +
      '<value name="BROADCAST_INPUT">' +
        '<shadow type="event_broadcast_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_always" />' +
    '<block type="event_whenanything">' + 
      '<value name="ANYTHING">' +
        '<shadow type="checkbox" />' +
      '</value>' +
    '</block>' +
    '<block type="event_whenstopclicked" />' +
    '<block type="event_whenmousescrolled" />' +
    '<block type="event_whenkeyhit" />' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">' +
    '<block type="control_wait" id="control_wait">' +
      '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_repeat" id="control_repeat">' +
      '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_forever" id="control_forever"></block>' +
    '<block type="control_expandableIf" />' +
    '<block type="control_expandableIf">' +
      '<field name="EXPANDABLE">2</field>' +
    '</block>' +
    '<block type="control_wait_until" id="control_wait_until"></block>' +
    '<block type="control_repeat_until" id="control_repeat_until"></block>' +
    '<block type="control_stop" id="control_stop"></block>' +
    '<block type="control_start_as_clone" id="control_start_as_clone"></block>' +
    '<block type="control_create_clone_of" id="control_create_clone_of">' +
      '<value name="CLONE_OPTION">' +
        '<shadow type="control_create_clone_of_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_delete_this_clone" id="control_delete_this_clone"></block>' +
    '<block type="control_inline_stack_output">' + 
      '<statement name="SUBSTACK">' +
        '<block type="procedures_return">' +
          '<value name="VALUE">' +
            '<shadow type="text"></shadow>' +
          '</value>' +
        '</block>' +
      '</statement>' +
    '</block>' +
    '<block type="control_try_catch">' +
      '<value name="SHADOW">' +
        '<shadow type="control_error" />' +
      '</value>' +
    '</block>' +
    '<block type="control_throw_error">' +
      '<value name="ERROR">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="control_if_return_else_return">' + 
      '<value name="boolean">' +
        '<shadow type="checkbox" />' +
      '</value>' +
      '<value name="TEXT1">' +
        '<shadow type="text"></shadow>' +
      '</value>' +
      '<value name="TEXT2">' +
        '<shadow type="text"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_exitLoop" />' +
    '<block type="control_continueLoop" />' +
    '<block type="control_waitsecondsoruntil">' +
      '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_delete_clones_of">' +
      '<value name="CLONE_OPTION">' +
        '<shadow type="control_create_clone_of_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_is_clone" />' +
    '<block type="control_backToGreenFlag" />' +
    '<block type="control_restartproject" />' +
    '<block type="control_repeatForSeconds">' +
      '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_waittick" />' +
    '<block type="control_switch">' +
      '<value name="CONDITION">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="control_switch_default">' +
      '<value name="CONDITION">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="control_case">' +
      '<value name="CONDITION">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="control_case_next">' +
      '<value name="CONDITION">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="control_exitCase" />' +
    '<block type="control_from_to">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="SHADOW">' +
        '<shadow type="control_from_to_index" />' +
      '</value>' +
    '</block>' +
    '<block type="control_decr_counter" />' +
    '<block type="control_set_counter">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_do_while">' +
      '<value name="CONDITION">' +
        '<shadow type="checkbox" />' +
      '</value>' +
    '</block>' +
    '<block type="control_run_as_sprite">' +
    '  <value name="RUN_AS_OPTION">' +
    '    <shadow type="control_run_as_sprite_menu"/>' +
    '  </value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">' +
    '<block type="sensing_touchingobject" id="sensing_touchingobject">' +
      '<value name="TOUCHINGOBJECTMENU">' +
        '<shadow type="sensing_touchingobjectmenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_touchingcolor" id="sensing_touchingcolor">' +
      '<value name="COLOR">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_coloristouchingcolor" id="sensing_coloristouchingcolor">' +
      '<value name="COLOR">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
      '<value name="COLOR2">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_distanceto" id="sensing_distanceto">' +
      '<value name="DISTANCETOMENU">' +
        '<shadow type="sensing_distancetomenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_keypressed" id="sensing_keypressed">' +
        '<value name="KEY_OPTION">' +
          '<shadow type="sensing_keyoptions"></shadow>' +
        '</value>' +
    '</block>' +
    '<block type="sensing_mousedown" id="sensing_mousedown"></block>' +
    '<block type="sensing_mousex" id="sensing_mousex"></block>' +
    '<block type="sensing_mousey" id="sensing_mousey"></block>' +
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>' +
    '<block type="sensing_loudness" id="sensing_loudness"></block>' +
    '<block type="sensing_timer" id="sensing_timer"></block>' +
    '<block type="sensing_resettimer" id="sensing_resettimer"></block>' +
    '<block type="sensing_of" id="sensing_of">' +
      '<value name="OBJECT">' +
        '<shadow type="sensing_of_object_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_current" id="sensing_current"></block>' +
    '<block type="sensing_dayssince2000" id="sensing_dayssince2000"></block>' +
    '<block type="sensing_online" id="sensing_online"></block>' +
    '<block type="sensing_username" id="sensing_username"></block>' +
    '<block type="sensing_thing_has_number">' +
      '<value name="TEXT1">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="sensing_thing_has_text">' +
      '<value name="TEXT1">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="sensing_thing_is_number">' +
      '<value name="TEXT1">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="sensing_thing_is_text">' +
      '<value name="TEXT1">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="sensing_objecttouchingclonesprite">' +
    '  <value name="FULLTOUCHINGOBJECTMENU">' +
    '    <shadow type="sensing_fulltouchingobjectmenu"/>' +
    '  </value>' +
    '  <value name="SPRITETOUCHINGOBJECTMENU">' +
    '    <shadow type="sensing_touchingobjectmenusprites"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_objecttouchingobject">' +
    '  <value name="FULLTOUCHINGOBJECTMENU">' +
    '    <shadow type="sensing_fulltouchingobjectmenu"/>' +
    '  </value>' +
    '  <value name="SPRITETOUCHINGOBJECTMENU">' +
    '    <shadow type="sensing_touchingobjectmenusprites"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_keyhit">' +
    '  <value name="KEY_OPTION">' +
    '    <shadow type="sensing_keyoptions"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_mousescrolling">' +
    '  <value name="SCROLL_OPTION">' +
    '    <shadow type="sensing_scrolldirections"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_mouseclicked"/>' +
    '<block type="sensing_fingerdown">' +
    '  <value name="FINGER_OPTION">' +
    '    <shadow type="sensing_fingeroptions"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_fingertapped">' +
    '  <value name="FINGER_OPTION">' +
    '    <shadow type="sensing_fingeroptions"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_fingerx">' +
    '  <value name="FINGER_OPTION">' +
    '    <shadow type="sensing_fingeroptions"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_fingery">' +
    '  <value name="FINGER_OPTION">' +
    '    <shadow type="sensing_fingeroptions"/>' +
    '  </value>' +
    '</block>' +
    '<block type="sensing_distanceTo">' +
    '  <value name="x1"><shadow type="math_number"/></value>' +
    '  <value name="y1"><shadow type="math_number"/></value>' +
    '  <value name="x2"><shadow type="math_number"/></value>' +
    '  <value name="y2"><shadow type="math_number"/></value>' +
    '</block>' +
    '<block type="sensing_directionTo">' +
    '  <value name="x2"><shadow type="math_number"/></value>' +
    '  <value name="y2"><shadow type="math_number"/></value>' +
    '  <value name="x1"><shadow type="math_number"/></value>' +
    '  <value name="y1"><shadow type="math_number"/></value>' +
    '</block>' +
    '<block type="sensing_operatingsystem"/>' +
    '<block type="sensing_browser"/>' +
    '<block type="sensing_url"/>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">' +
    '<block type="operator_add" id="operator_add">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_subtract" id="operator_subtract">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_multiply" id="operator_multiply">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_divide" id="operator_divide">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_random" id="operator_random">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_lt" id="operator_lt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_equals" id="operator_equals">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_gt" id="operator_gt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_and" id="operator_and"></block>' +
    '<block type="operator_or" id="operator_or"></block>' +
    '<block type="operator_xor"></block>' +
    '<block type="operator_xnor"></block>' +
    '<block type="operator_nand"></block>' +
    '<block type="operator_nor"></block>' +
    '<block type="operator_not" id="operator_not"></block>' +
    '<block type="operator_join" id="operator_join">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_letter_of" id="operator_letter_of">' +
      '<value name="LETTER">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_length" id="operator_length">' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_contains" id="operator_contains">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mod" id="operator_mod">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_round" id="operator_round">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mathop" id="operator_mathop">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_stringify" id="operator_stringify">' +
      '<value name="ONE">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_boolify" id="operator_boolify">' +
      '<value name="ONE">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_checkboxBoolean" id="operator_checkboxBoolean"></block>' +
    '<block type="operator_trueBoolean"></block>' +
    '<block type="operator_falseBoolean"></block>' +
    '<block type="operator_valid_type">' +
      '<value name="TEXT">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
    '<block type="operator_power">' +
      '<value name="NUM1">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number" />' +
      '</value>' +
    '</block>' +
    '<block type="operator_constrainnumber">' +
      '<value name="inp">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="min">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="max">' +
        '<shadow type="math_number" />' +
      '</value>' +
    '</block>' +
    '<block type="operator_lerpFunc">' +
      '<value name="ONE">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="TWO">' +
        '<shadow type="math_number" />' +
      '</value>' +
      '<value name="AMOUNT">' +
        '<shadow type="math_number" />' +
      '</value>' +
    '</block>' +
    '<block type="operator_join3">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">apple </field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">banana </field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING3">' +
        '<shadow type="text">' +
          '<field name="TEXT">pear</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_gtorequal">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_ltorequal">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_notequal">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_null" />' +
    '<block type="operator_newLine" />' +
    '<block type="operator_tabCharacter" />' +
    '<block type="operator_expandablejoininputs">' +
      '<field name="EXPANDABLE">2</field>' +
      '<value name="INPUT1">' +
        '<shadow type="text">' +
          '<field name="TEXT">apple</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="INPUT2">' +
        '<shadow type="text">' +
          '<field name="TEXT">banana</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_range_expandable" />' +
    '<block type="operator_expandableMath" />' +
    '<block type="operator_toUpperLowerCase">' +
      '<value name="TEXT">' +
        '<shadow type="text" />' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">' +
  '</category>' +
  '<category name="%{BKY_PM_CATEGORY_LISTS}" id="list" colour="#FF661A" secondaryColour="#FF5500" custom="LIST">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_MYBLOCKS}" id="more" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">' +
  '</category>' +
  '<category name="Extensions" id="extensions" colour="#FF6680" secondaryColour="#FF4D6A" ' +
    'iconURI="../media/extensions/wedo2-block-icon.svg" showStatusButton="true">' +
    '<block type="extension_pen_down" id="extension_pen_down"></block>' +
    '<block type="extension_music_drum" id="extension_music_drum">' +
      '<value name="NUMBER">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '</block>' +
    '<block type="extension_wedo_motor" id="extension_wedo_motor"></block>' +
    '<block type="extension_wedo_hat" id="extension_wedo_hat"></block>' +
    '<block type="extension_wedo_boolean" id="extension_wedo_boolean"></block>' +
    '<block type="extension_wedo_tilt_reporter" id="extension_wedo_reporter">' +
      '<value name="TILT">' +
        '<shadow type="extension_wedo_tilt_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="extension_music_reporter" id="extension_music_reporter"></block>' +
    '<block type="extension_microbit_display" id="extension_microbit_display">' +
      '<value name="MATRIX">' +
        '<shadow type="matrix">' +
          '<field name="MATRIX">0101010101100010101000100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="extension_microbit_display" id="extension_microbit_display">' +
      '<value name="MATRIX">' +
        '<shadow type="matrix">' +
          '<mutation width="10" height="10"></mutation>' +
          '<field name="MATRIX">0110000110111100111111111111111111111111111111111111111111110111111110001111110000011110000000110000</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="extension_music_play_note" id="extension_music_play_note">' +
      '<value name="NOTE">' +
        '<shadow type="note">' +
          '<field name="NOTE">60</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="BEATS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0.25</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '</xml>';

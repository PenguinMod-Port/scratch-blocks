/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 * IMPORTANT:
 * All message strings must use single quotes for the scripts to work properly
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'forever';
Blockly.Msg.CONTROL_REPEAT = 'repeat %1';
Blockly.Msg.CONTROL_IF = 'if %1 then';
Blockly.Msg.CONTROL_ELSE = 'else';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'wait %1 seconds';
Blockly.Msg.CONTROL_WAITUNTIL = 'wait until %1';
Blockly.Msg.CONTROL_REPEATUNTIL = 'repeat until %1';
Blockly.Msg.CONTROL_WHILE = 'while %1';
Blockly.Msg.CONTROL_FOREACH = 'for each %1 in %2';
Blockly.Msg.CONTROL_STARTASCLONE = 'when I start as a clone';
Blockly.Msg.CONTROL_CREATECLONEOF = 'create clone of %1';
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = 'myself';
Blockly.Msg.CONTROL_DELETETHISCLONE = 'delete this clone';
Blockly.Msg.CONTROL_COUNTER = 'counter';
Blockly.Msg.CONTROL_INCRCOUNTER = 'increment counter';
Blockly.Msg.CONTROL_CLEARCOUNTER = 'clear counter';
Blockly.Msg.CONTROL_ALLATONCE = 'all at once';

Blockly.Msg.PM_CONTROL_CASE = 'case %1 %2';
Blockly.Msg.PM_CONTROL_CASE_DEFAULT = 'default';
Blockly.Msg.PM_CONTROL_CASE_EXIT = 'exit case %1';
Blockly.Msg.PM_CONTROL_CASE_NEXT = 'run next case when %1';
Blockly.Msg.PM_CONTROL_CASE_SWITCH = 'switch %1 %2';
Blockly.Msg.PM_CONTROL_CONTINUELOOP = 'continue loop %1';
Blockly.Msg.PM_CONTROL_DECRCOUNTER = 'decrement counter';
Blockly.Msg.PM_CONTROL_DELETECLONESOF = 'delete clones of %1';
Blockly.Msg.PM_CONTROL_ESCAPELOOP = 'escape loop %1';
Blockly.Msg.PM_CONTROL_FROMTO = 'for %1 of %2 to %3 %4';
Blockly.Msg.PM_CONTROL_FROMTO_INDEX = 'index';
Blockly.Msg.PM_CONTROL_IFELSEREPORTER = 'if %1 then %2 else %3';
Blockly.Msg.PM_CONTROL_IFEXPANDABLE_IF = 'if';
Blockly.Msg.PM_CONTROL_IFEXPANDABLE_THEN = 'then';
Blockly.Msg.PM_CONTROL_IFEXPANDABLE_ELSE = 'else';
Blockly.Msg.PM_CONTROL_INLINESTACKOUTPUT = 'inline block';
Blockly.Msg.PM_CONTROL_ISCLONE = 'is clone?';
Blockly.Msg.PM_CONTROL_REPEATFORSECONDS = 'repeat for %1 seconds';
Blockly.Msg.PM_CONTROL_RESTARTPROJECT = 'restart project';
Blockly.Msg.PM_CONTROL_RUNFLAG = 'run %1';
Blockly.Msg.PM_CONTROL_SETCOUNTER = 'set counter to %1';
Blockly.Msg.PM_CONTROL_TRYCATCH_1 = 'try to do';
Blockly.Msg.PM_CONTROL_TRYCATCH_2 = 'if a block errors %1';
Blockly.Msg.PM_CONTROL_TRYCATCH_ERROR = 'error';
Blockly.Msg.PM_CONTROL_THROWERROR = 'throw error %1';
Blockly.Msg.PM_CONTROL_WAITORUNTIL = 'wait %1 seconds or until %2';
Blockly.Msg.PM_CONTROL_WAITUNTILTICK = 'wait until next tick';

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = 'set %1 to %2';
Blockly.Msg.DATA_CHANGEVARIABLEBY = 'change %1 by %2';
Blockly.Msg.DATA_SHOWVARIABLE = 'show variable %1';
Blockly.Msg.DATA_HIDEVARIABLE = 'hide variable %1';

Blockly.Msg.PM_DATA_SETVARIABLEVISIBLE = 'set %1 visibility to %2';
Blockly.Msg.PM_DATA_VARIABLEVISIBLE = 'is %1 visible?';

// List blocks
Blockly.Msg.DATA_ADDTOLIST = 'add %1 to %2';
Blockly.Msg.DATA_DELETEOFLIST = 'delete %1 of %2';
Blockly.Msg.DATA_DELETEALLOFLIST = 'delete all of %1';
Blockly.Msg.DATA_INSERTATLIST = 'insert %1 at %2 of %3';
Blockly.Msg.DATA_REPLACEITEMOFLIST = 'replace item %1 of %2 with %3';
Blockly.Msg.DATA_ITEMOFLIST = 'item %1 of %2';
Blockly.Msg.DATA_ITEMNUMOFLIST = 'item # of %1 in %2';
Blockly.Msg.DATA_LENGTHOFLIST = 'length of %1';
Blockly.Msg.DATA_LISTCONTAINSITEM = '%1 contains %2?';
Blockly.Msg.DATA_SHOWLIST = 'show list %1';
Blockly.Msg.DATA_HIDELIST = 'hide list %1';
Blockly.Msg.DATA_INDEX_ALL = 'all';
Blockly.Msg.DATA_INDEX_LAST = 'last';
Blockly.Msg.DATA_INDEX_RANDOM = 'random';

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = 'when %1 clicked';
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = 'when this sprite clicked';
Blockly.Msg.EVENT_WHENSTAGECLICKED = 'when stage clicked';
Blockly.Msg.EVENT_WHENTOUCHINGOBJECT = 'when this sprite touches %1';
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = 'when I receive %1';
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = 'when backdrop switches to %1';
Blockly.Msg.EVENT_WHENGREATERTHAN = 'when %1 > %2';
Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER = 'timer';
Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS = 'loudness';
Blockly.Msg.EVENT_BROADCAST = 'broadcast %1';
Blockly.Msg.EVENT_BROADCASTANDWAIT = 'broadcast %1 and wait';
Blockly.Msg.EVENT_WHENKEYPRESSED = 'when %1 key pressed';
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = 'space';
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = 'left arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = 'right arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = 'down arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = 'up arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = 'any';

Blockly.Msg.PM_EVENT_ALWAYS = 'always';
Blockly.Msg.PM_EVENT_WHEN = 'when %1';
Blockly.Msg.PM_EVENT_WHENKEYHIT = 'when %1 key hit';
Blockly.Msg.PM_EVENT_WHENMOUSESCROLLED = 'when mouse scrolled %1';
Blockly.Msg.PM_EVENT_WHENMOUSESCROLLED_UP = 'up';
Blockly.Msg.PM_EVENT_WHENMOUSESCROLLED_DOWN = 'down';

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = 'say %1 for %2 seconds';
Blockly.Msg.LOOKS_SAY = 'say %1';
Blockly.Msg.LOOKS_HELLO = 'Hello!';
Blockly.Msg.LOOKS_THINKFORSECS = 'think %1 for %2 seconds';
Blockly.Msg.LOOKS_THINK = 'think %1';
Blockly.Msg.LOOKS_HMM = 'Hmm...';
Blockly.Msg.LOOKS_SHOW = 'show';
Blockly.Msg.LOOKS_HIDE = 'hide';
Blockly.Msg.LOOKS_EFFECT_COLOR = 'color';
Blockly.Msg.LOOKS_EFFECT_FISHEYE = 'fisheye';
Blockly.Msg.LOOKS_EFFECT_WHIRL = 'whirl';
Blockly.Msg.LOOKS_EFFECT_PIXELATE = 'pixelate';
Blockly.Msg.LOOKS_EFFECT_MOSAIC = 'mosaic';
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = 'brightness';
Blockly.Msg.LOOKS_EFFECT_GHOST = 'ghost';
Blockly.Msg.LOOKS_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.LOOKS_SETEFFECTTO = 'set %1 effect to %2';
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = 'clear graphic effects';
Blockly.Msg.LOOKS_CHANGESIZEBY = 'change size by %1';
Blockly.Msg.LOOKS_SETSIZETO = 'set size to %1 %';
Blockly.Msg.LOOKS_SIZE = 'size';
Blockly.Msg.LOOKS_CHANGESTRETCHBY = 'change stretch by %1';
Blockly.Msg.LOOKS_SETSTRETCHTO = 'set stretch to %1 %';
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = 'switch costume to %1';
Blockly.Msg.LOOKS_NEXTCOSTUME = 'next costume';
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = 'switch backdrop to %1';
Blockly.Msg.LOOKS_GOTOFRONTBACK = 'go to %1 layer';
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = 'front';
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = 'back';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = 'go %1 %2 layers';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = 'forward';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = 'backward';
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = 'backdrop %1';
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = 'costume %1';
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = 'number';
Blockly.Msg.LOOKS_NUMBERNAME_NAME = 'name';
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = 'switch backdrop to %1 and wait';
Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK = 'next backdrop';
Blockly.Msg.LOOKS_NEXTBACKDROP = 'next backdrop';
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.LOOKS_RANDOMBACKDROP = 'random backdrop';

Blockly.Msg.PM_LOOKS_CHANGEVISIBILITYOFSPRITESHOW = 'show %1';
Blockly.Msg.PM_LOOKS_CHANGEVISIBILITYOFSPRITEHIDE = 'hide %1';
Blockly.Msg.PM_LOOKS_SETFONT = 'set font to %1 with size %2';
Blockly.Msg.PM_LOOKS_SETCOLOR = 'set %1 color to %2';
Blockly.Msg.PM_LOOKS_SETSHAPE = 'set text bubble %1 to %2';
Blockly.Msg.PM_LOOKS_HIDEALLSPRITES = 'hide all sprites';
Blockly.Msg.PM_LOOKS_SETTINTCOLOR = 'set tint color to %1';
Blockly.Msg.PM_LOOKS_TINTCOLOR = 'tint color';
Blockly.Msg.PM_LOOKS_PREVIOUSCOSTUME = 'previous costume';
Blockly.Msg.PM_LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.PM_LOOKS_GETOTHERSPRITEVISIBLE = 'is %1 visible?';
Blockly.Msg.PM_LOOKS_STOPTALKING = 'stop speaking';
Blockly.Msg.PM_LOOKS_GETINPUTOFCOSTUME = '%1 of %2';
Blockly.Msg.PM_LOOKS_GOTARGETLAYER = 'go %1 %2';
Blockly.Msg.PM_LOOKS_LAYERSSETLAYER = 'go to layer %1';
Blockly.Msg.PM_LOOKS_LAYERSGETLAYER = 'layer';
Blockly.Msg.PM_LOOKS_CHANGESTRETCH = 'change stretch by x: %1 y: %2';
Blockly.Msg.PM_LOOKS_SETSTRETCH = 'set stretch to x: %1 y: %2';
Blockly.Msg.PM_LOOKS_STOPTALKING = 'stop speaking';
Blockly.Msg.PM_LOOKS_STRETCHX = 'stretch x';
Blockly.Msg.PM_LOOKS_STRETCHY = 'stretch y';

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = 'move %1 steps';
Blockly.Msg.MOTION_TURNLEFT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_TURNRIGHT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_POINTINDIRECTION = 'point in direction %1';
Blockly.Msg.MOTION_POINTTOWARDS = 'point towards %1';
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = 'random direction';
Blockly.Msg.MOTION_GOTO = 'go to %1';
Blockly.Msg.MOTION_GOTO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GOTO_RANDOM = 'random position';
Blockly.Msg.MOTION_GOTOXY = 'go to x: %1 y: %2';
Blockly.Msg.MOTION_GLIDESECSTOXY = 'glide %1 secs to x: %2 y: %3';
Blockly.Msg.MOTION_GLIDETO = 'glide %1 secs to %2';
Blockly.Msg.MOTION_GLIDETO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'random position';
Blockly.Msg.MOTION_CHANGEXBY = 'change x by %1';
Blockly.Msg.MOTION_SETX = 'set x to %1';
Blockly.Msg.MOTION_CHANGEYBY = 'change y by %1';
Blockly.Msg.MOTION_SETY = 'set y to %1';
Blockly.Msg.MOTION_IFONEDGEBOUNCE = 'if on edge, bounce';
Blockly.Msg.MOTION_SETROTATIONSTYLE = 'set rotation style %1';
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'left-right';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'don\'t rotate';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'all around';
Blockly.Msg.MOTION_XPOSITION = 'x position';
Blockly.Msg.MOTION_YPOSITION = 'y position';
Blockly.Msg.MOTION_DIRECTION = 'direction';
Blockly.Msg.MOTION_SCROLLRIGHT = 'scroll right %1';
Blockly.Msg.MOTION_SCROLLUP = 'scroll up %1';
Blockly.Msg.MOTION_MOVE_SPRITE_TO_SCENE_SIDE = 'move to stage %1';
Blockly.Msg.MOTION_ALIGNSCENE = 'align scene %1';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = 'bottom-left';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = 'bottom-right';
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = 'middle';
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = 'top-left';
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = 'top-right';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOM = 'bottom';
Blockly.Msg.MOTION_ALIGNSCENE_TOP = 'top'
Blockly.Msg.MOTION_ALIGNSCENE_LEFT = 'left'
Blockly.Msg.MOTION_ALIGNSCENE_RIGHT = 'right'
Blockly.Msg.MOTION_XSCROLL = 'x scroll';
Blockly.Msg.MOTION_YSCROLL = 'y scroll';
Blockly.Msg.MOTION_STAGE_SELECTED = 'Stage selected: no motion blocks';

Blockly.Msg.PM_MOTION_CHANGEBYXY = 'change by x: %1 y: %2';
Blockly.Msg.PM_MOTION_GLIDEDIRECTIONSTEPSINSECONDS = 'glide %1 steps %2 in %3 secs';
Blockly.Msg.PM_MOTION_GLIDE_BACKWARDS = 'backwards';
Blockly.Msg.PM_MOTION_GLIDE_DOWN = 'down';
Blockly.Msg.PM_MOTION_GLIDE_FORWARDS = 'forwards';
Blockly.Msg.PM_MOTION_GLIDE_UP = 'up';
Blockly.Msg.PM_MOTION_IFONSPRITEBOUNCE = 'if touching %1, bounce';
Blockly.Msg.PM_MOTION_IFONSPRITEBOUNCE_EDGE = 'mouse-pointer';
Blockly.Msg.PM_MOTION_IFONXYBOUNCE = 'if touching x: %1 y: %2, bounce';
Blockly.Msg.PM_MOTION_MOVEBACKSTEPS = 'move back %1 steps';
Blockly.Msg.PM_MOTION_MOVEUPDOWNSTEPS = 'move %1 %2 steps';
Blockly.Msg.PM_MOTION_MOVEUPDOWNSTEPS_UP = 'up';
Blockly.Msg.PM_MOTION_MOVEUPDOWNSTEPS_DOWN = 'down';
Blockly.Msg.PM_MOTION_POINTTOWARDS_XY = 'point towards x: %1 y: %2';
Blockly.Msg.PM_MOTION_POINTINRANDOMDIRECTION = 'point in random direction';
Blockly.Msg.PM_MOTION_TURNRIGHTAROUNDXY = 'turn %1 %2 degrees around x: %3 y: %4';
Blockly.Msg.PM_MOTION_TURNLEFTAROUNDXY = 'turn %1 %2 degrees around x: %3 y: %4';
Blockly.Msg.PM_MOTION_TURNAROUND = 'turn around';

// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'pick random %1 to %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_AND = '%1 and %2';
Blockly.Msg.OPERATORS_OR = '%1 or %2';
Blockly.Msg.OPERATORS_NOT = 'not %1';
Blockly.Msg.OPERATORS_JOIN = 'join %1 %2';
Blockly.Msg.OPERATORS_JOIN_APPLE = 'apple';
Blockly.Msg.OPERATORS_JOIN_BANANA = 'banana';
Blockly.Msg.OPERATORS_LETTEROF = 'letter %1 of %2';
Blockly.Msg.OPERATORS_LETTEROF_APPLE = 'a';
Blockly.Msg.OPERATORS_LENGTH = 'length of %1';
Blockly.Msg.OPERATORS_CONTAINS = '%1 contains %2?';
Blockly.Msg.OPERATORS_MOD = '%1 mod %2';
Blockly.Msg.OPERATORS_ROUND = 'round %1';
Blockly.Msg.OPERATORS_MATHOP = '%1 of %2';
Blockly.Msg.OPERATORS_MATHOP_ABS = 'abs';
Blockly.Msg.OPERATORS_MATHOP_FLOOR = 'floor';
Blockly.Msg.OPERATORS_MATHOP_CEILING = 'ceiling';
Blockly.Msg.OPERATORS_MATHOP_SQRT = 'sqrt';
Blockly.Msg.OPERATORS_MATHOP_SIN = 'sin';
Blockly.Msg.OPERATORS_MATHOP_COS = 'cos';
Blockly.Msg.OPERATORS_MATHOP_TAN = 'tan';
Blockly.Msg.OPERATORS_MATHOP_ASIN = 'asin';
Blockly.Msg.OPERATORS_MATHOP_ACOS = 'acos';
Blockly.Msg.OPERATORS_MATHOP_ATAN = 'atan';
Blockly.Msg.OPERATORS_MATHOP_LN = 'ln';
Blockly.Msg.OPERATORS_MATHOP_LOG = 'log';
Blockly.Msg.OPERATORS_MATHOP_EEXP = 'e ^';
Blockly.Msg.OPERATORS_MATHOP_10EXP = '10 ^';

Blockly.Msg.PM_OPERATORS_AVERAGE = 'average';
Blockly.Msg.PM_OPERATORS_CONSTRAIN = 'constrain %1 min %2 max %3';
Blockly.Msg.PM_OPERATORS_CHAR_NEWLINE = 'new line';
Blockly.Msg.PM_OPERATORS_CHAR_TAB = 'tab character';
Blockly.Msg.PM_OPERATORS_GTE = '%1 ≥ %2';
Blockly.Msg.PM_OPERATORS_INTERPOLATE = 'interpolate %1 to %2 by %3';
Blockly.Msg.PM_OPERATORS_JOIN3 = 'join %1 %2 %3';
Blockly.Msg.PM_OPERATORS_JOINE = 'join %1';
Blockly.Msg.PM_OPERATORS_JOIN_PEAR = 'pear';
Blockly.Msg.PM_OPERATORS_LTE = '%1 ≤ %2';
Blockly.Msg.PM_OPERATORS_MATHOP_LOG2 = 'log2';
Blockly.Msg.PM_OPERATORS_MATHOP_SIGN = 'sign';
Blockly.Msg.PM_OPERATORS_MAXIMUM = 'maximum';
Blockly.Msg.PM_OPERATORS_MINIMUM = 'minimum';
Blockly.Msg.PM_OPERATORS_NAND = '%1 nand %2';
Blockly.Msg.PM_OPERATORS_NOR = '%1 nor %2';
Blockly.Msg.PM_OPERATORS_NOTEQUAL = '%1 ≠ %2';
Blockly.Msg.PM_OPERATORS_NULL = 'null';
Blockly.Msg.PM_OPERATORS_POWER = '%1 ^ %2';
Blockly.Msg.PM_OPERATORS_RANGE = 'range';
Blockly.Msg.PM_OPERATORS_RANGE_EXPANDABLE = '%1 of %2';
Blockly.Msg.PM_OPERATORS_TYPE_BOOLEAN = 'boolean';
Blockly.Msg.PM_OPERATORS_TYPE_NUMBER = 'number';
Blockly.Msg.PM_OPERATORS_TYPE_STRING = 'string';
Blockly.Msg.PM_OPERATORS_VALID_TYPE = 'is %1 a valid %2?';
Blockly.Msg.PM_OPERATORS_XNOR = '%1 xnor %2';
Blockly.Msg.PM_OPERATORS_XOR = '%1 xor %2';

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// TW Procedures blocks
Blockly.Msg.PROCEDURES_RETURN = 'return %1';
Blockly.Msg.PROCEDURES_TO_REPORTER = 'Change To Reporter';
Blockly.Msg.PROCEDURES_TO_STATEMENT = 'Change To Stacked Block';
Blockly.Msg.PROCEDURES_DOCS = 'How to use return';

Blockly.Msg.PM_PROCEDURES_SET = 'set %1 to %2';

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = 'touching %1?';
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = 'edge';
Blockly.Msg.SENSING_TOUCHINGCOLOR = 'touching color %1?';
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = 'color %1 is touching %2?';
Blockly.Msg.SENSING_DISTANCETO = 'distance to %1';
Blockly.Msg.SENSING_DISTANCETO_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_ASKANDWAIT = 'ask %1 and wait';
Blockly.Msg.SENSING_ASK_TEXT = 'What\'s your name?';
Blockly.Msg.SENSING_ANSWER = 'answer';
Blockly.Msg.SENSING_KEYPRESSED = 'key %1 pressed?';
Blockly.Msg.SENSING_MOUSEDOWN = 'mouse down?';
Blockly.Msg.SENSING_MOUSEX = 'mouse x';
Blockly.Msg.SENSING_MOUSEY = 'mouse y';
Blockly.Msg.SENSING_SETDRAGMODE = 'set drag mode %1';
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = 'draggable';
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = 'not draggable';
Blockly.Msg.SENSING_LOUDNESS = 'loudness';
Blockly.Msg.SENSING_LOUD = 'loud?';
Blockly.Msg.SENSING_TIMER = 'timer';
Blockly.Msg.SENSING_RESETTIMER = 'reset timer';
Blockly.Msg.SENSING_OF = '%1 of %2';
Blockly.Msg.SENSING_OF_XPOSITION = 'x position';
Blockly.Msg.SENSING_OF_YPOSITION = 'y position';
Blockly.Msg.SENSING_OF_DIRECTION = 'direction';
Blockly.Msg.SENSING_OF_COSTUMENUMBER = 'costume #';
Blockly.Msg.SENSING_OF_COSTUMENAME = 'costume name';
Blockly.Msg.SENSING_OF_SIZE = 'size';
Blockly.Msg.SENSING_OF_VOLUME = 'volume';
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = 'backdrop #';
Blockly.Msg.SENSING_OF_BACKDROPNAME = 'backdrop name';
Blockly.Msg.SENSING_OF_STAGE = 'Stage';
Blockly.Msg.SENSING_CURRENT = 'current %1';
Blockly.Msg.SENSING_CURRENT_YEAR = 'year';
Blockly.Msg.SENSING_CURRENT_MONTH = 'month';
Blockly.Msg.SENSING_CURRENT_DATE = 'date';
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = 'day of week';
Blockly.Msg.SENSING_CURRENT_HOUR = 'hour';
Blockly.Msg.SENSING_CURRENT_MINUTE = 'minute';
Blockly.Msg.SENSING_CURRENT_SECOND = 'second';
Blockly.Msg.SENSING_DAYSSINCE2000 = 'days since 2000';
Blockly.Msg.SENSING_USERNAME = 'username';
Blockly.Msg.SENSING_USERID = 'user id';

Blockly.Msg.PM_SENSING_OBJECT_TOUCHING_CLONE ="%1 touching clone of %2?";
Blockly.Msg.PM_SENSING_OBJECT_TOUCHING_OBJECT ="%1 touching %2?";
Blockly.Msg.PM_SENSING_KEY_HIT ="key %1 hit?";
Blockly.Msg.PM_SENSING_MOUSE_SCROLLING ="is mouse scrolling %1?";
Blockly.Msg.PM_SENSING_MOUSE_CLICKED ="mouse clicked?";
Blockly.Msg.PM_SENSING_FINGER_DOWN ="finger %1 down?";
Blockly.Msg.PM_SENSING_FINGER_TAPPED ="finger %1 tapped?";
Blockly.Msg.PM_SENSING_FINGER_X ="finger %1 x";
Blockly.Msg.PM_SENSING_FINGER_Y ="finger %1 y";
Blockly.Msg.PM_SENSING_DRAGGABLE ="draggable?";
Blockly.Msg.PM_SENSING_LOGGED_IN ="logged in?";
Blockly.Msg.PM_SENSING_REGEX_TEST ="test regex %2 %3 with text %1";
Blockly.Msg.PM_SENSING_IS_NUMBER ="%1 is number?";
Blockly.Msg.PM_SENSING_HAS_TEXT ="%1 has text?";
Blockly.Msg.PM_SENSING_HAS_NUMBER ="%1 has number?";
Blockly.Msg.PM_SENSING_MOBILE ="mobile?";
Blockly.Msg.PM_SENSING_IS_TEXT ="%1 is text?";
Blockly.Msg.PM_SENSING_GET_SPRITE_WITH_ATTRIB ="get sprite with %1 set to %2";
Blockly.Msg.PM_SENSING_DISTANCE_TO_POINTS ="distance from %1 %2 to %3 %4";
Blockly.Msg.PM_SENSING_DIRECTION_TO_POINTS ="direction from %3 %4 to %1 %2";
Blockly.Msg.PM_SENSING_IS_UPPERCASE ="is character %1 uppercase?";
Blockly.Msg.PM_SENSING_OPERATING_SYSTEM ="operating system";
Blockly.Msg.PM_SENSING_BROWSER ="browser";
Blockly.Msg.PM_SENSING_URL = "url";
Blockly.Msg.PM_SENSING_XY_OF_TOUCHING = "%1 of touching %2 point";
Blockly.Msg.PM_SENSING_CURRENT_TIMESTAMP = 'timestamp';
Blockly.Msg.PM_SENSING_HAS_NUMBER = '%1 has number?';
Blockly.Msg.PM_SENSING_HAS_TEXT = '%1 has text?';
Blockly.Msg.PM_SENSING_IS_NUMBER = '%1 is number?';
Blockly.Msg.PM_SENSING_IS_TEXT = '%1 is text?';

// Sound blocks
Blockly.Msg.SOUND_PLAY = 'start sound %1';
Blockly.Msg.SOUND_PLAYUNTILDONE = 'play sound %1 until done';
Blockly.Msg.SOUND_STOPALLSOUNDS = 'stop all sounds';
Blockly.Msg.SOUND_SETEFFECTO = 'set %1 effect to %2';
Blockly.Msg.SOUND_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.SOUND_CLEAREFFECTS = 'clear sound effects';
Blockly.Msg.SOUND_EFFECTS_PITCH = 'pitch';
Blockly.Msg.SOUND_EFFECTS_PAN = 'pan left/right';
Blockly.Msg.SOUND_CHANGEVOLUMEBY = 'change volume by %1';
Blockly.Msg.SOUND_SETVOLUMETO = 'set volume to %1%';
Blockly.Msg.SOUND_VOLUME = 'volume';
Blockly.Msg.SOUND_RECORD = 'record...';

Blockly.Msg.PM_SOUND_STOP = 'stop sound %1';
Blockly.Msg.PM_SOUND_PAUSE = 'pause sound %1';
Blockly.Msg.PM_SOUND_SET_STOP_FADEOUT_TO = 'set fade out to %1 seconds on %2';
Blockly.Msg.PM_SOUND_PLAY_AT_SECONDS = 'start sound %1 at %2 seconds';
Blockly.Msg.PM_SOUND_PLAY_AT_SECONDS_UNTIL_DONE = 'play sound %1 starting at %2 seconds until done';
Blockly.Msg.PM_SOUND_PAUSEALLSOUNDS = 'pause all sounds';
Blockly.Msg.PM_SOUND_PLAYALLSOUNDS = 'play all sounds';
Blockly.Msg.PM_SOUND_GETEFFECTVALUE = '%1 effect';
Blockly.Msg.PM_SOUND_ISSOUNDPLAYING = 'is %1 playing?';
Blockly.Msg.PM_SOUND_GETLENGTH = 'length of %1';
Blockly.Msg.PM_SOUND_GETTIMEPOSITION = 'current time position of %1';
Blockly.Msg.PM_SOUND_GETSOUNDVOLUME = 'current volume of %1';


// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';
Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Sound';
Blockly.Msg.CATEGORY_EVENTS = 'Events';
Blockly.Msg.CATEGORY_CONTROL = 'Control';
Blockly.Msg.CATEGORY_SENSING = 'Sensing';
Blockly.Msg.CATEGORY_OPERATORS = 'Operators';
Blockly.Msg.CATEGORY_VARIABLES = 'Variables';
Blockly.Msg.CATEGORY_MYBLOCKS = 'My Blocks';

Blockly.Msg.PM_CATEGORY_LISTS = 'Lists';

// Context menus
Blockly.Msg.DUPLICATE = 'Duplicate';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';
Blockly.Msg.DEFAULT_LIST_ITEM = 'thing';
Blockly.Msg.DELETE_LIST = 'Delete the "%1" list';
Blockly.Msg.RENAME_LIST = 'Rename list';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';

// extra pm stuff
Blockly.Msg.PM_COLLAPSE_ALL = 'Collapse All';
Blockly.Msg.PM_COLLAPSE_BLOCK = 'Collapse Block';
Blockly.Msg.PM_COLLAPSE_X_BLOCKS = 'Collapse %1 Blocks';
Blockly.Msg.PM_EXPAND_ALL = 'Expand All';
Blockly.Msg.PM_EXPAND_BLOCK = 'Expand Block';
Blockly.Msg.PM_EXPAND_X_BLOCKS = 'Expand %1 Blocks';
Blockly.Msg.PM_INLINE_BLOCK = 'Inline Inputs';
Blockly.Msg.PM_EXTERNAL_BLOCK = 'External Inputs';
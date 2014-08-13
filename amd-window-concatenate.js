/** @license The MIT License (MIT) Copyright (c) 2014 Viktor Szépe */

/**
 * AMD window
 * Helps depending on the window object
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

/** @modue: amd-global */
// when concatenating the modules should be named
define('amd-global', typeof global !== 'undefined' ? global : self);

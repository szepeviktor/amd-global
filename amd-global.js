/** @license The MIT License (MIT) Copyright (c) 2014 Viktor Szépe */

/**
 * AMD global
 * A module that grabs the current global for multiple environments
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

/** @modue: amd-global */
define(typeof global !== 'undefined' ? global : self);

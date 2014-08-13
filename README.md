amd-global
==========

Helps grabbing the global object. Works in a browser `window`, in node.js `global`, in Web Workers `self`.

### Usage with [curl.js](https://github.com/cujojs/curl)

Your AMD module should depend on AMD global:

```js
// Uses AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'amd-global'], factory);
    } else {
        // Browser globals
        factory(jQuery, this);
    }
}(function ($, global, undefined) {
...
}));
```

### Why protect `undefined`?

You can read about it in this [SO question](http://stackoverflow.com/questions/8275658/passing-window-and-undefined-to-an-immediately-invoked-anonymous-function-why)

### Are you looking for browser-only version?

[amd-window](https://github.com/szepeviktor/amd-window)

Idea of [unscriptable](https://github.com/unscriptable) and [briancavalier](https://github.com/briancavalier).

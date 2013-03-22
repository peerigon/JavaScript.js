"use strict";

var then = new Date();

console.log("(Javascript.js) Compiling JavaScript to JavaScript ...");
setTimeout(function () {
    console.log("(Javascript.js) Compilation finished (" + (new Date().getTime() - then.getTime()) + "ms)");
}, 0);
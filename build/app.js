"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excalibur_1 = require("excalibur");
const game = new excalibur_1.Engine({
    width: 800,
    height: 600,
    canvasElementId: '',
    displayMode: excalibur_1.DisplayMode.FitScreen,
    pointerScope: excalibur_1.Input.PointerScope.Document, // the scope of capturing pointer (mouse/touch) events
});
// call game.start, which is a Promise
game.start().then(function () {
    // ready, set, go!
});

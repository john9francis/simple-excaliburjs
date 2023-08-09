import { Engine, DisplayMode, Input } from 'excalibur';

const game = new Engine({
  width: 800, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: '', // the DOM canvas element ID, if you are providing your own
  displayMode: DisplayMode.FitScreen, // the display mode
  pointerScope: Input.PointerScope.Document, // the scope of capturing pointer (mouse/touch) events
})
// call game.start, which is a Promise
game.start().then(function () {
  // ready, set, go!
})
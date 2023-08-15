import * as ex from 'excalibur';
import Player from './actors/player';
//import playerOptions from './actors/player';

const playerOptions: ex.ActorArgs = {
  pos: new ex.Vector(100,100),
  width: 100,
  height: 100,
  color: ex.Color.Red,
  collisionType: ex.CollisionType.Active
}

const game = new ex.Engine({
  width: 800, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: '', // the DOM canvas element ID, if you are providing your own
  displayMode: ex.DisplayMode.FitScreen, // the display mode
  pointerScope: ex.Input.PointerScope.Document, // the scope of capturing pointer (mouse/touch) events
})
// call game.start, which is a Promise
game.start().then(function () {
  // ready, set, go!

  // create boundry actors
  const ground = new ex.Actor({
    pos: ex.vec(game.halfDrawWidth, game.drawHeight),
    width: game.drawWidth,
    height: 100,
    color: ex.Color.DarkGray,
    collisionType: ex.CollisionType.Fixed
  });

  // create player
  const player1 = new Player(playerOptions);

  // create obstacle
  const obstacle = new ex.Actor({
    pos: ex.vec(300, 300),
    width: 100,
    height: 100,
    color: ex.Color.DarkGray,
    collisionType: ex.CollisionType.Fixed
  })


  // add everything to the game
  game.add(ground);
  game.add(player1);
  game.add(obstacle);


})
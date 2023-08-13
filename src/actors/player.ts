import * as ex from 'excalibur';

// playerOptions is for the actor constructor
const playerOptions: ex.ActorArgs = {
  pos: new ex.Vector(1,2),
  width: 100,
  height: 100,
  color: ex.Color.Red
}

export default class Player extends ex.Actor {
  constructor(options: ex.ActorArgs){
    super(options)
  }

  test() {
    console.log('Hello, Player!');
  }
}


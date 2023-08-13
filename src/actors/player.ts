import * as ex from 'excalibur';


export default class Player extends ex.Actor {
  constructor(options: ex.ActorArgs){
    super(options)

  }

  onInitialize(_engine: ex.Engine): void {
    // define player speed
    const speed = 100;

    // Bind arrow keys to movement
    _engine.input.keyboard.on('hold', (event) =>{
      switch (event.key){
        case ex.Input.Keys.Left:
          this.vel.x = -speed;
          break;
        case ex.Input.Keys.Right:
          this.vel.x = speed;
          break;
        case ex.Input.Keys.Up:
          this.vel.y = -speed;
          break;
        case ex.Input.Keys.Down:
          this.vel.y = speed;
          break;
        default:
          this.vel.x = 0;
          this.vel.y = 0;
      }
    })

  }
  
}


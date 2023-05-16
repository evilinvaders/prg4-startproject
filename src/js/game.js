import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Axolotl } from './axolotl'
import { Siren } from './siren'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const axolotl = new Axolotl(400, 300)
        this.add(axolotl)

        let leftRight = Math.random() < 0.5 ? -1 : 1;
        let siren 
        if (leftRight < 0) {
          siren = new Siren(0, 0);
        } else {
          siren = new Siren(640, 0);
        }
        // const siren = new Siren(400, 300)
        this.add(siren)


    // siren.actions.moveTo(new Vector(300, 250), 200);
    // this.add(siren);
    
    // siren.on("pointerdown", () => {
    //   console.log("You killed the enemy");
    //   siren.kill()
    // })
    // this.add(siren);
    }
}

new Game()

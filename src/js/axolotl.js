import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'

export class Axolotl extends Actor {
    name
    constructor(posX, posY) {
        super({
            width: Resources.Axolotl.width,
            height: Resources.Axolotl.height
        });
        this.pos = new Vector(posX, posY)
        this.vel = new Vector(0, 0)
        this.graphics.use(Resources.Axolotl.toSprite())
    }
}
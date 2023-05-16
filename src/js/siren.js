import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'

export class Siren extends Actor {
    name
    constructor(posX, posY) {
        super({
            width: Resources.Siren.width,
            height: Resources.Siren.height
        });
        this.pos = new Vector(posX, posY)
        this.vel = new Vector(0, 0)
        this.graphics.use(Resources.Siren.toSprite())
        this.on("pointerdown", () => {
            this.kill()
        })
        this.actions.moveTo(new Vector(300, 250), 200);
        this.on("pointerdown", () => {
            console.log("You killed the enemy");
            this.kill()
        })
    }
}
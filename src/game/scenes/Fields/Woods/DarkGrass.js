import { EventBus } from "../../../EventBus";
import { Scene } from "phaser";

export class DarkGrass extends Scene {
    constructor() {
        super("DarkGrass");
    }

    create() {
        this.add.image(0, 0, "battle1");
        EventBus.emit("current-scene-ready", this);
    }

    changeScene() {
        this.scene.start("Grass");
    }
}

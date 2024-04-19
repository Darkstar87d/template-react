import { EventBus } from "../../../EventBus";
import { Scene } from "phaser";

export class Grass extends Scene {
    constructor() {
        super("Grass");
    }

    create() {
        this.add.image(0, 0, "battle3");
        EventBus.emit("current-scene-ready", this);
    }

    changeScene() {
        this.scene.start("Dirt");
    }
}

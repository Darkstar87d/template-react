import { EventBus } from "../../../EventBus";
import { Scene } from "phaser";

export class Dirt extends Scene {
    constructor() {
        super("Dirt");
    }

    create() {
        this.add.image(0, 0, "battle2");
        EventBus.emit("current-scene-ready", this);
    }

    changeScene() {
        this.scene.start("Road");
    }
}

import { EventBus } from "../../../EventBus";
import { Scene } from "phaser";

export class Road extends Scene {
    constructor() {
        super("Road");
    }

    create() {
        this.add.image(0, 0, "battle4");
        EventBus.emit("current-scene-ready", this);
    }

    changeScene() {
        this.scene.start("GameOver");
    }
}

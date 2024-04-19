import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/Menus/GameOver";
import { MainMenu } from "./scenes/Menus/MainMenu";
import Phaser from "phaser";
import { Preloader } from "./scenes/Preloader";
import { DarkGrass } from "./scenes/Fields/Woods/DarkGrass";
import { Dirt } from "./scenes/Fields/Woods/Dirt";
import { Grass } from "./scenes/Fields/Woods/Grass";
import { Road } from "./scenes/Fields/Woods/Road";

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [Boot, Preloader, MainMenu, Game, GameOver, DarkGrass, Grass, Dirt, Road],
};

const StartGame = (parent) => {
    return new Phaser.Game({ ...config, parent });
};

export default StartGame;

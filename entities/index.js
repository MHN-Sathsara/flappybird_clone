import Matter from "matter-js";
import createBird from "../components/Bird";
import createFloor from "../components/Floor";
import createObstacle from "../components/Obstacle";

import { Dimensions } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  world.gravity.y = 0.4; // Adjust gravity to make the game more challenging

  const pipeSizePosA = getPipeSizePosPair(-300);
  return {
    physics: { engine, world },
    Bird: createBird(
      world,
      { x: 50, y: 200 },
      { width: 50, height: 50 },
      "black"
    ),
    ObstacleTop1: createObstacle(
      world,
      "ObstacleTop1",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
      "red"
    ),
    Floor: createFloor(
      world,
      { x: windowWidth / 2, y: windowHeight - 25 },
      { width: windowWidth, height: 50 },
      "green"
    ),
  };
};

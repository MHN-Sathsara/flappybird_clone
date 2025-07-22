import Matter from "matter-js";
import { getPipeSizePosPair } from "./utils/random";

import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Bird.body, {
        x: 0,
        y: -5,
      });
    });

  // Cap the delta time to prevent physics instability and warnings
  const cappedDelta = Math.min(time.delta || 16.667, 16);
  Matter.Engine.update(engine, cappedDelta);

  for (let index = 1; index <= 2; index++) {
    if (
      entities[`ObstacleTop${index}`].body.bounds.max.x <= 50 &&
      !entities[`ObstacleTop${index}`].point
    ) {
      entities[`ObstacleTop${index}`].point = true;
      dispatch({ type: "new-point" });
    }

    if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
      const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);
      Matter.Body.setPosition(
        entities[`ObstacleTop${index}`].body,
        pipeSizePos.pipeTop.pos
      );
      Matter.Body.setPosition(
        entities[`ObstacleBottom${index}`].body,
        pipeSizePos.pipeBottom.pos
      );
    }

    Matter.Body.translate(entities[`ObstacleTop${index}`].body, {
      x: -1.5,
      y: 0,
    });
    Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
      x: -1.5,
      y: 0,
    });
  }

  Matter.Events.on(engine, "collisionStart", (event) => {
    dispatch({ type: "game-over" });
  });

  return entities;
};

export default Physics;

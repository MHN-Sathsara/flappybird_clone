import Matter from "matter-js";

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

  // Cap the delta time to prevent physics instability
  const cappedDelta = Math.min(time.delta, 16.667);
  Matter.Engine.update(engine, cappedDelta);

  return entities;
};

export default Physics;

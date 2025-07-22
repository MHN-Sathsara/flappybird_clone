import Matter from "matter-js";

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  touches;
  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;

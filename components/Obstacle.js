import Matter from "matter-js";
import React from "react";
import { View } from "react-native";

const Obstacle = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderStyle: "solid",
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, label, position, size, color) => {
  const initialObstacle = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true, // Make the obstacle static so it doesn't move
    }
  );
  Matter.World.add(world, initialObstacle);

  return {
    body: initialObstacle,
    size: size,
    color: color,
    renderer: <Obstacle />,
  };
};

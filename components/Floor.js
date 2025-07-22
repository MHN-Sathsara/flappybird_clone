import Matter from "matter-js";
import React from "react";
import { View } from "react-native";

const Floor = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        backgroundColor: color,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, position, size, color) => {
  const initialFloor = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: "Floor",
      isStatic: true, // Make the floor static so it doesn't move
    }
  );
  Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    size: size,
    color: color,
    renderer: <Floor />,
  };
};

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from "./physics";

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setgameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  useEffect(() => {
    setRunning(false);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          fontWeight: "bold",
          margin: 40,
        }}
      >
        {currentPoints}
      </Text>
      <GameEngine
        ref={(ref) => {
          setgameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case "game-over":
              setRunning(false);
              gameEngine.stop();
              setCurrentPoints(0);
              break;
            case "new-point":
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
      {!running ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              setRunning(true);
              gameEngine.start();
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

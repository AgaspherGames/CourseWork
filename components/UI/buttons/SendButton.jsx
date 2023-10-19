import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  Keyframe,
  useAnimatedStyle,
  withSpring,
  cond,
  Easing,
} from "react-native-reanimated";
import { Pressable } from "react-native";
export default function SendButton({}) {
  const keyframe = new Keyframe({
    0: {
      transform: [{ rotate: "0deg"}, {translateX: 0}],
      marginBottom: 0
    },
    50: {
      transform: [{ rotate: "-200deg" }, {translateX: 50}],
      marginBottom: 10
    },
    75: {
      transform: [{ rotate: "-340deg" }, {translateX: 25}],
      marginBottom: 10
    },
    85: {
      transform: [{ rotate: "-360deg" }, {translateX: 5}],
      marginBottom: 10
    },
    100: {
      transform: [{ rotate: "-360deg"}, {translateX: 0}],
      marginBottom: 20
    },
  });

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setIsAnimating(p=>!p);

      }}
    >
      {isAnimating ? (
        <Animated.View
          entering={keyframe.duration(1000)}
          //   className="absolute w-6 right-4"
        >
          <Feather name="send" size={20} color="white" />
        </Animated.View>
      ) : (
        <View
        //   className="absolute w-6 right-4"
        >
          <Feather name="send" size={20} color="white" />
        </View>
      )}
    </Pressable>
  );
}

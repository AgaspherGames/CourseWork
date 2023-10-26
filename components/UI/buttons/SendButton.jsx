import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import Animated, {
  Keyframe,
} from "react-native-reanimated";
import { Pressable } from "react-native";
export default function SendButton({dark=false, onPress}) {
  const keyframe = new Keyframe({
    0: {
      transform: [{ rotate: "0deg" }, { translateX: 0 }],
      marginBottom: 0,
    },
    50: {
      transform: [{ rotate: "-200deg" }, { translateX: 50 }],
      marginBottom: 10,
    },
    75: {
      transform: [{ rotate: "-340deg" }, { translateX: 25 }],
      marginBottom: 10,
    },
    85: {
      transform: [{ rotate: "-360deg" }, { translateX: 5 }],
      marginBottom: 10,
    },
    100: {
      transform: [{ rotate: "-360deg" }, { translateX: 0 }],
      marginBottom: 20,
    },
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!isAnimating) return
    if (timer) clearTimeout(timer);

    timer.current = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  return (
    <Pressable
      onPress={() => {
        setIsAnimating(true);
        onPress()
      }}
    >
      {isAnimating ? (
        <Animated.View
          entering={keyframe.duration(1000)}
          //   className="absolute w-6 right-4"
        >
          <Feather name="send" size={20} color={dark?"black":"white"} />
        </Animated.View>
      ) : (
        <View
        //   className="absolute w-6 right-4"
        >
          <Feather name="send" size={20} color={dark?"black":"white"} />
        </View>
      )}
    </Pressable>
  );
}

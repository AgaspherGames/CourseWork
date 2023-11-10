import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import Animated, { Keyframe } from "react-native-reanimated";
import { Pressable } from "react-native";
export default function SendButton({ dark = false, onPress, disabled }) {
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
  const keyframeDisabled = new Keyframe({
    0: {
      transform: [{ rotate: "0deg" }, { translateX: 0 }, { scale: 1 }],
      marginBottom: 0,
      opacity: 1,
    },
    25: {
      transform: [{ rotate: "80deg" }, { translateX: 20 }, { scale: 1 }],
      marginBottom: 10,
      opacity: 1,
    },
    50: {
      transform: [{ rotate: "100deg" }, { translateX: 50 }, { scale: 1 }],
      marginBottom: 10,
      opacity: 0,
    },
    75: {
      transform: [{ rotate: "360deg" }, { translateX: 5 }, { scale: 1 }],
      marginBottom: 10,
      opacity: 0,
    },
    90: {
      transform: [{ rotate: "360deg" }, { translateX: 0 }, { scale: 0 }],
      marginBottom: 20,
      opacity: 0,
    },
    100: {
      transform: [{ rotate: "360deg" }, { translateX: 0 }, { scale: 1 }],
      marginBottom: 20,
      opacity: 1,
    },
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!isAnimating) return;
    if (timer) clearTimeout(timer);

    timer.current = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  return (
    <Pressable
      onPress={() => {
        setIsAnimating(true);
        if (!disabled) {
          onPress();
        }
      }}
    >
      {isAnimating ? (
        disabled ? (
          <Animated.View
            entering={keyframeDisabled.duration(1000)}
            //   className="absolute w-6 right-4"
          >
            <Feather name="send" size={20} color={dark ? "black" : "white"} />
          </Animated.View>
        ) : (
          <Animated.View
            entering={keyframe.duration(1000)}
            //   className="absolute w-6 right-4"
          >
            <Feather name="send" size={20} color={dark ? "black" : "white"} />
          </Animated.View>
        )
      ) : (
        <View
        //   className="absolute w-6 right-4"
        >
          <Feather name="send" size={20} color={dark ? "black" : "white"} />
        </View>
      )}
    </Pressable>
  );
}

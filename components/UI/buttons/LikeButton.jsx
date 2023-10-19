import { View, Text, Animated, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { twMerge } from "tailwind-merge";

export default function LikeButton() {
  const scaleLike = new Animated.Value(0);
  const scaleNoLike = new Animated.Value(1);
  const [isLiked, setIsLiked] = useState(false);

  const handlePressIn = () => {
    console.log("i");
    setIsLiked(false);
    Animated.spring(scaleLike, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
    Animated.spring(scaleNoLike, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    console.log("o");
    setIsLiked(true);
    Animated.spring(scaleLike, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    Animated.spring(scaleNoLike, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View style={{ transform: [{ scale: scaleNoLike }] }}>
        <Pressable
          onPress={handlePressIn}
          className=""
        >
          <AntDesign name={"heart"} size={24} />
        </Pressable>
      </Animated.View>
      <Animated.View
        className={twMerge("absolute", isLiked && "overflow-hidden")}
        style={{ transform: [{ scale: scaleLike }] }}
      >
        <Pressable
          onPress={handlePressOut}
          className=""
        >
          <AntDesign name={"hearto"} size={24} />
        </Pressable>
      </Animated.View>
    </>
  );
}

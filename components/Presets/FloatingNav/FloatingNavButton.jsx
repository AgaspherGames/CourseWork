import { Animated, Pressable, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useAppStore } from "../../../stores/AppStore";

export default function FloatingNavButton({ icon, path }) {
  const page  = useAppStore((state) => state.page);
  const navigation = useNavigation();
  const scale = new Animated.Value(1);
  const isActive = useMemo(() => {return page==path}, [page]);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => {
        navigation.navigate(path);
      }}
      className="p-2 bg-white rounded-full "
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Octicons
          name={icon}
          size={24}
          color={isActive ? "#3b82f6" : "#4b5563"}
        />
      </Animated.View>
    </Pressable>
  );
}

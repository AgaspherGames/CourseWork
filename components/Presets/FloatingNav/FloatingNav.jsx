import { View, Text, Pressable } from "react-native";
import React from "react";
import FloatingNavButton from "./FloatingNavButton";

export default function FloatingNav() {
  return (
    <View className="flex flex-row h-12 justify-between items-center px-8 border-t border-gray-400 ">
      <FloatingNavButton icon="home" path="Main" />
      <FloatingNavButton icon="search" path="Search" />
      <FloatingNavButton icon="repo" path="Docs" />
      <FloatingNavButton icon="person" path="Profile" />
    </View>
  );
}

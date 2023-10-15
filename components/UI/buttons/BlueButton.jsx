import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function BlueButton({ children, classname, ...props }) {
  return (
    <TouchableHighlight
      underlayColor="#60a5fa"
      className={twMerge("bg-blue-500 py-2 rounded-lg w-1/2 ", classname)}
      {...props}
    >
      <Text className="text-white text-center">{children}</Text>
    </TouchableHighlight>
  );
}

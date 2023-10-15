import { View, Text } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function FormCard({ children, classname }) {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }}
      className={twMerge(
        "w-full p-4 rounded-xl border border-gray-400 bg-white overflow-hidden",
        classname
      )}
    >
      {children}
    </View>
  );
}

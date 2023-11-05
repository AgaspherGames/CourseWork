import { View, Text, Pressable, TouchableHighlight } from "react-native";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";

export default function ({ onPress, children }) {
  return (
    <ShadowView classname=" bg-white rounded-lg items-center mb-4 ">
      <TouchableHighlight
        className="p-2 w-full rounded-lg"
        underlayColor={"rgba(0,0,0,0.1)"}
        onPress={onPress}
      >
        <Text className="text-lg text-center">{children}</Text>
      </TouchableHighlight>
    </ShadowView>
  );
}

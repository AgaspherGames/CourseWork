import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View className="mt-2">
      <ActivityIndicator size={"large"} color={"black"} />
    </View>
  );
}

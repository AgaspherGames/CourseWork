import { View, Text } from "react-native";
import React from "react";

export default function ShadowView({ children, classname, ...props }) {
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
      className={classname}
      {...props}
    >
      {children}
    </View>
  );
}

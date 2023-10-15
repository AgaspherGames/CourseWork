import { View, Text, TextInput } from "react-native";
import React from "react";

const formStyle = "py-2";
const labelStyle = "font-bold";
const inputStyle = "border-b";

export default function InputWithLabel({label, placeholder, ...props}) {
  return (
    <View className={formStyle}>
      <Text className={labelStyle}>{label}</Text>
      <TextInput className={inputStyle} placeholder={placeholder} {...props}/>
    </View>
  );
}

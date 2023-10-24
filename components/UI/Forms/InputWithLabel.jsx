import { View, Text, TextInput } from "react-native";
import React from "react";

const formStyle = "py-2";
const labelStyle = "font-bold";
const inputStyle = "border-b";

export default function InputWithLabel({value, setValue, label, placeholder, ...props}) {
  return (
    <View className={formStyle}>
      <Text className={labelStyle}>{label}</Text>
      <TextInput defaultValue={value} onChangeText={text=>setValue&&setValue(text)} className={inputStyle} placeholder={placeholder} {...props}/>
    </View>
  );
}

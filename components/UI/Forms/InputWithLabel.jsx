import { View, Text, TextInput } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";

const formStyle = "py-2";
const labelStyle = "font-bold";
const inputStyle = "border-b";

export default function InputWithLabel({value, setValue, label, placeholder, error='', ...props}) {
  return (
    <View className={formStyle}>
      <Text className={labelStyle}>{label} <Text className="text-red-500 font-medium pl-2">{error}</Text></Text>
      <TextInput defaultValue={value} onChangeText={text=>setValue&&setValue(text)} className={twMerge(inputStyle, error&&'border-red-500')} placeholderTextColor={error?"rgb(239 68 68)":'#C7C7CD'} placeholder={placeholder} {...props}/>
    </View>
  );
}

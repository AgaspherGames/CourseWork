import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import BlueButton from "../components/UI/buttons/BlueButton";

const formStyle = "py-2";
const labelStyle = "font-bold";
const inputStyle = "border-b";

export default function LoginPage() {
  return (
    <View className="flex-1 items-center  bg-white px-4 pt-4">
      <Image
        source={require("../assets/imgs/cat.png")}
        style={{
          height: 150,
          resizeMode: "contain",
        }}
      />
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 12,
            height: 0,
          },
        }}
        className="w-full p-4 rounded-xl border border-gray-400 bg-white overflow-hidden"
      >
        <View className={formStyle}>
          <Text className={labelStyle}>Email</Text>
          <TextInput className={inputStyle} placeholder="jackyjack@mail.com" />
        </View>
        <View className={formStyle}>
          <Text className={labelStyle}>Пароль</Text>
          <TextInput
            className={inputStyle}
            secureTextEntry
            placeholder="********"
          />
        </View>
        <View className="bg-gray-100 border-0.5 border-gray-400 -mx-4 px-4 py-3 -mb-4 mt-2">
          <Text className="text-xs">Нет аккаунта? <Text className="text-indigo-600 underline">Зарегистрироваться</Text></Text>
        </View>
      </View>
      <BlueButton classname="mt-4">
        Войти
      </BlueButton>
    </View>
  );
}

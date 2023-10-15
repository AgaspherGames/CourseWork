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
import BlueButton from "../../components/UI/buttons/BlueButton";

const formStyle = "py-2";
const labelStyle = "font-bold";
const inputStyle = "border-b";

export default function RegisterPageSecond({ navigation }) {
  return (
    <View className="flex-1 items-center  bg-white px-4 pt-4">
      <Image
        source={require("../../assets/imgs/cat.png")}
        style={{
          height: 150,
          resizeMode: "contain",
        }}
      />
      <Text className="text-2xl font-semibold">Отлично</Text>
      <Text className="text-xl pb-2">А теперь придумайте пароль</Text>
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
        className="w-full p-4 rounded-xl border border-gray-400 bg-white overflow-hidden"
      >
        <View className={formStyle}>
          <Text className={labelStyle}>Пароль</Text>
          <TextInput
            className={inputStyle}
            secureTextEntry
            placeholder="********"
          />
        </View>
        <View className={formStyle}>
          <Text className={labelStyle}>Повторите пароль</Text>
          <TextInput
            className={inputStyle}
            secureTextEntry
            placeholder="********"
          />
        </View>
      </View>
      <BlueButton classname="mt-4">Далее</BlueButton>
    </View>
  );
}

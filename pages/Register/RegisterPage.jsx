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

export default function RegisterPage({navigation}) {
  return (
    <View className="flex-1 items-center  bg-white px-4 pt-4">
      <Image
        source={require("../../assets/imgs/cat_2.png")}
        style={{
          height: 150,
          resizeMode: "contain",
        }}
      />
      <Text className="text-2xl font-semibold">Добро подаловать!</Text>
      <Text className="text-xl pb-2">Расскажите немного о себе</Text>
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
          <Text className={labelStyle}>Почта</Text>
          <TextInput className={inputStyle} placeholder="ivan@mail.com" />
        </View>
        <View className={formStyle}>
          <Text className={labelStyle}>Имя</Text>
          <TextInput className={inputStyle} placeholder="Иван" />
        </View>
        <View className={formStyle}>
          <Text className={labelStyle}>Фамилия</Text>
          <TextInput
            className={inputStyle}
            placeholder="Иванов"
          />
        </View>
        <View className="bg-gray-100 border-0.5 border-gray-400 -mx-4 px-4 py-3 -mb-4 mt-2">
          <Text className="text-xs">
            Уже есть аккаунт?{" "}
            <Text className="text-indigo-600 underline">
              Войти
            </Text>
          </Text>
        </View>
      </View>
      <BlueButton onPress={() => navigation.navigate("Register2")} classname="mt-4">Далее</BlueButton>
    </View>
  );
}

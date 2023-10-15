import { View, Text, Image } from "react-native";
import React from "react";
import BlueButton from "../components/UI/buttons/BlueButton";

export default function WelcomePage({ navigation }) {
  return (
    <View className="flex-1 items-center  bg-white px-4 pt-4">
      <Image
        source={require("../assets/imgs/welcome.png")}
        style={{
          height: 150,
          resizeMode: "contain",
        }}
      />

      <Text className="text-2xl font-bold">Добро пожаловать!</Text>
      <Text className="text-xl ">Выберите способ входа</Text>
      <View className="flex w-full flex-row mt-4 pr-4">
        <BlueButton
          onPress={() => {
            navigation.navigate("Login");
          }}
          classname=""
        >
          Войти
        </BlueButton>
        <BlueButton
          onPress={() => {
            navigation.navigate("Register1");
          }}
          classname="ml-4"
        >
          Регистрация
        </BlueButton>
      </View>
      <View className="flex-1 flex justify-center items-center">
        <Image
          source={require("../assets/imgs/dog.png")}
          style={{
            height: 400,
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
}

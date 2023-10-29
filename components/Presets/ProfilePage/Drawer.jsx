import { View, Text, Pressable } from "react-native";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { useUserInfo } from "../../../hooks/useUserInfo";
import { useAuthStore } from "../../../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";

export default function Drawer() {
  const { setToken, setUser } = useAuthStore((state) => state);
  const navigation = useNavigation();

  function quit() {
    setToken("");
    setUser(null);
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  }

  return (
    <View className="p-4 flex-1 bg-gray-50">
      <ShadowView classname="p-2 bg-white rounded-lg items-center mb-4 ">
        <Text className="text-lg">Редактировать профиль</Text>
      </ShadowView>
      <ShadowView classname="p-2 bg-white rounded-lg items-center mb-4 ">
        <Text className="text-lg">Настройки</Text>
      </ShadowView>
      <ShadowView classname="p-2 bg-white rounded-lg items-center mb-4 ">
        <Text className="text-lg">О приложении</Text>
      </ShadowView>
      <ShadowView classname="p-2 bg-white rounded-lg items-center mb-4 ">
        <Text className="text-lg">Помощь</Text>
      </ShadowView>
      <ShadowView classname="p-2 bg-white rounded-lg items-center mb-4 ">
        <Text className="text-lg">Поделиться</Text>
      </ShadowView>

      <View className="absolute bottom-8 items-center justify-center w-full">
        <Pressable onPress={quit}>
          <Text className="text-lg text-red-500 ">Выйти</Text>
        </Pressable>
      </View>
    </View>
  );
}

import { View, Text, Pressable, Share, Linking } from "react-native";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { useUserInfo } from "../../../hooks/useUserInfo";
import { useAuthStore } from "../../../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";
import DrawerButton from "./DrawerButton";

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

  async function help() {
    await Linking.openURL("mailto:CourseWork@example.com");
  }
  async function share() {
    try {
      const result = await Share.share({
        message:
          "Присоединйся к сообществу владельцев домашних животных в приложении PuppyPaw",
      });
    } catch (error) {}
  }

  return (
    <View className="p-4 flex-1 bg-gray-50">
      <DrawerButton onPress={() => {navigation.navigate("About")}}>Справка</DrawerButton>
      <DrawerButton onPress={help}>Помощь</DrawerButton>
      <DrawerButton onPress={share}>Поделиться</DrawerButton>

      <View className="absolute bottom-8 items-center justify-center w-full">
        <Pressable onPress={quit}>
          <Text className="text-lg text-red-500 ">Выйти</Text>
        </Pressable>
      </View>
    </View>
  );
}

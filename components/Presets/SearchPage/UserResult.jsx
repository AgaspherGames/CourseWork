import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";
import Utils from "../../../services/Utils";
import { useNavigation } from "@react-navigation/native";
import { twMerge } from "tailwind-merge";

export default function UserResult({ user }) {
  const navigation = useNavigation();


  return (
    <View className={twMerge("p-2 bg-white rounded-lg w-fit flex-row justify-between items-center")}>
      <Pressable
        className="flex-row justify-between items-center"
        onPress={() => {
          navigation.navigate("Profile", { userId: user.id });
        }}
      >
        <View className="my-2 flex-col items-center">
          <Image
            source={{
              uri: Utils.getFileLink(user.avatar, true),
            }}
            resizeMode="cover"
            style={{
              height: 48,
              width: 48,
            }}
            className="rounded-full bg-gray-200"
          />
          <View className="ml-2 flex-col justify-end items-start">
            <Text
              style={{ lineHeight: 20 }}
              className="text-xl leading-5 font-medium"
            >
              {user.firstName}
            </Text>
            <Text className="text-lg text-center text-gray-700 leading-5">
              @{user.username}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

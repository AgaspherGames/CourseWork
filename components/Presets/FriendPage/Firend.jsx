import { View, Text, Pressable } from "react-native";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Utils from "../../../services/Utils";
import { useNavigation } from "@react-navigation/native";

export default function Firend({ friend }) {
  const navigation = useNavigation();
  return (
    <ShadowView classname="p-2 bg-white rounded-lg w-full flex-row justify-between items-center mb-4">
      <Pressable
      className="flex-row justify-between items-center w-full"
        onPress={() => {
          navigation.navigate("Profile", { userId: friend.id });
        }}
      >
        <View className="my-2 flex-row items-center">
          <Image
            source={{
              uri: Utils.getFileLink(friend.avatar, true),
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
              {friend.firstName}
            </Text>
            <Text className="text-lg text-center text-gray-700 leading-5">
              @{friend.username}
            </Text>
          </View>
        </View>
        <View className="mr-2">
          <FontAwesome name="trash-o" size={28} color="red" />
        </View>
      </Pressable>
    </ShadowView>
  );
}

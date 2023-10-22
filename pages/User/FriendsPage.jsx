import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import ShadowView from "../../components/UI/Base/ShadowView";
import Firend from "../../components/Presets/FriendPage/Firend";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function FriendsPage({ navigation }) {
  return (
    <ScrollView>
      <View className="pt-8 px-8">
        <View className="flex-row mb-4">
          <ShadowView classname="p-2 bg-white rounded-lg justify-between items-center flex-1 ">
            <Text className="text-lg font-medium">Добавить друга</Text>
          </ShadowView>
          <ShadowView classname="p-2 bg-white rounded-lg justify-center items-center h-11 w-11 ml-2 ">
            <Pressable
              onPress={() => {
                navigation.navigate("QRCode");
              }}
            >
              <FontAwesome name="qrcode" size={24} color="black" />
            </Pressable>
          </ShadowView>
          <ShadowView classname="p-2 bg-white rounded-lg justify-center items-center h-11 w-11 ml-2">
            <Pressable>
              <MaterialCommunityIcons
                name="line-scan"
                size={24}
                color="black"
              />
            </Pressable>
          </ShadowView>
        </View>
        <View className="flex-1 flex-col items-center">
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
          <Firend />
        </View>
      </View>
    </ScrollView>
  );
}

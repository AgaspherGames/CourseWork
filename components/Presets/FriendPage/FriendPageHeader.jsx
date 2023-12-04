import { View, Text, Pressable } from "react-native";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FriendPageHeader() {
  const navigation = useNavigation();
  return (
    <View className="flex-row mb-4">
      <ShadowView classname="p-2 bg-white rounded-lg justify-between items-center flex-1 ">
        <Pressable
          onPress={() => {
            navigation.navigate("Search");
          }}
          className="w-full "
        >
          <Text className="text-lg font-medium text-center">
            Добавить друга
          </Text>
        </Pressable>
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
        <Pressable
          onPress={() => {
            navigation.navigate("ScanQR");
          }}
        >
          <MaterialCommunityIcons name="line-scan" size={24} color="black" />
        </Pressable>
      </ShadowView>
    </View>
  );
}

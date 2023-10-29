import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import ShadowView from "../../components/UI/Base/ShadowView";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import UserService from "../../services/http/UserService";
import Friend from "../../components/Presets/FriendPage/Friend";

export default function FriendsPage({ navigation, route }) {
  const [friends, setFriends] = useState([]);
  const { params } = route;
  const userId = params ? params.userId : null;
  useEffect(() => {
    UserService.fetchFriends(userId).then((resp) =>
      setFriends(resp.data.map((el) => el.user))
    );
  }, []);
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
            <Pressable
              onPress={() => {
                navigation.navigate("ScanQR");
              }}
            >
              <MaterialCommunityIcons
                name="line-scan"
                size={24}
                color="black"
              />
            </Pressable>
          </ShadowView>
        </View>
        <View className="flex-1 flex-col items-center">
          {friends.map((el, ind) => (
            <Friend key={ind} friend={el} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

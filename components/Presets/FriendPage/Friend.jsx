import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Utils from "../../../services/Utils";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import UserService from "../../../services/http/UserService";

export default function Friend({ friend, isMe }) {
  const navigation = useNavigation();

  const scale = useSharedValue(1);
  const [isSubscribed, setIsSubscribed] = useState(true);

  const unSubscribeStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const subscribeStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - scale.value }],
  }));
  const bgStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scale.value,
        [0, 1],
        ["rgba(255,0,0,0.08)", "rgba(255,255,255,1)"]
      ),
    };
  });

  function subscribe() {
    if (isSubscribed) {
      setIsSubscribed(false);
      UserService.unFollow(friend.id);
      scale.value = withSpring(0);
    } else {
      setIsSubscribed(true);
      UserService.follow(friend.id);
      scale.value = withSpring(1);
    }
  }

  return (
    <ShadowView classname="p-2 bg-white rounded-lg w-full flex-row justify-between items-center mb-4">
      <Animated.View
        style={bgStyle}
        className="absolute bg-opacity-20 inset-x-0 inset-y-0 rounded-lg "
      />
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
        {isMe && (
          <View className="mr-2">
            <Pressable onPress={subscribe}>
              <Animated.View style={unSubscribeStyle}>
                <FontAwesome name="trash-o" size={28} color="red" />
              </Animated.View>
              <Animated.View style={subscribeStyle} className="absolute">
                <FontAwesome name="plus" size={28} color="#3b82f6" />
              </Animated.View>
            </Pressable>
          </View>
        )}
      </Pressable>
    </ShadowView>
  );
}

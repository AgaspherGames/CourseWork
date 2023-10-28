import { View, Text, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import UserService from "../../../services/http/UserService";

export default function SubscribeButton({ userId }) {
  const scale = useSharedValue(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const unSubscribeStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const subscribeStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - scale.value }],
  }));
  const buttonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scale.value,
        [0, 1],
        ["#3b82f6", "#6b7280"]
      ),
    };
  });

  useEffect(() => {
    UserService.fetchIsFollow(userId).then((resp) => {
      setIsSubscribed(resp.data);
      scale.value = +resp.data;

    });
  }, [userId]);

  function subscribe() {
    if (isSubscribed) {
      setIsSubscribed(false);
      UserService.unFollow(userId);
      scale.value = withSpring(0);
    } else {
      setIsSubscribed(true);
      UserService.follow(userId);
      scale.value = withSpring(1);
    }
  }

  return (
    <View className="px-4 w-full">
      <TouchableHighlight
        onPress={subscribe}
        className="my-2 rounded-lg"
        underlayColor="#60a5fa"
      >
        <Animated.View
          style={buttonStyle}
          className="w-full py-2 rounded-lg  flex-row justify-center"
        >
          <View className="flex-row ">
            <Animated.View
              style={unSubscribeStyle}
              className="absolute -left-7"
            >
              <Feather name="check-circle" size={24} color="white" />
            </Animated.View>
            <Animated.Text
              style={unSubscribeStyle}
              className="absolute text-base text-white ml-2"
            >
              Вы подписаны
            </Animated.Text>
            <Animated.Text
              style={subscribeStyle}
              className="text-base text-white ml-2"
            >
              Подписаться
            </Animated.Text>
          </View>
        </Animated.View>
      </TouchableHighlight>
    </View>
  );
}

import { View, Text, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { twMerge } from "tailwind-merge";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  cond,
} from "react-native-reanimated";
import PostService from "../../../services/http/PostService";
import { useAppStore } from "../../../stores/AppStore";

export default function LikeButton({postId}) {

  const page = useAppStore(state=>state.page)
  const [isLiked, setIsLiked] = useState(false)
  const scale = useSharedValue(1);

  const likeStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const noLikeStyles = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - scale.value }],
  }));

  useEffect(() => {
    PostService.fetchIsLiked(postId).then(resp => setIsLiked(resp.data))
  }, [page])

  function changeIsLiked(newValue) {
    if (newValue) {
      PostService.likePost(postId)
    } else{
      PostService.unlikePost(postId)
    }
    setIsLiked(newValue)
  }

  const handlePress = () => {
    changeIsLiked(!isLiked);
  };

  useEffect(() => {
    scale.value = withSpring(isLiked ? 0 : 1);
  }, [isLiked]);

  return (
    <>
      <Pressable onPress={handlePress} className="absolute">
        <Animated.View style={[likeStyles]}>
          <AntDesign name={"hearto"} size={24} color="red" />
        </Animated.View>
        <Animated.View className="absolute" style={[noLikeStyles]}>
          <AntDesign name={"heart"} size={24} color="red" />
        </Animated.View>
      </Pressable>
    </>
  );
}

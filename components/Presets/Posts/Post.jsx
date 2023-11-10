import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { twMerge } from "tailwind-merge";
import { useNavigation } from "@react-navigation/native";
import LikeButton from "../../UI/buttons/LikeButton";
import SendButton from "../../UI/buttons/SendButton";
import Utils from "../../../services/Utils";
import PostService from "../../../services/http/PostService";

export default function Post({ withActions = false, post }) {
  const navigation = useNavigation();
  const [commentText, setCommentText] = useState("");

  function sendComment() {
    if (!commentText) return;
    setCommentText("");
    PostService.addCommentary(post.id, commentText);
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Post", { postId: post.id });
      }}
    >
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        }}
        className="w-auto bg-gray-100 h-96 my-4 mx-8 overflow-hidden rounded-lg relative "
      >
        <Image
          source={{
            uri: Utils.getFileLink(post.imgs[0]),
            // uri: "https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg",
          }}
          style={{
            // height: 300,
            aspectRatio: 3 / 4,
            // flex: 1,
            width: "auto",
          }}
        />
        <View className="absolute bottom-2 inset-x-2 flex gap-2">
          <BlurView
            tint="dark"
            intensity={40}
            className="rounded-full overflow-hidden px-2 py-2"
          >
            <View className="flex-row">
              <Pressable
                onPress={() => {
                  navigation.navigate("Profile", { userId: post.user.id });
                }}
              >
                <Text className="font-semibold text-white">
                  @{post.user.username}
                </Text>
              </Pressable>
              <Text numberOfLines={1} className="text-gray-100">
                {" "}
                —{" " + post.title}
              </Text>
            </View>
          </BlurView>

          <View
            className={twMerge(
              "flex-row justify-between ",
              !withActions && "hidden"
            )}
          >
            <BlurView
              tint="dark"
              intensity={40}
              className="rounded-full overflow-hidden justify-center px-4 flex-1 pr-12 relative"
            >
              <TextInput
                onChangeText={(text) => setCommentText(text)}
                defaultValue={commentText}
                placeholderTextColor={"#d1d5db"}
                placeholder="Класс..."
                className="text-white border-b-0.5 border-white"
              />
              <View className="absolute w-6 right-4">
                <SendButton disabled={!commentText} onPress={sendComment} />
                {/* <Feather name="send" size={20} color="white" /> */}
              </View>
            </BlurView>

            <BlurView
              tint="dark"
              intensity={40}
              className="rounded-full overflow-hidden w-10 h-10 justify-center items-center aspect-square ml-2"
            >
              <LikeButton postId={post.id} />
            </BlurView>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

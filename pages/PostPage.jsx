import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import ShadowView from "../components/UI/Base/ShadowView";
import Title from "../components/UI/Base/Title";
import LikeButton from "../components/UI/buttons/LikeButton";
import { Pressable } from "react-native";
import PostInfo from "../components/Presets/PostPage/PostInfo";
import { TextInput } from "react-native";
import SendButton from "../components/UI/buttons/SendButton";
import Commentary from "../components/Presets/PostPage/Commentary";
import PostService from "../services/http/PostService";
import FileService from "../services/FileService";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default function PostPage({ route }) {
  const { params } = route;
  const postId = params ? params.postId : null;

  const [post, setPost] = useState();

  useEffect(() => {
    PostService.fetchPost(postId).then((resp) => setPost(resp.data));
  }, []);

  console.log(post);

  if (!post) return <View></View>

  return (
    <ScrollView>
      <View className="flex-1">
        <View className="flex-row">
          <View
            style={{
              height: 300,
              flex: 1,
              width: null,
            }}
            className="m-4 rounded-xl overflow-hidden"
          >
            <Swiper loop style={styles.wrapper} className="bg-red-100 ">
              {post.imgs.map((el) => (
                <View className="flex-1">
                  <Image
                    source={{
                      uri: FileService.getFileLink(el),
                    }}
                    style={{
                      flex: 1,
                    }}
                  />
                </View>
              ))}
            </Swiper>
          </View>
        </View>

        <PostInfo post={post} />
      </View>
      <ShadowView classname="bg-white rounded-xl overflow-hidden flex-1 h-10 justify-center px-4 mx-4 mt-6">
        <Text className="text-xl">187 комментариев</Text>
      </ShadowView>
      <View className="flex-row mx-4 mt-4 mb-6">
        <ShadowView classname="bg-white rounded-lg overflow-hidden flex-1 min-h-[40px] justify-center px-4 py-2 pr-12 relative">
          <TextInput
            multiline={true}
            placeholderTextColor={"#d1d5db"}
            placeholder="Класс..."
            className="text-gray-900 border-b-0.5 border-gray-900"
          />
          <View className="absolute w-6 right-4">
            <SendButton dark />
            {/* <Feather name="send" size={20} color="white" /> */}
          </View>
        </ShadowView>
        <ShadowView classname=" bg-white rounded-full overflow-hidden w-10 h-10 justify-center items-center aspect-square ml-2">
          <LikeButton />
        </ShadowView>
      </View>

      <Commentary />
      <Commentary />
      <Commentary />
    </ScrollView>
  );
}

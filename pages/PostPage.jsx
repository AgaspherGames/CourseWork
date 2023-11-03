import { View, Text, Image, ScrollView, Modal } from "react-native";
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
import Utils from "../services/Utils";
import { BlurView } from "expo-blur";
import ImageModal from "../components/Presets/PostPage/ImageModal";
import Loader from "../components/UI/Base/Loader";

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
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");

  const [modal, setModal] = useState({ isOpened: false, ind: "" });

  async function sendComment() {
    setCommentText("");
    await PostService.addCommentary(postId, commentText);
    PostService.fetchCommentaries(postId).then((resp) =>
      setComments(resp.data)
    );
  }

  useEffect(() => {
    PostService.fetchPost(postId).then((resp) => setPost(resp.data));
    PostService.fetchCommentaries(postId).then((resp) =>
      setComments(resp.data)
    );
  }, []);

  if (!post) return <View className="flex-1 justify-center items-center"><Loader /></View>;

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
            <Swiper
              loop={false}
              style={styles.wrapper}
              className="bg-gray-100 "
            >
              {post.imgs.map((el, ind) => {
                return (
                  <View key={el} className="flex-1">
                    <Pressable
                      onPress={() => {
                        setModal((p) => ({ ind, isOpened: true }));
                      }}
                      className="flex-1 relative"
                    >
                      <Image
                        // className="absolute inset-x-0 inset-y-0"
                        source={{
                          uri: Utils.getFileLink(el),
                        }}
                        style={{
                          flex: 1,
                        }}
                      />
                    </Pressable>
                  </View>
                );
              })}
            </Swiper>
          </View>
        </View>

        <ImageModal modal={modal} setModal={setModal} imgs={post.imgs} />

        <PostInfo post={post} />
      </View>
      <ShadowView classname="bg-white rounded-xl overflow-hidden flex-1 h-10 justify-center px-4 mx-4 mt-6">
        <Text className="text-xl">
          {comments.total}{" "}
          {Utils.wordForm(comments.total, [
            " комментарий",
            " комментария",
            " комментариев",
          ])}
        </Text>
      </ShadowView>
      <View className="flex-row mx-4 mt-4 mb-6">
        <ShadowView classname="bg-white rounded-lg overflow-hidden flex-1 min-h-[40px] justify-center px-4 py-2 pr-12 relative">
          <TextInput
            onChangeText={(text) => setCommentText(text)}
            defaultValue={commentText}
            multiline={true}
            placeholderTextColor={"#d1d5db"}
            placeholder="Класс..."
            className="text-gray-900 border-b-0.5 border-gray-900"
          />
          <View className="absolute w-6 right-4">
            <SendButton onPress={sendComment} dark />
            {/* <Feather name="send" size={20} color="white" /> */}
          </View>
        </ShadowView>
        <ShadowView classname=" bg-white rounded-full overflow-hidden w-10 h-10 justify-center items-center aspect-square ml-2">
          <LikeButton postId={postId} />
        </ShadowView>
      </View>

      {comments?.comments?.map((com, ind) => (
        <Commentary key={ind} comment={com} />
      ))}
    </ScrollView>
  );
}

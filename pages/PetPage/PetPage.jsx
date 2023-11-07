import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import ShadowView from "../../components/UI/Base/ShadowView";
import Title from "../../components/UI/Base/Title";
import LikeButton from "../../components/UI/buttons/LikeButton";
import { Pressable } from "react-native";
import PostInfo from "../../components/Presets/PostPage/PostInfo";
import { TextInput } from "react-native";
import SendButton from "../../components/UI/buttons/SendButton";
import Commentary from "../../components/Presets/PostPage/Commentary";
import PostService from "../../services/http/PostService";
import Utils from "../../services/Utils";
import { BlurView } from "expo-blur";
import ImageModal from "../../components/Presets/PostPage/ImageModal";
import Loader from "../../components/UI/Base/Loader";
import PetService from "../../services/http/PetService";
import PetInfo from "../../components/Presets/PetPage/PetInfo";

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

export default function PetPage({ navigation, route }) {
  const { params } = route;
  const petId = params ? params.petId : null;

  const [pet, setPet] = useState();
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
    PetService.fetchPet(petId).then((resp) => setPet(resp.data));
  }, []);

  if (!pet)
    return (
      <View className="flex-1 justify-center items-center">
        <Loader />
      </View>
    );

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 pb-4">
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
                {pet.imgs.map((el, ind) => {
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
          <PetInfo pet={pet} isMe={false} />
          <ImageModal modal={modal} setModal={setModal} imgs={pet.imgs} />

          {/* <PostInfo post={post} /> */}
          <View className="px-4">
            {pet.documents.map((el) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("DocPage", { docId: el.id });
                }}
              >
                <ShadowView classname="p-2 bg-white rounded-lg my-2 flex-row">
                  <View className="mr-4 flex-1">
                    <Image
                      className="flex-1 aspect-square rounded-md"
                      source={{ uri: Utils.getFileLink(el.imgs[0], true) }}
                    />
                  </View>
                  <View className="w-fit flex-[4]">
                    <Title>{el.title}</Title>
                    <Text className="" ellipsizeMode="head" numberOfLines={2}>
                      {el.description}
                    </Text>
                  </View>
                </ShadowView>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

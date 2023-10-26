import { FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Post from "../components/Presets/Posts/Post";
import ShadowView from "../components/UI/Base/ShadowView";
import { Text } from "react-native";
import { View } from "react-native";
import InputWithLabel from "../components/UI/Forms/InputWithLabel";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PostForm from "../components/Presets/MainPage/PostForm";
import PostService from "../services/http/PostService";
import { useFocusEffect } from "@react-navigation/native";
import { useAppStore } from "../stores/AppStore";

export default function MainPage() {
  const page = useAppStore((state) => state.page);
  const [posts, setPosts] = useState([]);

  const [isOpened, setIsOpened] = useState(false);

  async function updatePosts() {
    const { data } = await PostService.fetchPosts();
    setPosts(data);
  }

  useEffect(() => {
    updatePosts();

    return () => {
      setPosts([]);
    };
  }, [page]);

  return (
    <View className="relative">
      <ScrollView
        scrollEnabled={true}
        nestedScrollEnabled={true}
        className="relative"
      >
        <View>
          <Pressable
            onPress={() => {
              setIsOpened(true);
            }}
          >
            <ShadowView classname="mx-8 mt-4 bg-white p-4 rounded-lg  h-auto flex-row justify-between items-center">
              <Text className="text-lg font-medium">Опубликовать запись</Text>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </ShadowView>
          </Pressable>
        </View>
        <PostForm
          updatePosts={updatePosts}
          isOpened={isOpened}
          setIsOpened={setIsOpened}
        />
        {posts.map((item, ind) => (
          <Post key={item.id} withActions post={item} />
        ))}
      </ScrollView>
    </View>
  );
}

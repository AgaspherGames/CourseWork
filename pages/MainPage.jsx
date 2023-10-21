import { FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
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

export default function MainPage() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  
  const [isOpened, setIsOpened] = useState(false);
  return (
    <SafeAreaView className="relative">
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
        <PostForm isOpened={isOpened} setIsOpened={setIsOpened} />
        {DATA.map((item) => (
          <Post key={item.id} withActions title={item.title} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

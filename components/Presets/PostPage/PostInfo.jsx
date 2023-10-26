import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import Title from "../../UI/Base/Title";
import { Pressable } from "react-native";
import FileService from "../../../services/FileService";

export default function PostInfo({post}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(post);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <ShadowView classname="mx-4 bg-white p-4 rounded-xl flex-1">
      <View className="flex-row justify-between items">

        <View className="my-2 flex-row items-center">
          <Image
            source={{
              // uri: FileService.getFileLink(post.user.avatar),
            }}
            resizeMode="cover"
            style={{
              height: 48,
              width: 48,
            }}
            className="rounded-full bg-gray-200"
          />
          <View className="ml-2 flex-col justify-end">
            <Text
              style={{ lineHeight: 20 }}
              className="text-xl leading-tight font-medium mt-1"
            >
              Артем К.
            </Text>
            <Text
              style={{ lineHeight: 20 }}
              className="text-base text-gray-700 leading-tight "
            >
              @agaspher
            </Text>
          </View>
        </View>
      </View>

      <View className="mb-2">
        <Title classname="">{post.title}</Title>
        <Text className=" text-base text-gray-500">{new Date(post.uploadDate).toLocaleDateString("ru-RU", options)}</Text>
      </View>
      <Pressable
        onPress={() => {
          setIsOpen((p) => !p);
        }}
      >
        <Text
          style={{ lineHeight: 20 }}
          numberOfLines={isOpen ? 0 : 8}
          className="text-lg"
        >
          {post.description}
        </Text>
      </Pressable>
    </ShadowView>
  );
}

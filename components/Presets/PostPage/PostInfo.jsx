import { View, Text } from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import Title from "../../UI/Base/Title";
import { Pressable } from "react-native";

export default function PostInfo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ShadowView classname="mx-4 bg-white p-4 rounded-xl flex-1">
      <View className="flex-row items-center">
        <Title classname="mb-2">Название поста</Title>
        <Text className="ml-2 text-base text-gray-500"> 20 сентября</Text>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero
          et accusantium perspiciatis tempora placeat, dicta cupiditate sequi
          dolorem ducimus vero a beatae omnis optio obcaecati ea assumenda?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Rem libero et
          accusantium perspiciatis tempora placeat, dicta cupiditate sequi
          dolorem ducimus vero a beatae omnis optio obcaecati ea assumenda?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Rem libero et
          accusantium perspiciatis tempora placeat, dicta cupiditate sequi
          dolorem ducimus vero a beatae omnis optio obcaecati ea assumenda?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        </Text>
      </Pressable>
    </ShadowView>
  );
}

import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import Title from "../../UI/Base/Title";
import { Pressable } from "react-native";

export default function PostInfo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ShadowView classname="mx-4 bg-white p-4 rounded-xl flex-1">
      <View className="flex-row justify-between items">

        <View className="my-2 flex-row items-center">
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.8112410131653a63c0596a57ebc85519?rik=TrmOhl0eZJU0Nw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-rL0UdLNivjY%2fUhvtGHddwUI%2fAAAAAAAAAy8%2fGPJ0ojd6G2w%2fs1600%2fpromotional-photoshoot-tyler-durden.jpg&ehk=t9CBGtalAmIr39aULbo2gDn5oZRATnhUic1bKpqCtto%3d&risl=&pid=ImgRaw&r=0",
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
        <Title classname=""> Название поста</Title>
        <Text className=" text-base text-gray-500"> 20 сентября</Text>
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

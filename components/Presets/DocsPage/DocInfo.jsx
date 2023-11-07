import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import Title from "../../UI/Base/Title";
import { Pressable } from "react-native";
import Utils from "../../../services/Utils";
import { useNavigation } from "@react-navigation/native";

export default function DocInfo({ document }) {
  const [isOpen, setIsOpen] = useState(false);
  var options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <ShadowView classname="mx-4 bg-white p-4 rounded-xl flex-1">
      <View className="mb-2">
        <Title classname="">{document.title}</Title>
        <Text className=" text-base text-gray-500">
          {new Date(document.uploadDate).toLocaleDateString("ru-RU", options)}
        </Text>
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
          {document.description}
        </Text>
      </Pressable>
    </ShadowView>
  );
}

import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";
import Title from "../../UI/Base/Title";
import Utils from "../../../services/Utils";
import { useNavigation } from "@react-navigation/native";

export default function Document({ pet }) {
  const navigation = useNavigation();
  return (
    <Pressable
      className="w-full"
      onPress={() => {
        navigation.navigate("PetPage", { petId: pet.id });
      }}
    >
      <ShadowView classname=" p-2 bg-white rounded-lg w-full my-2">
        <View className="flex-row items-center ">
          <Image
            height={120}
            className={"rounded-lg aspect-square"}
            source={{ uri: Utils.getFileLink(pet?.imgs[0]) }}
          />
          <View className="flex-1 px-2">
            <Title classname={"flex-1 text-center"}>{pet.name}</Title>
            <View className="flex-row justify-center pr-8">
              {pet.documents
                .filter((_, ind) => ind < 4)
                .map((el) => (
                  <ShadowView
                    key={el.imgs[0]}
                    classname="p-1 bg-gray-100 -mr-8 rounded-xl"
                  >
                    <Image
                      height={64}
                      className={"rounded-lg aspect-square"}
                      source={{
                        uri: Utils.getFileLink(el.imgs[0], true),
                      }}
                    />
                  </ShadowView>
                ))}
            </View>
          </View>
        </View>
      </ShadowView>
    </Pressable>
  );
}

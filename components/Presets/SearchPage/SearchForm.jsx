import { View, Text, TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import ShadowView from "../../UI/Base/ShadowView";

export default function SearchForm({ searchQuery, setSearchQuery }) {
  return (
    <ShadowView classname="p-2 px-4 bg-white rounded-lg  mx-4 mt-4">
      <TextInput
        defaultValue={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        className="w-full text-base"
        placeholder="Поиск"
      />
      <View className="absolute right-4 top-2 bottom-2 flex items-center justify-center">
        <Octicons name={"search"} size={18} color={"black"} />
      </View>
    </ShadowView>
  );
}

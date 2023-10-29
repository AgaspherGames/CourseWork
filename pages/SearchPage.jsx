import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import Title from "../components/UI/Base/Title";
import ShadowView from "../components/UI/Base/ShadowView";
import Friend from "../components/Presets/FriendPage/Friend";
import UserResult from "../components/Presets/SearchPage/UserResult";

export default function SearchPage() {
  return (
    <ScrollView nestedScrollEnabled className="flex-1">
      <Title classname="py-3 px-4 text-2xl">Результаты поиска: agas</Title>
      <ShadowView classname="p-2 bg-white rounded-lg mx-2 mb-4">
        <Title classname="my-4 ml-2">Пользователи:</Title>
        <View className="border border-gray-200 rounded-xl overflow-hidden">
          <ScrollView horizontal className="flex-row">
            <UserResult
              user={{
                id: 2,
                avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                username: "artk",
                firstName: "Artyom",
                lastName: "Karmykov",
              }}
            />
            <UserResult
              user={{
                id: 2,
                avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                username: "artk",
                firstName: "Artyom",
                lastName: "Karmykov",
              }}
            />
            <UserResult
              user={{
                id: 2,
                avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                username: "artk",
                firstName: "Artyom",
                lastName: "Karmykov",
              }}
            />
            <UserResult
              user={{
                id: 2,
                avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                username: "artk",
                firstName: "Artyom",
                lastName: "Karmykov",
              }}
            />
            <UserResult
              user={{
                id: 2,
                avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                username: "artk",
                firstName: "Artyom",
                lastName: "Karmykov",
              }}
            />
            <UserResult
              user={{
                id: 2,
                avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                username: "artk",
                firstName: "Artyom",
                lastName: "Karmykov",
              }}
            />
          </ScrollView>
        </View>
        <View className="w-full justify-end items-end my-2 px-2 ">
          <Pressable>
            <Text className="text-gray-600">Раскрыть</Text>
          </Pressable>
        </View>
      </ShadowView>
      <ShadowView classname="p-2 bg-white rounded-lg mx-2">
        <Title classname="my-4 ml-2">Посты:</Title>
        <View className="border border-gray-200 rounded-xl overflow-hidden">
          <ScrollView horizontal className="h-64 flex-row">
            <View className="flex-row">
              <UserResult
                user={{
                  id: 2,
                  avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                  username: "artk",
                  firstName: "Artyom",
                  lastName: "Karmykov",
                }}
              />
              <UserResult
                user={{
                  id: 2,
                  avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                  username: "artk",
                  firstName: "Artyom",
                  lastName: "Karmykov",
                }}
              />
              <UserResult
                isLast
                user={{
                  id: 2,
                  avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                  username: "artk",
                  firstName: "Artyom",
                  lastName: "Karmykov",
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View className="w-full justify-end items-end my-2 px-2 ">
          <Pressable>
            <Text className="text-gray-600">Раскрыть</Text>
          </Pressable>
        </View>
      </ShadowView>
    </ScrollView>
  );
}

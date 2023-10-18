import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';


export default function Post({title}) {
  return (
    <View
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    }}
    className="w-auto bg-red-100 h-96 my-4 mx-8 overflow-hidden rounded-lg relative"
  >
    <Image
      source={{
        uri: "https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg",
      }}
      style={{
        height: 300,
        flex: 1,
        width: null,
      }}
    />
    <View className="absolute bottom-2 inset-x-2 flex gap-2">
      <BlurView
        tint="dark"
        intensity={40}
        className="rounded-full overflow-hidden px-2 py-2"
      >
        <Text className="text-gray-300">
          <Text className="font-semibold text-white">@artk</Text> — Интересные
          факты о кошках
        </Text>
      </BlurView>

      <View className="flex-row justify-between ">
        <BlurView
          tint="dark"
          intensity={40}
          className="rounded-full overflow-hidden justify-center px-4 flex-1 pr-12 relative"
        >
          <TextInput
            placeholderTextColor={"#d1d5db"}
            placeholder="Класс..."
            className="text-white border-b-0.5 border-white"
          />
          <View className="absolute w-6 right-4">
            <Feather name="send" size={20} color="white" />
          </View>
        </BlurView>

        <BlurView
          tint="dark"
          intensity={40}
          className="rounded-full overflow-hidden w-10 h-10 justify-center items-center aspect-square ml-2"
        >
          <Text className="text-gray-300 text-xl">♥</Text>
        </BlurView>
      </View>
    </View>
  </View>
  )
}
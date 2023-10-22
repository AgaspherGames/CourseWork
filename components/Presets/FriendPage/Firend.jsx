import { View, Text } from 'react-native'
import React from 'react'
import ShadowView from '../../UI/Base/ShadowView'
import { Image } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";


export default function Firend() {
  return (
    <ShadowView classname="p-2 bg-white rounded-lg w-full flex-row justify-between items-center mb-4">
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
              className="text-xl leading-5 font-medium"
            >
              Артем К.
            </Text>
            <Text className="text-lg text-center text-gray-700 leading-5">
              @agaspher
            </Text>
          </View>
        </View>
        <View className="mr-2">
          <FontAwesome name="trash-o" size={28} color="red" />
        </View>
      </ShadowView>
  )
}
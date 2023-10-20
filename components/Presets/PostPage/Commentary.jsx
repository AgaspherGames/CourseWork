import { View, Text } from 'react-native'
import React from 'react'
import ShadowView from '../../UI/Base/ShadowView'
import { Image } from 'react-native'

export default function Commentary() {
  return (
    <ShadowView classname="bg-white mx-4 p-4 rounded-xl flex-1 mb-4">
        <View className="">
          <View className="my-2 flex-row items-center">
            <Image
              source={{
                uri: "https://th.bing.com/th/id/R.8112410131653a63c0596a57ebc85519?rik=TrmOhl0eZJU0Nw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-rL0UdLNivjY%2fUhvtGHddwUI%2fAAAAAAAAAy8%2fGPJ0ojd6G2w%2fs1600%2fpromotional-photoshoot-tyler-durden.jpg&ehk=t9CBGtalAmIr39aULbo2gDn5oZRATnhUic1bKpqCtto%3d&risl=&pid=ImgRaw&r=0",
              }}
              resizeMode="cover"
              style={{
                height: 32,
                width: 32,
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
            </View>
          </View>
          <Text style={{ lineHeight: 20 }} className="text-lg ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero
            et accusantium perspiciatis tempora placeat, dicta cupiditate sequi
            dolorem ducimus vero a beatae omnis optio obcaecati ea assumenda?
            Ipsa ea repellendus repudiandae aperiam ducimus velit provident vero
            nisi, enim cupiditate temp
          </Text>
        </View>
      </ShadowView>
  )
}
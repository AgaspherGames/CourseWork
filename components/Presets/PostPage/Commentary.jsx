import { View, Text } from 'react-native'
import React from 'react'
import ShadowView from '../../UI/Base/ShadowView'
import { Image } from 'react-native'
import Utils from '../../../services/Utils'

export default function Commentary({comment}) {
  return (
    <ShadowView classname="bg-white mx-4 p-4 rounded-xl flex-1 mb-4">
        <View className="">
          <View className="my-2 flex-row items-center">
            <Image
              source={{
                uri: Utils.getFileLink(comment.user.avatar),
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
                {comment.user.firstName}
              </Text>
            </View>
          </View>
          <Text style={{ lineHeight: 20 }} className="text-lg ">
          {comment.text}
          </Text>
        </View>
      </ShadowView>
  )
}
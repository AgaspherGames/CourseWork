import { View, Text } from 'react-native'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Title({children, classname}) {
  return (
      <Text className={twMerge("text-2xl font-semibold", classname)}>{children}</Text>
  )
}
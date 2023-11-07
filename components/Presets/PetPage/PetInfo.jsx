import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import InputWithLabel from "../../UI/Forms/InputWithLabel";
import BlueButton from "../../UI/buttons/BlueButton";
import SubscribeButton from "../../UI/buttons/SubscribeButton";
import Utils from "../../../services/Utils";
import Title from "../../UI/Base/Title";
import { twMerge } from "tailwind-merge";
import { TextInput } from "react-native-gesture-handler";
import UserService from "../../../services/http/UserService";

export default function PetInfo({ pet }) {
  const [editMode, setEditMode] = useState(false);
  
  const height = useSharedValue(0);
  const panelStyle = useAnimatedStyle(() => ({
    width: 240 + height.value * 96,
  }));

  return (
    <View className="mt-4 flex-row justify-center ">
      <ShadowView classname="p-2 px-4 bg-white rounded-lg ">
        <Pressable
          onPress={() => {
            setEditMode((p) => !p);
          }}
        >
          <Animated.View style={[panelStyle]}>
            <Text className="text-lg text-center text-gray-700 leading-tight">
              Пасспорт: {pet.passportNumber}
            </Text>
            <View classname="relative flex-row text-center items-center justify-center">
              <View className="relative">
                <Title classname={"text-center px-2"}>{pet.name}</Title>
              </View>
            </View>
          </Animated.View>
        </Pressable>
      </ShadowView>
    </View>
  );
}

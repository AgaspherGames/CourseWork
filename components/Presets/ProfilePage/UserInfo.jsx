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

export default function UserInfo({ user, isMe, navigation, updateUserInfo }) {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const fullName = useMemo(
    () =>
      editMode
        ? `${firstName} ${lastName}`
        : `${user.firstName} ${user.lastName}`,
    [editMode, firstName, lastName, user]
  );

  const height = useSharedValue(0);

  const editPanelStyle = useAnimatedStyle(() => ({
    maxHeight: height.value * 200,
    transform: [{ scaleY: height.value }],
  }));
  const panelStyle = useAnimatedStyle(() => ({
    width: 240 + height.value * 96,
  }));

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user]);
  useEffect(() => {
    const newValue = editMode ? 1 : 0;
    height.value = withTiming(newValue, {
      duration: 100,
      easing: Easing.inOut(Easing.quad),
    });
  }, [editMode]);
  async function saveEdit() {
    try {
      await UserService.edit({
        firstName,
        lastName,
      });
      await updateUserInfo();
      setEditMode(false);
    } catch (error) {}
  }

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
              @{user.username}
            </Text>
            <View classname="relative flex-row text-center items-center justify-center">
              <View className="relative">
                {isMe && (
                  <View className="absolute inset-x-0 inset-y-0 -mr-2 justify-center items-end">
                    <Pressable
                      onPress={() => {
                        setEditMode((p) => !p);
                      }}
                    >
                      <FontAwesome5 name="pen" size={18} color="black" />
                    </Pressable>
                  </View>
                )}
                <Title classname={"text-center px-2"}>{fullName}</Title>
              </View>
              <Animated.View
                style={[editPanelStyle]}
                className={twMerge("overflow-hidden")}
              >
                <InputWithLabel
                  value={firstName}
                  setValue={(text) => setFirstName(text)}
                  label={"Имя"}
                  placeholder={"Иван"}
                />
                <InputWithLabel
                  value={lastName}
                  setValue={(text) => setLastName(text)}
                  label={"Фамилия"}
                  placeholder={"Иванов"}
                />
                <BlueButton onPress={saveEdit} classname={"w-full"}>
                  Сохранить
                </BlueButton>
              </Animated.View>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("Friends", { userId: user.id });
              }}
            >
              <View className="flex-row justify-center items-center">
                {user?.friends
                  ?.filter((_, ind) => ind < 3)
                  .map((el, ind) => (
                    <View
                      key={ind}
                      className={twMerge(
                        "rounded-full bg-white p-1",
                        ind > 0 && "-ml-4"
                      )}
                    >
                      <Image
                        source={{
                          uri: Utils.getFileLink(el?.user?.avatar, true),
                        }}
                        resizeMode="cover"
                        style={{
                          height: 30,
                          width: 30,
                        }}
                        className="rounded-full bg-gray-200 p-2"
                      />
                    </View>
                  ))}
                <Text className="text-base ml-2">
                  {user.friendsCount}{" "}
                  {Utils.wordForm(user.friendsCount, [
                    " подписка",
                    " подписки",
                    " подписок",
                  ])}
                </Text>
              </View>
            </Pressable>
            {!isMe && <SubscribeButton userId={user.id} />}
          </Animated.View>
        </Pressable>
      </ShadowView>
    </View>
  );
}

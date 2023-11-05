import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Title from "../../components/UI/Base/Title";
import ShadowView from "../../components/UI/Base/ShadowView";
import Post from "../../components/Presets/Posts/Post";
import { Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useUserInfo } from "../../hooks/useUserInfo";
import UserService from "../../services/http/UserService";
import { url } from "../../services/http/http";
import Utils from "../../services/Utils";
import { twMerge } from "tailwind-merge";
import { useAppStore } from "../../stores/AppStore";
import { useProfileStore } from "../../stores/ProfileStore";
import DrawerContent from "../../components/Presets/ProfilePage/Drawer";
import { Drawer } from "react-native-drawer-layout";
import { AntDesign } from "@expo/vector-icons";
import PetForm from "../../components/Presets/ProfilePage/PetForm";
import Loader from "../../components/UI/Base/Loader";
import UserInfo from "../../components/Presets/ProfilePage/UserInfo";

export default function UserPage({ navigation, route }) {
  const { isDrawerOpened, setIsDrawerOpened } = useProfileStore(
    (state) => state
  );
  const { user: currentUser, updateUserInfo } = useUserInfo();
  const [image, setImage] = useState(null);
  const page = useAppStore((state) => state.page);

  const { params } = route;
  const userId = params ? params.userId : null;
  const [user, setUser] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMe = useMemo(
    () => userId == currentUser.id || !userId,
    [currentUser, userId]
  );

  useEffect(() => {
    if (user?.id && userId != user?.id && !(!userId && isMe)) {
      setUser(undefined);
    }
    if (isMe) {
      updateUserInfo();
    } else {
      UserService.fetchUser(userId).then((resp) => setUser(resp.data));
    }
  }, [userId, page]);

  useEffect(() => {
    if (isMe) {
      setUser(currentUser);
    }
  }, [currentUser]);

  if (!user) return <Loader />;

  return (
    <Drawer
      drawerPosition="right"
      open={isDrawerOpened}
      onOpen={() => {
        !isDrawerOpened && setIsDrawerOpened(true);
      }}
      onClose={() => {
        isDrawerOpened && setIsDrawerOpened(false);
      }}
      renderDrawerContent={DrawerContent}
      drawerStyle={{ backgroundColor: "red", right: 0 }}
    >
      <View className="flex-1">
        <ScrollView className="flex-1 ">
          <View className="w-full flex flex-row justify-center mt-8 ">
            <Pressable
              onPress={async () => {
                if (!isMe) return;
                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  aspect: [1, 1],
                  quality: 1,
                });
                if (result?.assets?.length) {
                  setImage(result?.assets.map((el) => el.uri));

                  await UserService.upload(result.assets[0]);

                  await updateUserInfo();
                }
              }}
            >
              <Image
                source={(() => {
                  return {
                    uri: url + "/Files/" + user.avatar,
                    // uri: "https://th.bing.com/th/id/R.8112410131653a63c0596a57ebc85519?rik=TrmOhl0eZJU0Nw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-rL0UdLNivjY%2fUhvtGHddwUI%2fAAAAAAAAAy8%2fGPJ0ojd6G2w%2fs1600%2fpromotional-photoshoot-tyler-durden.jpg&ehk=t9CBGtalAmIr39aULbo2gDn5oZRATnhUic1bKpqCtto%3d&risl=&pid=ImgRaw&r=0",
                  };
                })()}
                resizeMode="cover"
                style={{
                  height: 200,
                  width: 200,
                }}
                className="rounded-full bg-gray-200"
              />
            </Pressable>
          </View>
          <UserInfo updateUserInfo={updateUserInfo} navigation={navigation} isMe={isMe} user={user} />
          <View className="mt-4 mx-4  mb-4">
            <ShadowView classname="bg-white p-4 rounded-lg">
              <View className="flex-row justify-between items-center">
                <Title
                  classname={twMerge("mb-4", !user?.pets?.length && "mb-0")}
                >
                  {user.pets?.length ? "Питомцы" : "Нет питомцев"}
                </Title>
                {isMe && (
                  <Pressable onPress={() => setIsModalOpen(true)}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Pressable>
                )}
                <PetForm isOpened={isModalOpen} setIsOpened={setIsModalOpen} />
              </View>
              <ScrollView className="" horizontal>
                <View className="flex-row">
                  {user.pets?.map((el) => (
                    <View key={el.id} className="w-40 p-2">
                      <Image
                        source={{
                          uri: Utils.getFileLink(el.imgs[0]),
                        }}
                        resizeMode="cover"
                        style={{
                          height: null,
                          width: "auto",
                        }}
                        className="rounded-xl bg-gray-200 aspect-square"
                      />
                      <Text className="text-center text-lg font-medium">
                        {el.name}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </ShadowView>
          </View>
          <View>
            {user.posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Drawer>
  );
}

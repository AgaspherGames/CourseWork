import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import ShadowView from "../../components/UI/Base/ShadowView";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import UserService from "../../services/http/UserService";
import Friend from "../../components/Presets/FriendPage/Friend";
import Loader from "../../components/UI/Base/Loader";
import { useUserInfo } from "../../hooks/useUserInfo";
import FriendPageHeader from "../../components/Presets/FriendPage/FriendPageHeader";

export default function FriendsPage({ navigation, route }) {
  const [friends, setFriends] = useState(undefined);
  const { params } = route;
  const userId = params ? params.userId : null;
  useEffect(() => {
    UserService.fetchFriends(userId).then((resp) =>
      setFriends(resp.data.map((el) => el.user))
    );
  }, []);

  const { user: currentUser, updateUserInfo } = useUserInfo();

  if (friends === undefined) return <Loader />;

  return (
    <ScrollView>
      <View className="pt-8 px-8">
        {userId == currentUser.id && <FriendPageHeader />}
        <View className="flex-1 flex-col items-center">
          {friends.map((el, ind) => (
            <Friend isMe={userId == currentUser.id} key={ind} friend={el} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

import { View, Text, Pressable } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useProfileStore } from "../../../stores/ProfileStore";

export default function ProfileHeader() {
  const { isDrawerOpened, setIsDrawerOpened } = useProfileStore(
    (state) => state
  );
  return (
    <View>
      <Pressable
        onPress={() => {
          setIsDrawerOpened(!isDrawerOpened);
        }}
      >
        <SimpleLineIcons name="options-vertical" size={18} color="black" />
      </Pressable>
    </View>
  );
}

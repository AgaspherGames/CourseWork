import { View, Text } from "react-native";
import React from "react";
// import { Image } from "react-native-svg";
import SVGImg from "../../../assets/imgs/nothing.svg";
import Title from "../../UI/Base/Title";

export default function NoResults() {
  console.log(SVGImg);
  return (
    <View className="flex-1 justify-center items-center my-16">
      <SVGImg width="300" height="300" />
    </View>
  );
}

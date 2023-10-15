import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import BlueButton from "../../components/UI/buttons/BlueButton";
import FormCard from "../../components/UI/Cards/FormCard";
import InputWithLabel from "../../components/UI/Forms/InputWithLabel";

const formStyle = "py-2";
const labelStyle = "font-bold";
const inputStyle = "border-b";

export default function RegisterPageSecond({ navigation }) {
  return (
    <View className="flex-1 items-center  bg-white px-4 pt-4">
      <Image
        source={require("../../assets/imgs/cat.png")}
        style={{
          height: 150,
          resizeMode: "contain",
        }}
      />
      <Text className="text-2xl font-semibold">Отлично</Text>
      <Text className="text-xl pb-2">А теперь придумайте пароль</Text>
      <FormCard>
        <InputWithLabel
          label={"Пароль"}
          placeholder={"********"}
          secureTextEntry
        />
        <InputWithLabel
          label={"Повторите пароль"}
          placeholder={"********"}
          secureTextEntry
        />
      </FormCard>
      <BlueButton classname="mt-4">Далее</BlueButton>
    </View>
  );
}

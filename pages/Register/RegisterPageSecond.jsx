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
import React, { useState } from "react";
import BlueButton from "../../components/UI/buttons/BlueButton";
import FormCard from "../../components/UI/Cards/FormCard";
import InputWithLabel from "../../components/UI/Forms/InputWithLabel";
import { useAuthStore } from "../../stores/AuthStore";
import AuthHttpService from "../../services/http/AuthHttpService";
import axios from "axios";

export default function RegisterPageSecond({ navigation }) {
  const {registeredUser, setRegisteredUser} = useAuthStore(state => ({registeredUser: state.registeredUser, setRegisteredUser: state.setRegisteredUser}))
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  async function send() {
    console.log(username);
    const newUser = {...registeredUser, username, password }
    setRegisteredUser(newUser)
    await AuthHttpService.register(newUser).then(data=>console.log(data)).catch(err=>console.error(err))
    await AuthHttpService.login({email: registeredUser.email, password})
    navigation.navigate("Main")
}

  return (
    <View className="flex-1 items-center justify-center  bg-white px-4">
      <Image
        source={require("../../assets/imgs/cat.png")}
        style={{
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Text className="text-2xl font-semibold">Отлично</Text>
      <Text className="text-xl pb-2">А теперь придумайте логин и пароль</Text>
      <FormCard>
      <InputWithLabel value={username} setValue={setUsername} label={"Логин"} placeholder={"ivan123"} />

        <InputWithLabel value={password} setValue={setPassword}
          label={"Пароль"}
          placeholder={"********"}
          secureTextEntry
        />
        <InputWithLabel value={confirmPassword} setValue={setConfirmPassword}
          label={"Повторите пароль"}
          placeholder={"********"}
          secureTextEntry
        />
      </FormCard>
      <BlueButton onPress={send} classname="mt-4">Далее</BlueButton>
    </View>
  );
}

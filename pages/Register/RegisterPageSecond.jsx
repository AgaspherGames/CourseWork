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
  const { registeredUser, setRegisteredUser } = useAuthStore((state) => ({
    registeredUser: state.registeredUser,
    setRegisteredUser: state.setRegisteredUser,
  }));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  async function send() {

    let usernameError, passwordError, confirmPasswordError;
    if (!username) {
      usernameError = "*Это обязательное поле*"
    }
    if (!password) {
      passwordError = "*Это обязательное поле*"
    }
    if (!confirmPassword) {
      confirmPasswordError = "*Это обязательное поле*"
    }
    if (confirmPassword!=password) {
      confirmPasswordError = "*Пароли не совпадают*"
    }
    setUsernameError(usernameError)
    setPasswordError(passwordError)
    setConfirmPasswordError(confirmPasswordError)
    if (usernameError || passwordError || confirmPasswordError) {
      return
    }

    const newUser = { ...registeredUser, username, password };
    setRegisteredUser(newUser);
    await AuthHttpService.register(newUser)
      .catch((err) => console.error(err));
    await AuthHttpService.login({ email: registeredUser.email, password });
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
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
        <InputWithLabel
          value={username}
          error={usernameError}
          setValue={setUsername}
          label={"Логин"}
          placeholder={"ivan123"}
        />

        <InputWithLabel
          value={password}
          error={passwordError}
          setValue={setPassword}
          label={"Пароль"}
          placeholder={"********"}
          secureTextEntry
        />
        <InputWithLabel
          value={confirmPassword}
          error={confirmPasswordError}
          setValue={setConfirmPassword}
          label={"Повторите пароль"}
          placeholder={"********"}
          secureTextEntry
        />
      </FormCard>
      <BlueButton onPress={send} classname="mt-4">
        Далее
      </BlueButton>
    </View>
  );
}

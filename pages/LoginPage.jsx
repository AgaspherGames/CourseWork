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
import BlueButton from "../components/UI/buttons/BlueButton";
import FormCard from "../components/UI/Cards/FormCard";
import InputWithLabel from "../components/UI/Forms/InputWithLabel";
import AuthHttpService from "../services/http/AuthHttpService";

export default function LoginPage({ navigation }) {
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function login() {
    try {
      let emailError, passwordError;
      if (!email) {
        emailError = "*Это обязательное поле*"
      }
      if (!password) {
        passwordError = "*Это обязательное поле*"
      }
      setEmailError(emailError)
      setPasswordError(passwordError)

      if (emailError || passwordError) {
        return
      }
      await AuthHttpService.login({ email, password });
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } catch (error) {
      console.log('aaa',error);
      if (error.response?.status==400){
        setLoginError("Неправильная почта или пароль")
      } else{
        setLoginError("Неизвестная ошибка")
      }
    }
  }

  return (
    <View className="flex-1 items-center  bg-white px-4 pt-4">
      <Image
        source={require("../assets/imgs/cat.png")}
        style={{
          height: 150,
          resizeMode: "contain",
        }}
      />
      <FormCard>
        <Text className="text-center text-red-500 text-base">{loginError}</Text>
        <InputWithLabel
          value={email}
          setValue={setEmail}
          error={emailError}
          label={"Email"}
          placeholder={"jackyjack@mail.com"}
        />
        <InputWithLabel
          value={password}
          setValue={setPassword}
          error={passwordError}
          label={"Пароль"}
          placeholder={"********"}
          secureTextEntry
        />

        <View className="bg-gray-100 border-0.5 border-gray-400 -mx-4 px-4 py-3 -mb-4 mt-2">
          <Pressable
            onPress={() => {
              navigation.navigate("Register1");
            }}
          >
            <Text className="text-xs">
              Нет аккаунта?{" "}
              <Text className="text-indigo-600 underline">
                Зарегистрироваться
              </Text>
            </Text>
          </Pressable>
        </View>
      </FormCard>
      <BlueButton onPress={login} classname="mt-4">
        Войти
      </BlueButton>
    </View>
  );
}

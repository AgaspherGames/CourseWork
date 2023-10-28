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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    await AuthHttpService.login({ email, password });
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
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
        <InputWithLabel
          value={email}
          setValue={setEmail}
          label={"Email"}
          placeholder={"jackyjack@mail.com"}
        />
        <InputWithLabel
          value={password}
          setValue={setPassword}
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

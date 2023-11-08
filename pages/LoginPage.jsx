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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

export default function LoginPage({ navigation }) {
  const [loginError, setLoginError] = useState("");

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите верную почту")
      .required("Это обязательное поле"),
    password: yup
      .string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .max(100, "Пароль должен быть не более 100 символов")
      .required("Это обязательное поле"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => login(data);

  async function login({ email, password }) {
    try {
      await AuthHttpService.login({ email, password });
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } catch (error) {
      if (error.response?.status == 400) {
        setLoginError("Неправильная почта или пароль");
      } else {
        setLoginError("Неизвестная ошибка");
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              value={value}
              setValue={onChange}
              error={errors.email?.message}
              label={"Email"}
              placeholder={"jackyjack@mail.com"}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              value={value}
              setValue={onChange}
              error={errors.password?.message}
              label={"Пароль"}
              placeholder={"********"}
              secureTextEntry
            />
          )}
          name="password"
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
      <BlueButton onPress={handleSubmit(onSubmit)} classname="mt-4">
        Войти
      </BlueButton>
    </View>
  );
}

import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import BlueButton from "../../components/UI/buttons/BlueButton";
import FormCard from "../../components/UI/Cards/FormCard";
import InputWithLabel from "../../components/UI/Forms/InputWithLabel";
import { useAuthStore } from "../../stores/AuthStore";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import AuthHttpService from "../../services/http/AuthHttpService";

export default function RegisterPage({ navigation }) {
  const { registeredUser, setRegisteredUser } = useAuthStore((state) => ({
    registeredUser: state.registeredUser,
    setRegisteredUser: state.setRegisteredUser,
  }));

  const schema = yup.object().shape({
    firstname: yup.string().required("Это обязательное поле"),
    lastname: yup.string().required("Это обязательное поле"),
    email: yup
      .string()
      .email("Введите верную почту")
      .required("Это обязательное поле"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    setRegisteredUser(data);
    const { data: isUnique } = await AuthHttpService.checkUnique(data.email);
    if (isUnique) {
      navigation.navigate("Register2");
    } else {
      setLoginError("Почта уже занята");
    }
  };

  function next() {
    navigation.navigate("Register2");
  }

  return (
    <View className="flex-1 items-center justify-center bg-white px-4 ">
      <Image
        source={require("../../assets/imgs/cat_2.png")}
        style={{
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Text className="text-2xl font-semibold">Добро пожаловать!</Text>
      <Text className="text-xl pb-2">Расскажите немного о себе</Text>
      <FormCard>
        <Text className="text-center text-red-500 text-base">{loginError}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              error={errors.email?.message}
              value={value}
              setValue={onChange}
              label={"Почта"}
              placeholder={"ivan@mail.com"}
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
              error={errors.firstname?.message}
              value={value}
              setValue={onChange}
              label={"Имя"}
              placeholder={"Иван"}
            />
          )}
          name="firstname"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange } }) => (
            <InputWithLabel
              error={errors.lastname?.message}
              value={value}
              setValue={onChange}
              label={"Фамилия"}
              placeholder={"Иванов"}
            />
          )}
          name="lastname"
        />

        <View className="bg-gray-100 border-0.5 border-gray-400 -mx-4 px-4 py-3 -mb-4 mt-2">
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text className="text-xs">
              Уже есть аккаунт?{" "}
              <Text className="text-indigo-600 underline">Войти</Text>
            </Text>
          </Pressable>
        </View>
      </FormCard>
      <BlueButton onPress={handleSubmit(onSubmit)} classname="mt-4">
        Далее
      </BlueButton>
    </View>
  );
}

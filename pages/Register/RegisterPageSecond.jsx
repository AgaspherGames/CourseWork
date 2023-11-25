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
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const schema = yup.object().shape({
    username: yup.string().required("Это обязательное поле"),
    password: yup
      .string()
      .min(0, "Пароль должен быть не менее 8 символов")
      .max(100, "Пароль должен быть не более 100 символов")
      .required("Это обязательное поле"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  async function send(data) {
    try {
      const newUser = { ...registeredUser, ...data };
      setRegisteredUser(newUser);
      await AuthHttpService.register(newUser).catch((err) =>
        console.error(err)
      );
      await AuthHttpService.login({ email: registeredUser.email, password: data.password });
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } catch (error) {
      console.log(error);
      if (error.message) {
        alert(error.message);
      }
    }
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              value={value}
              error={errors.username?.message}
              setValue={onChange}
              label={"Логин"}
              placeholder={"ivan123"}
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              value={value}
              error={errors.password?.message}
              setValue={onChange}
              label={"Пароль"}
              placeholder={"********"}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              value={value}
              error={errors.confirmPassword?.message}
              setValue={onChange}
              label={"Повторите пароль"}
              placeholder={"********"}
              secureTextEntry
            />
          )}
          name="confirmPassword"
        />
      </FormCard>
      <BlueButton onPress={handleSubmit(send)} classname="mt-4">
        Далее
      </BlueButton>
    </View>
  );
}

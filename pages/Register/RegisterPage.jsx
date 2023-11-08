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
import React, { useEffect, useState } from "react";
import BlueButton from "../../components/UI/buttons/BlueButton";
import FormCard from "../../components/UI/Cards/FormCard";
import InputWithLabel from "../../components/UI/Forms/InputWithLabel";
import { useAuthStore } from "../../stores/AuthStore";


export default function RegisterPage({ navigation }) {
  const { registeredUser, setRegisteredUser } = useAuthStore(state => ({ registeredUser: state.registeredUser, setRegisteredUser: state.setRegisteredUser }))
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");


  function next() {

    let emailError, firstnameError, lastnameError;
    if (!email) {
      emailError = "*Это обязательное поле*"
      setEmailError(emailError)
    }
    if (!firstname) {
      firstnameError = "*Это обязательное поле*"
      setFirstnameError(firstnameError)
    }
    if (!lastname) {
      lastnameError = "*Это обязательное поле*"
      setLastnameError(lastnameError)
    }
    if (emailError || firstnameError || lastnameError) {
      return
    }
    navigation.navigate("Register2")
  }

  useEffect(() => {
    const user = {
      firstname,
      lastname,
      email,
    }
    setRegisteredUser(user);
  }, [firstname,
    lastname,
    email])

  return (
    <View className="flex-1 items-center justify-center bg-white px-4 ">
      <Image
        source={require("../../assets/imgs/cat_2.png")}
        style={{
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Text className="text-2xl font-semibold">Добро подаловать!</Text>
      <Text className="text-xl pb-2">Расскажите немного о себе</Text>
      <FormCard>
        <InputWithLabel error={emailError} value={email} setValue={setEmail} label={"Почта"} placeholder={"ivan@mail.com"} />
        <InputWithLabel error={firstnameError} value={firstname} setValue={setFirstname} label={"Имя"} placeholder={"Иван"} />
        <InputWithLabel error={lastnameError} value={lastname} setValue={setLastname} label={"Фамилия"} placeholder={"Иванов"} />
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
      <BlueButton
        onPress={next}
        classname="mt-4"
      >
        Далее
      </BlueButton>
    </View>
  );
}

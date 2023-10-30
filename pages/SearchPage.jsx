import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import React from "react";
import Title from "../components/UI/Base/Title";
import ShadowView from "../components/UI/Base/ShadowView";
import Friend from "../components/Presets/FriendPage/Friend";
import UserResult from "../components/Presets/SearchPage/UserResult";
import Post from "../components/Presets/Posts/Post";
import { Octicons } from "@expo/vector-icons";

export default function SearchPage() {
  return (
    <ScrollView nestedScrollEnabled className="flex-1">
      <ShadowView classname="p-2 px-4 bg-white rounded-lg  mx-4 mt-4">
        <TextInput defaultValue="" className="w-full text-base" placeholder="Поиск" />
        <View
          className="absolute right-4 top-2 bottom-2 flex items-center justify-center"
        >
          <Octicons
            name={'search'}
            size={18}
            color={"black"}
          />
        </View>
      </ShadowView>
      <View className=" rounded-lg  mb-4">
        <Title classname="mt-4 ml-4">Пользователи:</Title>
        <View className="">
          <ScrollView horizontal className="flex-row">
            {
              Array(15).fill("f").map(el =>
                <UserResult
                  user={{
                    id: 2,
                    avatar: "9829de24-7ff3-4680-b848-b48156266358.jpeg",
                    username: "artk",
                    firstName: "Artyom",
                    lastName: "Karmykov",
                  }}
                />
              )
            }
          </ScrollView>
        </View>

      </View>
      <View className="">
      <Title classname=" ml-4">Посты:</Title>
          <View className="-mx-4">
        {
          Array(10).fill('a').map(el =>
            <Post post={{
              "id": "1",
              "title": "История кошек: От диких хищников до домашних питомцев",
              "description": "Эта статья рассказывает о том, как кошки перешли от дикой природы к домашней жизни, и о том, как они стали одними из самых любимых домашних питомцев в мире. \nИстория кошек: От диких хищников до домашних питомцев \nИстория кошек тесно связана с историей человечества. От диких хищников до любимых домашних питомцев, кошки прошли удивительный путь. \n1. Происхождение кошек: Считается, что история появления кошек рядом с человеком начинается примерно 10-12 тысяч лет назад. Это время совпадает с периодом, когда люди начали вести оседлый образ жизни. Единым предком современных кошек считается североафриканская степная кошка. \n2. Одомашнивание кошек: Кошки были одомашнены в Нубии или на Среднем Востоке. Они были привлечены к поселениям людей из-за большого количества грызунов, которые привлекали запасы зерна. \n3. Распространение кошек: После одомашнивания кошки были привезены в Египет, где их почитали. Затем они распространились по Азии, где скрестились с другими видами. На Русь кошки привезли мореплаватели в 7-11 веках. \n4. Кошки сегодня: Сегодня кошки являются одними из самых популярных домашних животных. В мире насчитывается около 600 миллионов домашних кошек. \nКошки уникальны среди всех зверей, которые сблизились с людьми. Их независимый характер, грациозность и способность адаптироваться к различным условиям жизни делают их идеальными компаньонами для людей всех возрастов и образов жизни.",
              "imgs": [
                "fe7c8b2c-5709-4caa-8440-c0d4a0500f7b.jpeg",
                "8e32b373-60e7-48cc-b7ae-43f4af5e27d1.jpeg"
              ],
              "uploadDate": "2023-10-30T06:42:14.822813Z",
              "user": {
                "id": 2,
                "avatar": "9bdbcf68-2f5f-4783-9c74-e07b0a4d1aad.jpeg",
                "username": "artk",
                "firstName": "Артем",
                "lastName": "Кармыков"
              }
            }} />
          )
        }
        </View>

      </View>
    </ScrollView>
  );
}

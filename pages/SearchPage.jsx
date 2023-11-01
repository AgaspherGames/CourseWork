import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/UI/Base/Title";
import ShadowView from "../components/UI/Base/ShadowView";
import Friend from "../components/Presets/FriendPage/Friend";
import UserResult from "../components/Presets/SearchPage/UserResult";
import Post from "../components/Presets/Posts/Post";
import { Octicons } from "@expo/vector-icons";
import { useDebounce } from "../services/Utils";
import SearchService from "../services/http/SearchService";

export default function SearchPage() {
  const [results, setResults] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const debouncedSearchQuery = useDebounce(searchQuery);

  const update = async () => {
    const { data } = await SearchService.search(debouncedSearchQuery)
    setResults(data)
  }
  useEffect(() => {
    if (debouncedSearchQuery) {
      update()
      
    }
  }, [debouncedSearchQuery])


  return (
    <ScrollView nestedScrollEnabled className="flex-1">
      <ShadowView classname="p-2 px-4 bg-white rounded-lg  mx-4 mt-4">
        <TextInput defaultValue={searchQuery} onChangeText={text => setSearchQuery(text)} className="w-full text-base" placeholder="Поиск" />
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
            results?.posts?.map(el =>
              <Post post={el} />
            )
          }
        </View>

      </View>
    </ScrollView>
  );
}

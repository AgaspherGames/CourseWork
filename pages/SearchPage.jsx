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
import Loader from "../components/UI/Base/Loader";
import SearchForm from "../components/Presets/SearchPage/SearchForm";
import NoResults from "../components/Presets/SearchPage/NoResults";

export default function SearchPage() {
  const [results, setResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery);

  const update = async () => {
    const { data } = await SearchService.search(debouncedSearchQuery);
    setResults(data);
  };
  useEffect(() => {
    debouncedSearchQuery && update();
  }, [debouncedSearchQuery]);

  return (
    <ScrollView nestedScrollEnabled className="relative  min-h-screen pb-8">
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {results ? (
        <View className="mb-28">
          {!!results.users?.length && (
            <View className=" rounded-lg  mb-4">
              <Title classname="mt-4 ml-4">Пользователи:</Title>
              <View className="">
                <ScrollView horizontal className="flex-row">
                  {results.users.map((el) => (
                    <UserResult key={el.id} user={el} />
                  ))}
                </ScrollView>
              </View>
            </View>
          )}
          {!!results.posts?.length && (
            <View className="">
              <Title classname=" ml-4">Посты:</Title>
              <View className="-mx-4">
                {results?.posts?.map((el) => {
                  console.log(el);
                  return <Post key={el.id} post={el} />;
                })}
              </View>
            </View>
          )}
        </View>
      ) : (
        <NoResults />
      )}
    </ScrollView>
  );
}

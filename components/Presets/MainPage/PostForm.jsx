import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { FlatList } from "react-native";

export default function PostForm({ isOpened, setIsOpened }) {
  const [imgs, setImgs] = useState([]);
  return (
    <Modal
      onRequestClose={() => {
        setIsOpened(false);
      }}
      transparent
      visible={isOpened}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setIsOpened(false);
        }}
      >
        <View
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className=" bg-opacity-30 justify-center flex-1"
        >
          <ShadowView classname="mx-8 mt-4 bg-white p-4 rounded-lg  h-auto ">
            <TouchableWithoutFeedback
              onPress={(e) => {
                e.stopPropagation();
              }}
            >
              <View>
                <Text className="text-lg font-medium">Поделиться!</Text>
                <View>
                  <ScrollView
                  
                    horizontal
                    nestedScrollEnabled={true}
                    onPress={(e) => e.stopPropagation()}
                  >
                    <View
                      className="flex-row my-4 gap-2"
                      onStartShouldSetResponder={() => true}
                    >
                      {imgs.map((el) => {
                        console.log(el);
                        return (
                          <Image
                            key={el}
                            className="rounded-md"
                            style={{ width: 60, height: 80 }}
                            source={{ uri: el }}
                          />
                        );
                      })}
                    </View>
                  </ScrollView>
                  <View className="border my-4 rounded-lg px-2 pr-8 py-1 relative">
                    <AutoGrowingTextInput
                      className="text-base"
                      placeholder="Что у вас нового?"
                    />
                    <View className="absolute right-2 top-1">
                      <Pressable
                        onPress={async () => {
                          let result =
                            await ImagePicker.launchImageLibraryAsync({
                              mediaTypes: ImagePicker.MediaTypeOptions.Images,
                              // allowsEditing: true,
                              allowsMultipleSelection: true,
                              aspect: [3, 4],
                              quality: 1,
                              selectionLimit: 10
                            });
                          if (result?.assets?.length) {
                            setImgs(result?.assets.map((el) => el.uri));
                          }
                          console.log(result?.assets[0]);
                        }}
                      >
                        <FontAwesome name="paperclip" size={24} color="black" />
                      </Pressable>
                    </View>
                  </View>
                  <Button title="Опубликовать" />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ShadowView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

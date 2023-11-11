import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ShadowView from "../../UI/Base/ShadowView";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import PetService from "../../../services/http/PetService";

export default function DocForm({ petId, isOpened, setIsOpened, update }) {
  const [imgs, setImgs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function send() {
    PetService.uploadDoc(petId, title, description, imgs).then((resp) => {
      setIsOpened(false);
      update();
    });
  }

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
                <Text className="text-lg font-medium">Добавить документ</Text>
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
                        return (
                          <Image
                            key={el.uri}
                            className="rounded-md"
                            style={{ width: 60, height: 80 }}
                            source={{ uri: el.uri }}
                          />
                        );
                      })}
                    </View>
                  </ScrollView>
                  <View>
                    <TextInput
                      onChangeText={(text) => setTitle(text)}
                      defaultValue={title}
                      placeholder="Название"
                      className="border text-lg rounded-lg px-2 py-1 relative w-5/6"
                    />
                  </View>
                  <View className="flex items-start justify-start border my-4 rounded-lg px-2 pr-8 py-1 relative">
                    <TextInput
                      style={{ textAlignVertical: "top" }}
                      editable
                      onChangeText={(text) => setDescription(text)}
                      defaultValue={description}
                      placeholder="Описание"
                      multiline
                      numberOfLines={0}
                      className="flex items-start justify-start text-base max-h-64 leading-5"
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
                              selectionLimit: 10,
                            });
                          if (result?.assets?.length) {
                            setImgs(result?.assets);
                          }
                        }}
                      >
                        <FontAwesome name="paperclip" size={24} color="black" />
                      </Pressable>
                    </View>
                  </View>

                  <Button onPress={send} title="Добавить" />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ShadowView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

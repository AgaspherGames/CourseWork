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
import PostService from "../../../services/http/PostService";
import { twMerge } from "tailwind-merge";

export default function PostForm({ isOpened, setIsOpened, updatePosts }) {
  const [imgs, _setImgs] = useState([]);
  const [title, _setTitle] = useState("");
  const [description, _setDescription] = useState("");

  const [imgsError, setImgsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  function send() {
    if (!imgs.length) setImgsError(true);
    if (!title) setTitleError(true);
    if (!description) setDescriptionError(true);
    if (imgs.length && title && description) {
      PostService.upload(title, description, imgs).then((resp) => {
        setIsOpened(false);
        updatePosts();
      });
    }
  }

  function setImgs(params) {
    _setImgs(params);
    if (!params.length) {
      setImgsError(true);
    } else {
      setImgsError(false);
    }
  }
  function setTitle(title) {
    _setTitle(title);
    if (!title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  }
  function setDescription(description) {
    _setDescription(description);
    if (!description) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
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
                      placeholder="Заголовок"
                      className={twMerge(
                        "border text-lg rounded-lg px-2 py-1 relative w-5/6",
                        titleError && "border-red-500"
                      )}
                    />
                  </View>
                  <View
                    className={twMerge(
                      "flex items-start justify-start border my-4 rounded-lg px-2 pr-8 py-1 relative",
                      descriptionError && "border-red-500"
                    )}
                  >
                    <TextInput
                      style={{ textAlignVertical: "top" }}
                      editable
                      onChangeText={(text) => setDescription(text)}
                      defaultValue={description}
                      placeholder="Что у вас нового?"
                      multiline
                      numberOfLines={0}
                      className={twMerge(
                        "flex items-start justify-start text-base max-h-64 leading-5"
                      )}
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
                        <FontAwesome
                          name="paperclip"
                          size={24}
                          color={imgsError ? "red" : "black"}
                        />
                      </Pressable>
                    </View>
                  </View>

                  <Button onPress={send} title="Опубликовать" />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ShadowView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

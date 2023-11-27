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
import * as ImagePicker from "expo-image-picker";
import PostService from "../../../services/http/PostService";
import PetService from "../../../services/http/PetService";
import { twMerge } from "tailwind-merge";

export default function PetForm({ isOpened, setIsOpened, updateUserInfo }) {
  const [imgs, _setImgs] = useState([]);
  const [Name, _setName] = useState("");
  const [PassportNumber, _setPassportNumber] = useState("");

  const [imgsError, setImgsError] = useState(false);
  const [NameError, setNameError] = useState(false);
  const [PassportNumberError, setPassportNumberError] = useState(false);

  async function send() {
    if (!imgs.length) setImgsError(true);
    if (!Name) setNameError(true);
    if (!PassportNumber) setPassportNumberError(true);
    if (imgs.length && Name && PassportNumber) {
      await PetService.upload(Name, PassportNumber, imgs).then((resp) => {
        setIsOpened(false);
      });
      await updateUserInfo();
    }
  }

  function setImgs(params) {
    _setImgs(params);
    if (!params.length) setImgsError(true);
    else setImgsError(false);
  }
  function setName(params) {
    _setName(params);
    if (!params) setNameError(true);
    else setNameError(false);
  }
  function setPassportNumber(params) {
    _setPassportNumber(params);
    if (!params) setPassportNumberError(true);
    else setPassportNumberError(false);
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
                <Text className="text-lg font-medium">Добавить питомца!</Text>
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
                      onChangeText={(text) => setName(text)}
                      defaultValue={Name}
                      placeholder="Кличка"
                      className={twMerge(
                        "border text-lg rounded-lg px-2 py-1 relative ",
                        NameError && "border-red-500"
                      )}
                    />
                  </View>
                  <View className="my-4">
                    <TextInput
                      onChangeText={(text) => setPassportNumber(text)}
                      defaultValue={PassportNumber}
                      placeholder="Номер пасспорта"
                      className={twMerge(
                        "border text-lg rounded-lg px-2 py-1 relative ",
                        PassportNumberError && "border-red-500"
                      )}
                    />
                  </View>
                  <ShadowView classname="mb-4 bg-white p-2 rounded-lg">
                    <Pressable
                      onPress={async () => {
                        let result = await ImagePicker.launchImageLibraryAsync({
                          mediaTypes: ImagePicker.MediaTypeOptions.Images,
                          // allowsEditing: true,
                          allowsMultipleSelection: true,
                          aspect: [1, 1],
                          quality: 1,
                          selectionLimit: 10,
                        });
                        if (result?.assets?.length) {
                          setImgs(result?.assets);
                        }
                      }}
                    >
                      <Text
                        className={twMerge(
                          "text-center text-base font-medium",
                          imgsError && "text-red-500"
                        )}
                      >
                        Добавить изображение
                      </Text>
                    </Pressable>
                  </ShadowView>

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

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

export default function PetForm({ isOpened, setIsOpened }) {
  const [imgs, setImgs] = useState([]);
  const [Name, setName] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");

  function send() {
    PetService.upload(Name, PassportNumber, imgs).then((resp) => {
      setIsOpened(false);
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
                      className="border text-lg rounded-lg px-2 py-1 relative "
                    />
                  </View>
                  <View className="my-4">
                    <TextInput
                      onChangeText={(text) => setPassportNumber(text)}
                      defaultValue={PassportNumber}
                      placeholder="Номер пасспорта"
                      className="border text-lg rounded-lg px-2 py-1 relative "
                    />
                  </View>
                  <ShadowView classname="mb-4 bg-white p-2 rounded-lg">
                    <Pressable onPress={async () => {
                          let result =
                            await ImagePicker.launchImageLibraryAsync({
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
                        }}>
                      <Text className="text-center text-base font-medium">Добавить изображение</Text>
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

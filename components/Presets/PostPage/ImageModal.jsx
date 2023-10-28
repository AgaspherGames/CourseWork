import {
  View,
  Text,
  Modal,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Utils from "../../../services/Utils";
import ShadowView from "../../UI/Base/ShadowView";
import Swiper from "react-native-swiper";

export default function ImageModal({ modal, setModal, imgs }) {
  function close() {
    setModal((p) => ({ ...p, isOpened: false }));
  }
  return (
    <Modal
      animationType="fade"
      onRequestClose={close}
      transparent
      visible={modal.isOpened}
    >
      <TouchableWithoutFeedback onPress={close}>
        <BlurView className="justify-center items-center flex-col flex-1">
          <View
            className="w-full"
            style={{
              aspectRatio: 3 / 4,
            }}
          >
            <Swiper index={modal.ind} showsPagination={false} loop={false} classname="rounded-lg justify-center items-center ">
              {imgs.map((el) => {
                console.log(el);
                return (
                  <View  className="flex-row justify-center m-6" key={el}>
                    <Pressable>
                      <Image
                        // className="absolute inset-x-0 inset-y-0"
                        className="w-full rounded-lg "
                        source={{
                          uri: Utils.getFileLink(el),
                        }}
                        style={{
                          aspectRatio: 3 / 4,
                        }}
                      />
                    </Pressable>
                  </View>
                );
              })}
            </Swiper>
          </View>

          {/* <ShadowView classname="bg-white rounded-lg">
            <Image
              className="w-full rounded-lg"
              source={{
                uri: Utils.getFileLink(modal.uri),
              }}
              style={{
                aspectRatio: 3 / 4,
              }}
            />
          </ShadowView> */}
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

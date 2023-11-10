import { BlurView } from "expo-blur";
import {
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  Dimensions,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { useNavigation } from "@react-navigation/native";

const images = [
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
  },
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
  },
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
  },
];

export default function DocumentModal({ isVisible, setIsVisible }) {
  const navigation = useNavigation()

  function close() {
    setIsVisible(false);
  }
  function navigateToDoc() {
    navigation.navigate("DocPage", { docId: 1})
  }

  return (
    <Modal transparent visible={isVisible} onRequestClose={close}>
      <BlurView className="flex-1 ">
        <ImageViewer
          useNativeDriver
          enableSwipeDown
          backgroundColor="transparent"
          renderHeader={(ind) => (
            <View
              style={{ zIndex: 10 }}
              className="absolute inset-x-0 flex-row justify-end "
            >
              <View className="absolute mr-8 mt-8">
                <TouchableOpacity
                  onPress={close}
                  style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  className="aspect-square h-8 text-center flex justify-center items-center rounded-xl mr-8"
                >
                  <Text className="font-black ">X</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                className="absolute h-2 inset-x-0 "
              >
                <View
                  width={(ind / (images.length - 1)) * 100 + "%"}
                  style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  className="absolute h-2 transition-all"
                ></View>
              </View>
              <View className="absolute items-center top-8 inset-x-0">
                <TouchableHighlight className="rounded-lg" onPress={navigateToDoc}>
                  <View className="bg-zinc-300 rounded-lg px-4 py-2 max-w-sm">
                    <Text numberOfLines={1} >Справка о прививке №3 bbbbb bbbbbbbbbbbbbbbbbbbbbbbbbb</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          )}
          renderIndicator={(currentIndex, allSize) => (
            <Text>currentIndex + "/" + allSize</Text>
          )}
          renderFooter={() => {
            <View className="bg-red-300 h-screen top-0 absolute -mt-4">
              <Text>assd</Text>
            </View>
          }}
          onShowModal={() => {
          }}
          onCancel={close}
          onSwipeDown={close}
          index={0}
          className="flex-1 bg-transparent"
          imageUrls={images}
        />
      </BlurView>
      {/* <View className="flex-1">
        <Pressable
          className="flex-1"
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <BlurView tint="dark" className="flex-1">
          </BlurView>
        </Pressable>
      </View> */}
    </Modal>
  );
}

import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import PostService from "../../services/http/PostService";
import Loader from "../../components/UI/Base/Loader";
import Swiper from "react-native-swiper";
import ImageModal from "../../components/Presets/PostPage/ImageModal";
import PostInfo from "../../components/Presets/PostPage/PostInfo";
import Utils from "../../services/Utils";
import PetService from "../../services/http/PetService";
import DocInfo from "../../components/Presets/DocsPage/DocInfo";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default function DocumentPage({ route }) {
  const { params } = route;
  const docId = params ? params.docId : null;

  const [document, setDocument] = useState();

  const [modal, setModal] = useState({ isOpened: false, ind: "" });

  useEffect(() => {
    PetService.fetchDoc(docId).then((resp) => setDocument(resp.data));
  }, []);

  if (!document) return <Loader />;

  return (
    <ScrollView>
      <View className="flex-1 pb-4">
        <View className="flex-row">
          <View
            style={{
              height: 300,
              flex: 1,
              width: null,
            }}
            className="m-4 rounded-xl overflow-hidden"
          >
            <Swiper
              loop={false}
              style={styles.wrapper}
              className="bg-gray-100 "
            >
              {document.imgs.map((el, ind) => {
                return (
                  <View key={el} className="flex-1">
                    <Pressable
                      onPress={() => {
                        setModal((p) => ({ ind, isOpened: true }));
                      }}
                      className="flex-1 relative"
                    >
                      <Image
                        // className="absolute inset-x-0 inset-y-0"
                        source={{
                          uri: Utils.getFileLink(el),
                        }}
                        style={{
                          flex: 1,
                        }}
                      />
                    </Pressable>
                  </View>
                );
              })}
            </Swiper>
          </View>
        </View>

        <ImageModal modal={modal} setModal={setModal} imgs={document.imgs} />

        <DocInfo document={document} />
      </View>
    </ScrollView>
  );
}

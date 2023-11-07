import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import PostService from "../../services/http/PostService";
import Loader from "../../components/UI/Base/Loader";
import Swiper from "react-native-swiper";
import ImageModal from "../../components/Presets/PostPage/ImageModal";
import PostInfo from "../../components/Presets/PostPage/PostInfo";
import Utils from "../../services/Utils";


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
  const postId = params ? params.postId : null;

  const [post, setPost] = useState();
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");

  const [modal, setModal] = useState({ isOpened: false, ind: "" });

  async function sendComment() {
    setCommentText("");
    await PostService.addCommentary(postId, commentText);
    PostService.fetchCommentaries(postId).then((resp) =>
      setComments(resp.data)
    );
  }

  useEffect(() => {
    PostService.fetchPost(postId).then((resp) => setPost(resp.data));
    PostService.fetchCommentaries(postId).then((resp) =>
      setComments(resp.data)
    );
  }, []);

  // if (!post)
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <Loader />
  //     </View>
  //   );

  return (
    <ScrollView>
      <View className="flex-1">
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
              {post.imgs.map((el, ind) => {
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
{/* 
        <ImageModal modal={modal} setModal={setModal} imgs={post.imgs} />

        <PostInfo post={post} /> */}
      </View>
    </ScrollView>
  );
}

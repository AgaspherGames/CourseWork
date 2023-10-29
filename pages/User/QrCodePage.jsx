import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Title from "../../components/UI/Base/Title";
import { Button } from "react-native";
import ShadowView from "../../components/UI/Base/ShadowView";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { useUserInfo } from "../../hooks/useUserInfo";

export default function QrCodePage() {
  const navigation = useNavigation();
  const {user} = useUserInfo()
  return (
    <View className="flex-1 items-center justify-center">
      <Title classname="text-center py-8 text-3xl">
        Ваш QR код для  добавления друзей
      </Title>
      <QRCode size={240} value={"ADDFRIEND "+user.id} backgroundColor="#fff" />
      <View>
        <ShadowView classname="text-lg  bg-blue-500 rounded-lg justify-center items-center mt-8 overflow-hidden">
          <TouchableNativeFeedback onPress={()=>navigation.navigate("ScanQR")} >
            <View className="">
              <Text className="text-lg p-2 text-white font-medium">
                Отсканировать QR код друга
              </Text>
            </View>
          </TouchableNativeFeedback>
        </ShadowView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  icon: {
    color: "blueviolet",
  },

  field: {
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 30,
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 240,
    borderWidth: 1.5,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "gray",
  },

  button: {
    padding: 12,
    borderRadius: 10,
    color: "white",
    backgroundColor: "blueviolet",
  },

  qr: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 250,
  },

  instraction: {
    marginTop: 40,
    color: "#adadad",
  },

  instraicon: {
    color: "#bf88f3",
  },

  logoHolder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },

  logo: {
    height: 40,
    width: 40,
    opacity: 0.3,
  },
});

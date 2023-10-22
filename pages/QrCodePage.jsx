import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QrCodePage() {
  return (
    <View style={styles.container}>
      <QRCode size={240} value={"ADDFRIEND 192"} backgroundColor="#fff"  />
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

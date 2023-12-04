import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ShadowView } from "../../components/UI/Base/ShadowView";
import { useNavigation } from "@react-navigation/native";

export default function ScanQrPage() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scan, setScan] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const commands = data.split(" ");
    if (commands[0] == "ADDFRIEND") {
      navigation.navigate("Profile", { userId: commands[1] });
    }
  };

  if (hasPermission === null) {
    return <View></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera(</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center px-8">
      <View>
        <BarCodeScanner
          // style={StyleSheet.absoluteFillObject}
          className=" aspect-square flex-1"
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />

        {scanned && (
          <Button
            onPress={() => setScanned(false)}
            title="Сканировать еще раз"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

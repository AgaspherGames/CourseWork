import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function ScanQrPage() {
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
    alert(`command: ${commands[0]}; data: ${commands[1]}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
          <View>
            <ShadowView classname="text-lg  bg-blue-500 rounded-lg justify-center items-center mt-8 overflow-hidden">
              <TouchableNativeFeedback onPress={() => setScanned(false)}>
                <View className="">
                  <Text className="text-lg p-2 text-white font-medium">
                    Сканировать еще раз
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </ShadowView>
          </View>
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

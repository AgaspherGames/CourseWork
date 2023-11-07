import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import WebView from "react-native-webview";
import ShadowView from "../../components/UI/Base/ShadowView";
import Title from "../../components/UI/Base/Title";
import Document from "../../components/Presets/DocsPage/Document";
import DocumentModal from "../../components/Presets/DocsPage/DocumentModal";
import PetService from "../../services/http/PetService";
import { useUserInfo } from "../../hooks/useUserInfo";

export default function DocsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pets, setPets] = useState([]);
  const { user } = useUserInfo();

  useEffect(() => {
    user && PetService.fetchPets(user.id).then((resp) => setPets(resp.data));
  }, [user]);

  return (
    <ScrollView>
      <View className="px-6 pt-4">
        <ShadowView classname=" p-2 bg-white rounded-lg w-full ">
          <Title classname="mx-0 text-start text-2xl">
            Документы ваших животных
          </Title>
          <Text className="text-base text-gray-600">
            Здесь собраны все документы связанные с вашими питомцами
          </Text>
        </ShadowView>
        <View className="w-full mt-4 flex-row flex-wrap ">
          {pets.map((pet) => (
            <Document pet={pet} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

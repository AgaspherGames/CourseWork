import "react-native-gesture-handler";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerLayoutAndroid, SafeAreaView, View, Text } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterPageSecond from "./pages/Register/RegisterPageSecond";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import FloatingNav from "./components/Presets/FloatingNav/FloatingNav";
import { useAppStore } from "./stores/AppStore";
import UserPage from "./pages/User/UserPage";
import PostPage from "./pages/PostPage";
import QrCodePage from "./pages/User/QrCodePage";
import FriendsPage from "./pages/User/FriendsPage";
import ScanQrPage from "./pages/User/ScanQrPage";
import { useUserInfo } from "./hooks/useUserInfo";
import SearchPage from "./pages/SearchPage";
import ProfileHeader from "./components/Presets/ProfilePage/ProfileHeader";
import DocsPage from "./pages/Documents/DocsPage";
import DocumentPage from "./pages/Documents/DocumentPage";
import PetPage from "./pages/PetPage/PetPage";
import { useEffect, useState } from "react";
import Loader from "./components/UI/Base/Loader";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const { page, setPage } = useAppStore((state) => state);

  const { token } = useUserInfo();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [token]);

  if (typeof token == "object")
    return (
      <View className="flex-1 items-center justify-center">
        <Loader />
      </View>
    );

  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer
        ref={navigationRef}
        onStateChange={async () => {
          setPage(navigationRef.getCurrentRoute().name);
        }}
      >
        <Stack.Navigator
          initialRouteName={token ? "Main" : "Welcome"}
          screenOptions={{ animation: "none" }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{
              title: "Добро пожаловать",
              contentStyle: {
                shadowOpacity: 0,
                shadowOffset: 0,
                opacity: 1,
              },
            }}
          />
          {!token && (
            <>
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                  title: "Войти",
                  contentStyle: {
                    shadowOpacity: 0,
                    shadowOffset: 0,
                    opacity: 1,
                  },
                }}
              />
              <Stack.Screen
                name="Register1"
                component={RegisterPage}
                options={{
                  title: "Регистрация",
                  contentStyle: {
                    shadowOpacity: 0,
                    shadowOffset: 0,
                    opacity: 1,
                  },
                }}
              />
              <Stack.Screen
                name="Register2"
                component={RegisterPageSecond}
                options={{
                  title: "Регистрация",
                  contentStyle: {
                    shadowOpacity: 0,
                    shadowOffset: 0,
                    opacity: 1,
                  },
                }}
              />
            </>
          )}

          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{
              title: "Главная",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Post"
            component={PostPage}
            options={{
              title: "Пост",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={UserPage}
            options={{
              title: "Профиль",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
              headerRight: ProfileHeader,
            }}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsPage}
            options={{
              title: "Подпски",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="QRCode"
            component={QrCodePage}
            options={{
              title: "QR Код для добавления в друзья",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
              header: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="ScanQR"
            component={ScanQrPage}
            options={{
              title: "QR Код для добавления в друзья",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
              header: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="Docs"
            component={DocsPage}
            options={{
              title: "Документы",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="DocPage"
            component={DocumentPage}
            options={{
              title: "Документ",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="PetPage"
            component={PetPage}
            options={{
              title: "",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{
              title: "Поиск",
              contentStyle: { shadowOpacity: 0, shadowOffset: 0, opacity: 1 },
            }}
          />
        </Stack.Navigator>
        {token && <FloatingNav />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

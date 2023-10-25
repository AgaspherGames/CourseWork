import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterPageSecond from "./pages/Register/RegisterPageSecond";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import FloatingNav from "./components/Presets/FloatingNav/FloatingNav";
import { useAppStore } from "./stores/AppStore";
import UserPage from "./pages/User/UserPage";
import PostPage from "./pages/PostPage";
import DocsPage from "./pages/DocsPage";
import QrCodePage from "./pages/User/QrCodePage";
import FriendsPage from "./pages/User/FriendsPage";
import ScanQrPage from "./pages/User/ScanQrPage";
import { useUserInfo } from "./hooks/useUserInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const { page, setPage } = useAppStore((state) => state);

  const { token } = useUserInfo();

  return (
    <SafeAreaView behavior="padding" className="flex-1">
      <NavigationContainer
        ref={navigationRef}
        onStateChange={async () => {
          setPage(navigationRef.getCurrentRoute().name);
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{
              title: "Добро пожаловать",
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{
              title: "Главная",
            }}
          />
          <Stack.Screen
            name="Post"
            component={PostPage}
            options={{
              title: "Пост",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={UserPage}
            options={{
              title: "Профиль",
            }}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsPage}
            options={{
              title: "Список друзей",
            }}
          />
          <Stack.Screen
            name="QRCode"
            component={QrCodePage}
            options={{
              title: "QR Код для добавления в друзья",
              header: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="ScanQR"
            component={ScanQrPage}
            options={{
              title: "QR Код для добавления в друзья",
              header: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="Docs"
            component={DocsPage}
            options={{
              title: "Документы",
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              title: "Войти",
            }}
          />
          <Stack.Screen
            name="Register1"
            component={RegisterPage}
            options={{
              title: "Регистрация",
            }}
          />
          <Stack.Screen
            name="Register2"
            component={RegisterPageSecond}
            options={{
              title: "Регистрация",
            }}
          />
        </Stack.Navigator>
        {token && <FloatingNav />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
